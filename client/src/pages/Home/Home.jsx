import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import MessageContainer from '../../components/MessageContainer/MessageContainer'

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-neutral-700 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40'>
			<Sidebar />
			<MessageContainer />
		</div>
  )
}

export default Home
