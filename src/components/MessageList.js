import React, { Component } from 'react';
import NewMessage from './Message'

const MessageList = ({messages}) => {
		return(
			<div className="container">
			{messages.map((message) => <NewMessage message={message}/>)}
			</div>
		)
}

export default MessageList
