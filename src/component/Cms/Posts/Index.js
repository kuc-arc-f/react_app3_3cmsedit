import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import IndexRow from './IndexRow';
import firebase from 'firebase'
import LibCmsPosts from '../../../libs/LibCmsPosts';

//
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {data: ''}
        this.db = null
    }
    componentDidMount(){
        this.get_items()        
    }
    async get_items(){
        var items = []
        var self = this
        this.database = firebase.firestore()
        var dbRef = this.database.collection('cms_posts')
        dbRef = dbRef.orderBy("created_at", "desc")
        var querySnapshot = await dbRef.get()
        querySnapshot.forEach(function(doc) {
            var item = doc.data()
            items.push({
                id : doc.id,
                title : item.title,
                content : item.content,
                created_at : item.created_at,
                category_id: item.category_id,
            })            
        })
        var categories = await LibCmsPosts.get_category_items(firebase)
        items = LibCmsPosts.get_post_items(items , categories)
// console.log( d )
        self.setState({ data: items })
    }
    tabRow(){
        if(this.state.data instanceof Array){
            return this.state.data.map(function(object, i){
                return <IndexRow obj={object} key={i} />
            })
        }
    }
    render(){
        return (
        <div className="container">
            <h3>Posts - index</h3>
            <div className="row">
                <div className="col-md-6">
                    <Link to="/cms_posts_create"
                     className="btn btn-sm btn-primary">+ Create
                    </Link>
                </div>
                <div className="col-md-6">
                </div>
            </div><br />
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {this.tabRow()}
                </tbody>
            </table>
        </div>
        )
    }
}

export default Index;

