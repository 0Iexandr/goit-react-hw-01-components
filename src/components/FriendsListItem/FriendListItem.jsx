import PropTypes from "prop-types";
import './FriendsListItem.css';

export const FriendListItem = ({name, isOnline, avatar}) => {
  return (
    <li className="item">
      <span className="status" style={{background: isOnline ? 'green' : 'red'}}></span>
      <img className="friends-avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
};