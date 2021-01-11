import './css/index.css';
import { Component} from 'react';
import MessageBoard from './components/MessageBoard';
import MessageItem from './components/MessageItem';
import Footer from './components/Footer';

class App extends Component {
    state = {
        messages: [
            {
                id: 1,
                name: 'xiaobai',
                message: '今天好像有点冷啊',
                checked: false
            }, {
                id: 2,
                name: 'xiaohei',
                message: '我也这么决定，瑟瑟发抖.jpg',
                checked: false
            }
        ]
    }

    deleteMessage = (id) => {
        const { messages } = this.state;
        this.setState({
            messages: messages.filter((item) => item.id !== id)
        });
    }

    myAddMessage = (name, message) => {
        if (name.trim() === "" || message.trim() === "") {
            return;
        }
        const myMessage = {
            id: Date.now(),
            name,
            message,
            checked: false
        };
        const { messages } = this.state;
        messages.push(myMessage);
        this.setState({ messages });
    }

    changeChecked = (checked, id) => {
        const { messages } = this.state;
        if (id) {
            for (let i = 0, len = messages.length; i < len; i++) {
                if(messages[i].id===id){
                    messages[i] = {
                        ...messages[i],
                        checked
                    };
                    break;
                }
            };
        }
        else {
            for (let i = 0, len = messages.length; i < len; i++) {
                messages[i] = {
                    ...messages[i],
                    checked
                };
            };
        }
        this.setState({ messages });
    }

    changeMessage = (id, message)=>{
        const {messages} = this.state;
        for (let i = 0, len = messages.length; i < len; i++) {
            if(messages[i].id===id){
                messages[i] = {
                    ...messages[i],
                    message
                };
                break;
            }
        };
        this.setState({ messages });
    }

    deleteSelect = () => {
        const { messages } = this.state;
        this.setState({
            messages: messages.filter(item => !item.checked)
        });
    }

    chooseNum = ()=>{
        const { messages } = this.state;
        return messages.filter((item) => item.checked === true).length;
    }

    chooseAll = ()=>{
        const { messages } = this.state;
        if(messages.length===0){
            return false;
        }else{
            return this.chooseNum()===messages.length;
        }
    }

    render() {
        const { messages } = this.state;
        return <section className="wrap">
            <h2 className="title">留言板</h2>
            <MessageBoard myAddMessage={this.myAddMessage}></MessageBoard>
            <ul className="messageList">
                {
                    messages.map((item) => {
                        return <MessageItem key={item.id} {...item}
                            deleteMessage={this.deleteMessage}
                            checked={item.checked}
                            changeChecked={this.changeChecked}
                            changeMessage={this.changeMessage}
                        ></MessageItem>
                    })
                }
            </ul>
            <Footer changeChecked={this.changeChecked} 
            chooseNum={this.chooseNum()} 
            chooseAll={this.chooseAll()}
            deleteSelect={this.deleteSelect}
            total={messages.length}
            ></Footer>
        </section>
    }
}

export default App;