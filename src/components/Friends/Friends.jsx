import PropTypes from 'prop-types';
import style from './Friends.module.css';

export default function Friends({ isOnline, avatar, name }) {
  return (
    <li className={style.item}>
      <span className={isOnline ? style.online : style.offline}></span>
      <img className={style.avatar} src={avatar} alt={name} width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
}

Friends.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
