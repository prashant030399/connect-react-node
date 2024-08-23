import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

function Data(){
  axios.get("http://localhost:8090/show",{
params:{x:10, y:20, z:15}
}).then(res=>console.log(res.data));
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Data/>
);

