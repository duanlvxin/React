import { Component } from "react";

class MessageBoard extends Component {

    state = {
        name: '',
        message: ''
    }
    
    changeName = ({target})=>{
        this.setState({name:target.value})
    }

    render() {
        const {myAddMessage} = this.props;
        const {name,message} = this.state;
        return <div className="addMessage">
            <input type="text" placeholder="请输入昵称" value={name} onChange={this.changeName}/>
            <textarea placeholder="请输入留言" value={message} onChange={({target})=>{this.setState({message:target.value})}}></textarea>
            <button onClick={()=>{myAddMessage(name,message);this.setState({name:'',message:''})}}>提交留言</button>
        </div>
    }
}

export default MessageBoard;