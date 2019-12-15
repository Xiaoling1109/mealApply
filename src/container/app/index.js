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
            datePickerShow: false,
            slected:'launch'
        }
    }
   
    onChange(date, dateString) {
        console.log(date, dateString)
        this.setState({
            datePickerShow: true
        })
    }
    handleClick(){
        document.activeElement.blur();
        this.$refs.scanTextbox.setAttribute('readonly', 'readonly');
    }
    render() {
        const { datePickerShow,slected } = this.state

        return (
            <React.Fragment>
                <style dangerouslySetInnerHTML={{ __html: Style }} />
                <div className="containee">
                    <div className="container">
                        <div className="mealName">
                            <div className="name">申请姓名：</div>
                            <div>
                                <input placeholder="请输入申请人的姓名" />
                            </div>

                        </div>
                        <div className="mealDate">
                            <div className="date">申请日期：</div>
                            <div className="datePicker" onClick={()=>{this.handleClick()}}>
                                <DatePicker  onChange={() => this.onChange()} placeholder="选择日期" />
                            </div>
                        </div>
                        <div className="mealType">
                            <div className="type">用餐类型：</div>
                            <span style={slected=="launch"?{background:'#FFDB55'}:null}>午餐</span><span style={slected=="dinner"?{background:'#FFDB55'}:null}>晚餐</span>
                        </div>
                        <div className="applyMeal">申请用餐</div>

                    </div>
                </div>

            </React.Fragment>
        )

    }
}
export default connect(


)(App)