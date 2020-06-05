import React, { useState } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import styles from './MessageBoard.module.css';
import {PopUp} from "./PopUp";
import { addMessage, deleteMessage, clearMessages } from '../actions/messages'

const messages = (messages) => messages

function MessageBoard({ dispatch, messages }) {

  // const messages = state
  const [input, setInput] = useState('');
  const [popupMessage, setPopupmessage] = useState({index:-1,message:""})
  const handleClose = ()=>{setPopupmessage({index:-1,message:""})}
  const handleAdd = () =>{if(input!=="") {dispatch(addMessage(input));setInput("")}}
  const handleDelete = (index) =>{dispatch(deleteMessage(index))}
  const handleClear = ()=>{dispatch(clearMessages())}
  const onTextCHange = (e)=>{setInput(e.target.value);};
  return (
      <div className={styles.container}>
        <div className={styles.messageBoard}>
          <div className={styles.mbHeader}>
            <h1 className={styles.mbH1}>
              @ VerY FunCt1on@l m3ss@ge b0ard tHat d0e$ not sto3 y03 me$$Age
            </h1>
          </div>
          <div className={styles.mbMsgContainer} id="mb-msg-container">
            {messages.map((message,index)=>{
              return <div key={index} className={styles.mbMsg}><span onClick={()=>{setPopupmessage({index: index, message: message});}}>{message}</span>
                <button onClick ={()=>{handleDelete(index)}}>delete</button></div>
            })}
          </div>
          <div className={styles.mbForm}>
            <textarea className={styles.msgInputTextarea} cols={50} rows={6} id="textInput" value={input} onChange={onTextCHange}/>
            <button className={styles.msgSubmitBtn} onClick={()=>{handleAdd('input')}}>Post</button>
            <button className={styles.msgSubmitBtn} onClick={()=>{handleClear()}}>Clear</button>
            <button className={styles.msgSubmitBtn} onClick={()=>{setInput("")}}>Clear From</button>
          </div>
        </div>
        {popupMessage.index!==-1? <PopUp messages={popupMessage.message}  handleClose={handleClose()} index={popupMessage.index}/>:null}
      </div>
  );
}
export default connect(messages)(MessageBoard)