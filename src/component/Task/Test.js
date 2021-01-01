
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase'
//
class Test extends Component {
    constructor(props){
        super(props)
        this.state = {title: '', content: ''}
        this.handleClick = this.handleClick.bind(this);
        this.db = null
    }
    componentDidMount(){
        this.database = firebase.firestore()
    }
    async check_auth(){
        try {
//            var valid= await LibAuth.valid_auth(firebase)
//console.log("#valid :" , valid )
        } catch (err) {
            console.error(`Error: ${JSON.stringify(err)}`)
        }     

    }
    async add_item(num){
        try{
            var item = {
                title: "title-" + num,
                content: "content-" + num,
                created_at: firebase.firestore.Timestamp.fromDate(new Date()),
            }
            var docRef = await this.database.collection('tasks').add(item)
            console.log("Document written with ID: ", docRef.id)
            return true
        } catch (e) {
            console.error(e);
            console.error("error, csrf token");
            return false
        } 
    }
    async add_post_item(num){
        try{
            var item = {
                category_id: "8eV2uVRBU3mNVz3sRase",
                title: "title-1231B-" + num,
                content: "content-1231B-"+ num,
                created_at: firebase.firestore.Timestamp.fromDate(new Date()),
            }
            var docRef = await this.database.collection('cms_posts').add(item)
            console.log("Document written with ID: ", docRef.id)
            return true
        } catch (e) {
            console.error(e);
            console.error("error, csrf token");
            return false
        } 
    }
    // test_date
    async test_get(){
        try{
            var items = []
            this.database = firebase.firestore()
            var dbRef = this.database.collection('tasks')
            dbRef = dbRef.orderBy("created_at", "desc").limit(10)
            var querySnapshot = await dbRef.get()
            querySnapshot.forEach(function(doc) {
                var item = doc.data()
                items.push(item)            
            })
// console.log(items)
            return items
            /*
            var items = []
            this.database = firebase.firestore()
            var dbRef = this.database.collection('cms_pages')
            dbRef = dbRef.orderBy("created_at", "desc")
            dbRef.get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    var item = doc.data()
                    items.push(item)            
                })
console.log( items )
            })            
            */
        } catch (e) {
            console.error(e);
            console.error("error, test_get");
            return false
        } 
    }    
    async handleClick(){
console.log("#-handleClick")
        var d = await this.test_get()
/*
        for(var i=0; i< 5; i++){
            this.add_post_item(i+1)
        }
*/
console.log("#-handleClick-End")
    }
    render() {
        return (
        <div className="container">
            <Link to="/task" className="btn btn-outline-primary mt-2">Back</Link>
            <hr className="mt-2 mb-2" />
            <h1 className="mt-2">Test</h1>
            <hr />
            <div className="form-group">
                <button className="btn btn-primary" onClick={this.handleClick}>test
                </button>
            </div>
        
        </div>
        )
    }
}
export default Test;

