import React, { Component } from 'react'
import { DatePicker } from 'antd'
import { connect } from 'react-redux'
import Style from './index.less'
import Toast from '../../components/Toast'
import Loading from '../../components/Loading'
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
let flag = false
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
     onChange(date, dateString) {
        console.log(date, dateString);
      }
    render() {


        return (
            <React.Fragment>
                <style dangerouslySetInnerHTML={{ __html: Style }} />
                <div className="container">
                    <DatePicker onChange={()=>this.onChange()} />
                    
                   
                </div>

            </React.Fragment>
        )

    }
}
export default connect(


)(App)