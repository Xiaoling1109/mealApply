import { ERROR_MSG, AUTH_SUCCESS} from './action-types'

const baseUrl="http://222.87.198.6:10035"



const errorMsg = msg => ({ type: ERROR_MSG, data: msg })
const authSuccess = user => ({ type: AUTH_SUCCESS, data: user })





export const login = (password, callback) => {
    return dispatch => {
        fetch(`${baseUrl}/users/login`, {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Accept': ' application/json',
                'Token':localStorage.getItem('password')
            },
            body: JSON.stringify({ password })
        }).then(data => data.json())
            .then(data => {
                localStorage.setItem('password',data.token)
                if (data.code == 0) {
                    dispatch(authSuccess(data.data))
                    return callback && callback(data.code)
                } else {
                    dispatch(errorMsg(data.msg))
                    return callback && callback(data.code)
                }
            })
    }
}




