"use client"
import PostItem from './PostItem/PostItem'
import styles from './Posts.module.scss'
import React from 'react'
import { IPost } from '@/types/types'

interface PostsClientProps {
	posts: IPost[]
}

// export default function Posts({ posts }: PostsClientProps) {
// 	console.log(posts);

// 	return (
// 		<div>
// 			{posts.map((post) => {
// 				return <PostItem key={post.id} userId={post.userId} title={post.title} body={post.body} />
// 			})}
// 		</div>
// 	)
// }

const Posts: React.FC<PostsClientProps> = ({ posts }) => {

	return (
		<div>
			{posts.map((post) => {
				return <PostItem key={post.id} userId={post.userId} id={post.id} title={post.title} body={post.body} />
			})}
		</div>
	)
}

export default Posts