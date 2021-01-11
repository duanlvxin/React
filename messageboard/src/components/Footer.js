function Footer(props) {
    const {chooseNum, deleteSelect,changeChecked,chooseAll,total} = props;
    return <div className="footer">
        <div>
            <input type="checkbox" checked={chooseAll} onChange={({target})=>{changeChecked(target.checked)}}></input>
            <span>全选</span>
            <span className="delete" onClick={()=>{deleteSelect();}}>删除选中项</span>
        </div>
        <div>
            <span>选中{chooseNum}项,当前共{total}项</span>
            
        </div>
    </div>
}

export default Footer;