import ReactDOM from 'react-dom';

 // import product from "./product";

import React from 'react';
// import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default class Home extends React.Component{
render(){
  let name = "search";
let id = "searchButton";
let placeholder = "请输入...";
let buttonName = "搜索";
  return(
    <Router>
  <div>
        <input type="text"  placeholder={placeholder} name={name} id={id}/>
        <button><i><Link to="/product">{buttonName}</Link></i></button>
   </div>
   </Router>
   )
}
}
ReactDOM.render(
        <Home/>,
        document.getElementById('search')
      );

