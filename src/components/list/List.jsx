import "./list.css";
import UserInfo from './UserInfo/UserInfo'; // Ensure the filename is 'UserInfo.jsx' (not 'Userinfo.jsx')
import ChatList from './chatList/ChatList';

const List = () => {
  return (
    <div className='list'>
      <UserInfo/>
      <ChatList/>
    </div>
  )
}

export default List