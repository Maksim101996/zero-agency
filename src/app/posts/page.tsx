import { fetchPosts } from "@/API/api";
import { IPost } from "@/types/types";
import React from "react";
import Posts from "../components/Posts/Posts";





const Page = async () => {
	const posts: IPost[] = await fetchPosts()

	if (!posts) {
		return <div>Постов нет</div>
	}
	return (
		<>
			<Posts posts={posts} />
		</>)
}

export default Page