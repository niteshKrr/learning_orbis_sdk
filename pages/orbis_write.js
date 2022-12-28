import React, { useState, useEffect } from 'react';
import { Button } from '@nextui-org/react';
/** Import Orbis SDK */
import { Orbis } from '@orbisclub/orbis-sdk';

let orbis = new Orbis();

const orbis_write = () => {
	const createPost = async () => {
		let res = await orbis.isConnected();
		if (!res) {
			await orbis.connect_v2({
				provider: window.ethereum,
				lit: true,
			});
		}
		/** To create a post in the 'gm' channel of the orbis group */
		let myFirstPost = await orbis.createPost({
			body: 'Hii Drift DAO "Nitesh Krr." 🚀🔥',
			context: 'my-first-post',
		});
		// "kjzl6cwe1jw14910vywupkzi11miprilhjx6zr1mmqsv06ewuxtm3q1haewscmc"
		console.log('successfully posted: ', myFirstPost);
	};

	const getPost = async () => {
		let res = await orbis.isConnected();
		if (!res) {
			await orbis.connect_v2({
				provider: window.ethereum,
				lit: true,
			});
		}

		let { data, error } = await orbis.getPost(
			'kjzl6cwe1jw14910vywupkzi11miprilhjx6zr1mmqsv06ewuxtm3q1haewscmc'
		);

		console.log('fetched data is:', data);
		console.log('errror is: ', error);
	};

	const likePost = async () => {
		let res = await orbis.isConnected();
		if (!res) {
			await orbis.connect_v2({
				provider: window.ethereum,
				lit: true,
			});
		}
		let result = await orbis.react(
			'kjzl6cwe1jw14910vywupkzi11miprilhjx6zr1mmqsv06ewuxtm3q1haewscmc',
			'like'
		);
		console.log('result is: ', result);
	};
	const hahaPost = async () => {
		let res = await orbis.isConnected();
		if (!res) {
			await orbis.connect_v2({
				provider: window.ethereum,
				lit: true,
			});
		}
		let result = await orbis.react(
			'kjzl6cwe1jw14910vywupkzi11miprilhjx6zr1mmqsv06ewuxtm3q1haewscmc',
			'haha'
		);
		console.log('result is: ', result);
	};
	const downvotePost = async () => {
		let res = await orbis.isConnected();
		if (!res) {
			await orbis.connect_v2({
				provider: window.ethereum,
				lit: true,
			});
		}
		let result = await orbis.react(
			'kjzl6cwe1jw14910vywupkzi11miprilhjx6zr1mmqsv06ewuxtm3q1haewscmc',
			'downvote'
		);
		console.log('result is: ', result);
	};

	return (
		<div className="mx-4 my-10 flex justify-center items-center flex-col">
			<div className="text-4xl my-5 text-blue-500 text-center font-bold underline">
				Orbis - write (create post)
			</div>
			<div className="my-4">
				<Button shadow color="primary" auto onPress={createPost}>
					create post
				</Button>
			</div>
			<div className="my-4">
				<Button shadow color="primary" auto onPress={getPost}>
					get post
				</Button>
			</div>
			<div className="my-4">
				<Button shadow color="success" auto onPress={likePost}>
					like the post
				</Button>
			</div>
			<div className="my-4">
				<Button shadow color="warning" auto onPress={hahaPost}>
					react haha to the post
				</Button>
			</div>
			<div className="my-4">
				<Button shadow color="error" auto onPress={downvotePost}>
					downvote post
				</Button>
			</div>
		</div>
	);
};

export default orbis_write;
