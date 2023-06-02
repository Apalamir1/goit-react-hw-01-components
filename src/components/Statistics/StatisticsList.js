import PropTypes from 'prop-types';
import Statistics from './Statistics';
import style from './Statistics.module.css';

export default function StatisticsList({ statistics, title }) {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title.toUpperCase()}</h2>}
      <ul className={style.list}>
        {statistics.map(({ id, label, percentage }) => (
          <Statistics key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
}

StatisticsList.propTypes = {
  title: PropTypes.string.isRequired,
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }).isRequired
  ),
};
