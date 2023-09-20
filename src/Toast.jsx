import { ToastContainer, toast } from "react-toastify";

export function Toast () {
	return (
		<ToastContainer 
			autoClose={500}
			hideProgressBar={true}
		/>
	)
}

export const notifyAdded = () => toast("Added!");
export const notifyDeleted = () => toast("Deleted!")
export const notifyCompleted = () => toast("Completed!")
export const notifyRestored = () => toast("Restored!")