import React from 'react';

const CommentDetail = (props) => {
	return (
		<div className="comment">
			<a href="/" className="avatar">
				<img alt="avatar" src={ props.avatar } />
			</a>
			<div className="content">
				<a href="/" className="author">
					{ props.author }
				</a>
			</div>
			<div className="metadata">
				<span className="date">
					{ props.timePosted }
				</span>
			</div>
			<div className="text">
				{ props.text }
			</div>
		</div>
	);
};

// Make CommentDetail available to all other files in the project
export default CommentDetail;