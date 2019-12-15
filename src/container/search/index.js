import React, { Component } from 'react'

import { connect } from 'react-redux'
import Style from './index.less'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {

        return (
            <React.Fragment>
                <style dangerouslySetInnerHTML={{ __html: Style }} />
                <div className="container">Search</div>

            </React.Fragment>
        )

    }
}
export default connect(


)(Search)