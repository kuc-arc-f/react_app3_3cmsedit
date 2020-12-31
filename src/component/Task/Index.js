import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import IndexRow from './IndexRow';
import firebase from 'firebase'
import LibCommon from '../../libs/LibCommon';
import LibPaginate from '../../libs/LibPaginate';
//
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {data: '', pagenate_display: 0}
        this.db = null
        this.page = 1
        this.handleClickPagenate = this.handleClickPagenate.bind(this);
        this.handleClickPagenateP1 = this.handleClickPagenateP1.bind(this);
    }
    componentDidMount(){
        this.get_items()        
    }
    get_items(){
        LibPaginate.init();
        var page_info = LibPaginate.get_page_start(this.page);         
console.log(page_info)
        var items = []
        var self = this
        this.database = firebase.firestore()
        var dbRef = this.database.collection('tasks')
        dbRef = dbRef.orderBy("created_at", "desc").limit(page_info.limit)
        dbRef.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                /* console.log(doc.id, " => ", doc.data()) */
                var item = doc.data()
//console.log("dt=", item.created_at.toDate())
                item = LibCommon.convert_string_date(item )
                items.push({
                    id : doc.id,
                    title : item.title,
                    content : item.content,
                    created_at : item.created_at,
                    date_str: item.date_str 
                })            
            })
            items = LibPaginate.get_page_items(items, page_info.start , page_info.limit )
            var is_paginate = LibPaginate.is_paging_display(items.length)
            self.setState({ data: items, pagenate_display: is_paginate })
//console.log( items )
        })        
    }
    tabRow(){
        if(this.state.data instanceof Array){
            return this.state.data.map(function(object, i){
                return <IndexRow obj={object} key={i} />
            })
        }
    }
    handleClickPagenateP1(){
        this.page = 1
        this.get_items()
    }
    handleClickPagenate(){
        var page = this.page
        this.page = page + 1
        console.log( "page=", this.page )
        this.get_items()
    }
    dispPagenate(){
        if(this.state.pagenate_display ===1){
            return(
            <div className="paginate_wrap">
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button onClick={this.handleClickPagenateP1} className="btn btn-lg btn-outline-primary">
                        1st
                    </button>
                    <button onClick={this.handleClickPagenate} className="btn btn-lg btn-outline-primary">
                        >
                    </button>
                </div>
            </div>
            )
        }
    }    
    render(){
        return (
        <div className="container">
            <h3>Task - index</h3>
            <div className="row">
                <div className="col-md-6">
                    <Link to="/task_create"
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
                    <th>Conent</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {this.tabRow()}
                </tbody>
            </table>
            <hr />
            {this.dispPagenate()}
            <br /><br />
        </div>
        )
    }
}

export default Index;

