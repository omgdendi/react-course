import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let state = props.dialogPage
    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id}/>)

    let newMessageElement = React.createRef();

    let onAddMessage = () => {
        props.addMessage();
    }

    let changeMessage = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea cols="30" rows="5"
                              ref={newMessageElement}
                              value={state.newMessageText}
                              onChange={changeMessage}
                    />
                </div>
                <div>
                    <button onClick={onAddMessage}>Add message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;