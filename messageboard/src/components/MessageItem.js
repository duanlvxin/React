import { PureComponent } from "react";

class MessageItem extends PureComponent {
    constructor(props){
        super(props);
        this.state =  {
            toEdit: false,
            editMessage: props.message
        }
    }


    editInput = null;

    componentDidUpdate(prevProps, prevState) {
        if (!prevState.toEdit && this.state.toEdit) {
            this.editInput.focus();
            this.editInput.value = this.state.editMessage;
        }
    }

    render() {
        const { id, name, message, deleteMessage, changeChecked, checked, changeMessage } = this.props;
        const { toEdit, editMessage } = this.state;
        return <li>
            <div className="user_wrap">
                <h3 className="user_name">{name}</h3>
                <input type="checkbox" checked={checked} onChange={({ target }) => { changeChecked(target.checked, id) }}></input>
            </div>
            <p onDoubleClick={() => {
                this.setState({ toEdit: true });
            }}
                className={toEdit ? "hide" : "no-hide"}>
                {editMessage}
            </p>
            <p className={toEdit ? "edit no-hide" : "edit hide"}>
                <input className="message-input"
                    onBlur={({ target }) => {
                        this.setState({ toEdit: false });
                        if (target.value.trim()) {
                            changeMessage(id, this.state.editMessage)
                        }else{
                            this.setState({ editMessage: message });
                        }
                    }}
                    value={this.state.message}
                    onChange={({ target }) => {
                        this.setState({ editMessage: target.value });
                    }}
                    ref={(node) => {
                        this.editInput = node;
                    }}
                >
                </input>
            </p>
            <a onClick={() => deleteMessage(id)}>删除</a>
        </li>
    }
}

export default MessageItem;