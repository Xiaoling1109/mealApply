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
            datePickerShow: false
        }
    }
    onChange(date, dateString) {
        console.log(date, dateString)
        this.setState({
            datePickerShow: true
        })
    }
    render() {
        const { datePickerShow } = this.state

        return (
            <React.Fragment>
                <style dangerouslySetInnerHTML={{ __html: Style }} />
                <div className="container">
                    <div className="mealName">
                        <div className="name">申请姓名：</div>
                        <div>
                            <input placeholder="请输入申请人的姓名" />
                        </div>

                    </div>
                    <div className="mealDate">
                        <div className="date">申请日期：</div>
                        <div>
                            <DatePicker onChange={() => this.onChange()} placeholder="选择日期" />
                        </div>
                    </div>
                    <div className="applyMeal">申请用餐</div>

                </div>

            </React.Fragment>
        )

    }
}
export default connect(


)(App)