import React, { useState, useEffect } from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage, setQuickButtons } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import ChatWidgetLogo from './logo-small.png';
import HeaderImage from './logo-dark.png';
import { useParams } from 'react-router-dom';

const buttons = [{ label: 'first', value: '1' }, { label: 'second', value: '2' }];
const ChatWidget = (props) => {
    // const { prop1, prop2 } = useParams();
    useEffect(() => {
        addResponseMessage('Welcome to this awesome chat!');
        setQuickButtons(buttons);
        console.log("token:", props.token);
        console.log("title:", props.title);
        console.log("subtitle:", props.subtitle);
        console.log("props1:", props.prop1);
    }, []);

    const handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        addResponseMessage('Thank you for contact!');
        // Now send the message throught the backend API
    };

    const handleQuickButtonClicked = (data) => {
        console.log(data);
        setQuickButtons(buttons.filter(button => button.value !== data));
    };

    return (
        <div className="ChatWidget">
            {
                // props.token === "6371968684" &&

                <Widget
                    handleNewUserMessage={handleNewUserMessage}
                    handleQuickButtonClicked={handleQuickButtonClicked}
                    profileAvatar={ChatWidgetLogo}
                    // title='DEYOR'
                    title={props.title}
                    subtitle={props.subtitle}
                />
            }
        </div>
    );

}


export default ChatWidget;
