import React from "react"
import { connect } from "react-redux"

import { fetchUser } from "../actions/user-actions"

@connect((store) => {
    return {
        user: store.user.user
    };
})
export default class Layout extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchUser())
    }

    render() {
        const { user } = this.props;

        return <div>
            <p>Username: {user.login}</p>
        </div>
    }
}