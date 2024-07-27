import { IPost } from "@/types/types";

export const fetchPosts = async (): Promise<IPost[]> => {
	try {
		const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
		console.log(res);
		const posts = await res.json()
		return posts
	}
	catch (error) {
		console.log(error);
		return []

	}
}
