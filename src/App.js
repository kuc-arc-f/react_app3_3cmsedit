import React, { Component } from 'react';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import Navbar from './component/Layouts/Navbar';
import Foot from './component/Layouts/Foot';

import About from './component/About';
import Home from './component/Home';
// import Test from './component/Test';
/* task */
import TaskCreate from './component/Task/Create';
import TaskIndex from './component/Task/Index';
import TaskEdit from './component/Task/Edit';
import TaskTest from './component/Task/Test';
/* users*/
import Login from './component/Users/Login';
import Logout from './component/Users/Logout';
/*cms*/
import CmsPostsIndex from './component/Cms/Posts/Index';
import CmsPostsCreate from './component/Cms/Posts/Create';
import CmsPostsShow from './component/Cms/Posts/Show';
import CmsPostsEdit from './component/Cms/Posts/Edit';

/*cms_pages */
import CmsPagesIndex from './component/Cms/Pages/Index';
import CmsPagesCreate from './component/Cms/Pages/Create';
import CmsPagesShow from './component/Cms/Pages/Show';
import CmsPagesEdit from './component/Cms/Pages/Edit';

/*cms_category */
import CmsCategoryIndex from './component/Cms/Category/Index';
import CmsCategoryCreate from './component/Cms/Category/Create';
import CmsCategoryEdit from './component/Cms/Category/Edit';
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
            <Route path='/login' component={Login}/>
            <Route path='/logout' component={Logout}/>
            <Route path='/task' component={TaskIndex}/>
            <Route path='/task_create' component={TaskCreate}/>
            <Route path='/task_edit/:id' component={TaskEdit}/>
            <Route path='/task_test' component={TaskTest}/>
            <Route path='/cms_posts' component={CmsPostsIndex}/>
            <Route path='/cms_posts_create' component={CmsPostsCreate}/>
            <Route path='/cms_posts_show/:id' component={CmsPostsShow}/>
            <Route path='/cms_posts_edit/:id' component={CmsPostsEdit}/>
            <Route path='/cms_pages' component={CmsPagesIndex}/>
            <Route path='/cms_pages_create' component={CmsPagesCreate}/>
            <Route path='/cms_pages_show/:id' component={CmsPagesShow}/>
            <Route path='/cms_pages_edit/:id' component={CmsPagesEdit}/>
            <Route path='/cms_category' component={CmsCategoryIndex}/>
            <Route path='/cms_category_create' component={CmsCategoryCreate}/>
            <Route path='/cms_category_edit/:id' component={CmsCategoryEdit}/>
            <Foot />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
