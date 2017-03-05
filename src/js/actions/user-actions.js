import axios from "axios";

export function fetchUser() {
    return function(dispatch) {
        axios.get("https://api.github.com/users/bsferreira")
            .then((response) => {
                dispatch({type: "FETCH_USER_FULFILLED", payload: response.data})
            })
            .catch((err) => {
                dispatch({type: "FETCH_USER_REJECTED", payload: err})
            })
    }
}
