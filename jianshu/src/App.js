import React, { Component } from "react";
import { Provider } from "react-redux";
import Header from "./common/header";
import './statics/iconfont/iconfont.css';
import store from "./store/index";


function App() {
  return (
      <Provider store={ store }  >
      <Header   />
    </ Provider>
  );
}

export default App;
