import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from "axios";

function Data(){
axios.get("http://localhost:8099/show",{
    params:{empid:101, name:'Prashant', rank:1 }
  }).then(res  => console.log(res.data));  
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Data />
  </>
);

