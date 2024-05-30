import { BiLogOut } from "react-icons/bi";
import useSignout from "../../hooks/useSignout";


const LogoutButton = () => {
	const { loading, signout } = useSignout();

	return (
		<div className='mt-auto'>
			{!loading ? (
				<BiLogOut className='w-6 h-6 text-teal-500 cursor-pointer' onClick={signout} />
			) : (
				<span className='loading loading-spinner'></span>
			)}
		</div>
	);
};
export default LogoutButton;
