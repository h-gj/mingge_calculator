import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import {InputNumber, Button} from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { CopyOutlined } from '@ant-design/icons'



function copyToClipboard(textToCopy) {
  console.log(111, textToCopy);
  // navigator clipboard api needs a secure context (https)
  if (navigator.clipboard && window.isSecureContext) {
      // navigator clipboard api method'
      return navigator.clipboard.writeText(textToCopy);
  } else {
      // text area method
      let textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      // make the textarea out of viewport
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      return new Promise((res, rej) => {
          // here the magic happens
          document.execCommand('copy') ? res() : rej();
          textArea.remove();
      });
  }
}

function App() {
  const [h4, setH4] = useState(0);
  const [f4, setF4] = useState(0);
  const [b4, setB4] = useState(0);
  const [e4, setE4] = useState(0);
  const [g4, setG4] = useState(0);
  const [history, sethistory] = useState(JSON.parse(localStorage.getItem('HISTORY')) || []);


function onClickSave(value) {
  const old_val = JSON.parse(localStorage.getItem('HISTORY')) || [];
  console.log(111, value, old_val);
  old_val.push(value)
  if(old_val.length > 5) {
    old_val.shift()
  }

  sethistory(old_val)
  localStorage.setItem('HISTORY', JSON.stringify(old_val))
}

  return (
    <div className="App">
      <header className="App-header">

      
      
      <h1 style={{color: "rgb(53 115 124 / 85%)"}}>Minge Online Calculator</h1>

        h4
        <InputNumber size="large"
          style={{width: "30%"}}
          value={h4}
          min={0}
          max={99999999}
          defaultValue={0}
          onChange={
            (value) => {
              setH4(value)
            }
          }/>
        f4
        <InputNumber size="large"
          style={{width: "30%"}}
          value={f4}
          min={0}
          max={99999999}
          defaultValue={0}
          onChange={
            (value) => {
              setF4(value)
            }
          }/>
        b4
        <InputNumber size="large"
          style={{width: "30%"}}
          value={b4}
          min={0}
          max={99999999}
          defaultValue={0}
          onChange={
            (value) => {
              setB4(value)
            }
          }/>
        e4
        <InputNumber size="large"
          style={{width: "30%"}}
          value={e4}
          min={0}
          max={99999999}
          defaultValue={0}
          onChange={
            (value) => {
              setE4(value)
            }
          }/>
        g4
        <InputNumber size="large"
          style={{width: "30%"}}
          value={g4}
          min={0}
          max={99999999}
          defaultValue={0}
          onChange={
            (value) => {
              setG4(value)
            }
          }/>


        <span style={{color: "black", fontSize: "42px"}}>
        {
          h4 + Math.sqrt(Math.pow(f4 + Math.sqrt(Math.pow(b4 / 2, 2) - Math.pow(e4 / 2, 2)), 2) - Math.pow(g4 / 2, 2))
        }
        </span>


      </header>

      <Button type="primary" size="large" onClick={() => onClickSave(h4 + Math.sqrt(Math.pow(f4 + Math.sqrt(Math.pow(b4 / 2, 2) - Math.pow(e4 / 2, 2)), 2) - Math.pow(g4 / 2, 2)))}>Save Result</Button>
      &nbsp;&nbsp;

      <Button type="primary" size="large" onClick={() => {setH4(0); setB4(0); setF4(0); setG4(0); setE4(0)}}>AC</Button>
      &nbsp;&nbsp;
      <Button type="primary" size="large" onClick={() => copyToClipboard(h4 + Math.sqrt(Math.pow(f4 + Math.sqrt(Math.pow(b4 / 2, 2) - Math.pow(e4 / 2, 2)), 2) - Math.pow(g4 / 2, 2)))}>CP</Button>
     

        <br />
      <span style={{color: "black", fontSize: "30px", fontWeight: "bold"}}>Recently Saved Results</span>
      <div>
        {
          
          history.map(function(item, idx) {
            return <span>
                
            <span style={{color: "black", fontSize: "18px"}} key={idx}>{item}</span>&nbsp;&nbsp;&nbsp;
            </span>
          })
        }
      </div>


    </div>


  );
}

export default App;
