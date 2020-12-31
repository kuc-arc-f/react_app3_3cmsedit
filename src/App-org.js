import React, { Component } from 'react';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import Navbar from './component/Layouts/Navbar';
import About from './component/About';
import Home from './component/Home';
import Test from './component/Test';
/* task */
import TaskCreate from './component/Task/Create';
import TaskIndex from './component/Task/Index';
import TaskEdit from './component/Task/Edit';
import TaskImportTask from './component/Task/ImportTask';
import TaskTest from './component/Task/Test';
import TaskTestChild from './component/Task/TestChild';
/* todo */
import TodoCreate from './component/Todo/Create';
import TodoIndex from './component/Todo/Index';
import TodoShow from './component/Todo/Show';
import TodoEdit from './component/Todo/Edit';
import TodoImport from './component/Todo/ImportData';
/* CmsEdit */
import CmsEditCreate from './component/CmsEdit/Create';
import CmsEditIndex from './component/CmsEdit/Index';
import CmsEditShow from './component/CmsEdit/Show';
import CmsEditEdit from './component/CmsEdit/Edit';
import CmsEditImport from './component/CmsEdit/ImportData';
/* Plan */
import PlanCreate from './component/Plan/Create';
import PlanIndex from './component/Plan/Index';
import PlanShow from './component/Plan/Show';
import PlanEdit from './component/Plan/Edit';
import PlanImport from './component/Plan/ImportData';
/* Book */
import BookCreate from './component/Book/Create';
import BookIndex from './component/Book/Index';
import BookEdit from './component/Book/Edit';

//
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/test' component={Test}/>
            <Route path='/task' component={TaskIndex}/>
            <Route path='/task_create' component={TaskCreate}/>
            <Route path='/task_edit/:id' component={TaskEdit}/>
            <Route path='/task_import' component={TaskImportTask}/>
            <Route path='/task_test' component={TaskTest}/>
            <Route path='/task_test2' component={TaskTestChild}/>
            
            <Route path='/todo' component={TodoIndex}/>
            <Route path='/todo_create' component={TodoCreate}/>
            <Route path='/todo_show/:id' component={TodoShow}/>
            <Route path='/todo_edit/:id' component={TodoEdit}/>
            <Route path='/todo_import' component={TodoImport}/>

            <Route path='/cms_edit_create' component={CmsEditCreate}/>
            <Route path='/cms_edit' component={CmsEditIndex}/>
            <Route path='/cms_edit_show/:id' component={CmsEditShow}/>
            <Route path='/cms_edit_edit/:id' component={CmsEditEdit}/>
            <Route path='/cms_edit_import' component={CmsEditImport}/>

            <Route path='/plan_create' component={PlanCreate}/>
            <Route path='/plan' component={PlanIndex}/>
            <Route path='/plan_show/:id' component={PlanShow}/>
            <Route path='/plan_edit/:id' component={PlanEdit}/>
            <Route path='/plan_import' component={PlanImport}/>

            <Route path='/book_create' component={BookCreate}/>
            <Route path='/book' component={BookIndex}/>
            <Route path='/book_edit/:id' component={BookEdit}/>
            
            
            
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
