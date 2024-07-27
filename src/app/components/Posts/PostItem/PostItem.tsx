import React from "react"

interface PostItemProps {
	id: number
	userId: number
	title: string
	body: string
}

const PostItem: React.FC<PostItemProps> = ({ userId, title, id, body }) => {
	return (<div>
		<div>id: {id}</div>
		<div>Title: {title}</div>
		<div>Desc: {body}</div>
	</div>)
}

export default PostItem