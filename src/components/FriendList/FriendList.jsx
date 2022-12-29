import PropTypes from "prop-types";
import { FriendListItem } from "../FriendsListItem/FriendListItem";
import './FriendsList.css';

export const FriendList = ({friends}) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => <FriendListItem 
        avatar={friend.avatar}
        isOnline={friend.isOnline}
        name={friend.name}
        key={friend.id}
      />)}
    </ul>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
  }))
};