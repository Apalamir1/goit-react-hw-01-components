import PropTypes from 'prop-types';
import Friends from './Friends.jsx';
import style from './Friends.module.css';

export default function FriendsList({ friends }) {
  return (
    <section>
      <ul className={style.list}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <Friends key={id} avatar={avatar} name={name} isOnline={isOnline} />
        ))}
      </ul>
    </section>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
