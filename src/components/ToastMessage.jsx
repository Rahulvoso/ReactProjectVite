import { toast } from 'react-toastify'

const ToastMessage = {

    success: (message) => {
        toast.success(message)
    },

    error: (message) => {
        toast.error(message)
    },

    warning: (message) => {
        toast.warning(message)
    },

    info: (message) => {
        toast.info(message)
    }

}

export default ToastMessage