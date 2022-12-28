import React, { useState, useEffect } from 'react';
import { Button } from '@nextui-org/react';
/** Import Orbis SDK */
import { Orbis } from '@orbisclub/orbis-sdk';

/**
 * Initialize the Orbis class object:
 * You can make this object available on other components
 * by passing it as a prop or by using a context.
 */
let orbis = new Orbis();

export default function App() {
	/** The user object */
	const [user, setUser] = useState();

	/** Calls the Orbis SDK and handle the results */
	async function connectWithOrbis() {
		let res = await orbis.connect_v2({
			provider: window.ethereum,
			lit: true,
		});
		console.log('res is : ', res);
		/** Check if connection is successful or not */
		if (res.status == 200) {
			setUser(res.did);
		} else {
			console.log('Error connecting to Ceramic: ', res);
			alert('Error connecting to Ceramic.');
		}
	}

	const checkIfUserIsConnectedWithOrbis = async () => {
		let res = await orbis.isConnected();
		console.log('res is:', res);
	};

	const logoutOrbis = async () => {
		let res = await orbis.logout();
		console.log('you have been successfully logged out.');
		console.log('res: ', res);
	};

	return (
		<div className="mx-4 my-10 flex justify-center items-center flex-col">
		<div className='text-4xl my-5 text-blue-500 text-center font-bold underline'>
			Orbis - Utils (connect, isConnected, logout)
		</div>
			<div className="my-4">
				<Button shadow color="primary" auto onPress={connectWithOrbis}>
					connect
				</Button>
			</div>
			<div className="my-4">
				<Button
					shadow
					color="warning"
					auto
					onPress={checkIfUserIsConnectedWithOrbis}
				>
					Is Connected
				</Button>
			</div>
			<div className="my-4">
				<Button shadow color="error" auto onPress={logoutOrbis}>
					logout
				</Button>
			</div>
		</div>
	);
}
