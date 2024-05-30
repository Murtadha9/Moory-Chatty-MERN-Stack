import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import useSignin from '../../hooks/useSignin';

const SignIn = () => {

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, signin } = useSignin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signin(username, password);
	};

 
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-neutral-700 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40'>
 				<h1 className='text-3xl font-semibold text-center text-gray-300'>
 					SignIn
 					<span className='text-teal-400 font-bold'> MooryChatty</span>
 				</h1>

 				<form onSubmit={handleSubmit}>
 					<div>
 						<label className='label p-2'>
 							<span className='text-base label-text text-white'>Username</span>
 						</label>
 						<input type='text' placeholder='Enter username'
						 className='w-full input input-bordered h-10'
						 value={username}
						 onChange={(e) => setUsername(e.target.value)}
						  />
 					</div>

 					<div>
 						<label className='label'>
 							<span className='text-base label-text text-white'>Password</span>
 						</label>
 						<input
 							type='password'
 							placeholder='Enter Password'
 							className='w-full input input-bordered h-10'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
 						/>
 					</div>
 					<Link to={'/signup'} className='text-sm font-bold  hover:underline hover:text-teal-400 mt-2 inline-block text-white'>
 						{"Don't"} have an account?
 					</Link>

 					<div>
 						<button className='btn btn-block btn-sm mt-2' disabled={loading}>
						 {loading ? <span className='loading loading-spinner '></span> : "Sign In"}
						</button>
 					</div>
 				</form>
 			</div>
 		</div>
  )
}

export default SignIn
