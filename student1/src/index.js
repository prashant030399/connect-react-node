import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

function Data(){
axios.get("http://localhost:8090/show",{
  params:{rno:101, namee: 'Prashant', marks:90}
}).then(res => console.log(res.data));
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Data/>
);



