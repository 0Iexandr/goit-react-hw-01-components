import PropTypes from "prop-types";
import './Statistics.css';

export const Statistics = ({title, stats}) => {
  const getRandomColor = () => {
    const o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
  }

  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(stat => 
        <li style={{background: getRandomColor()}} key={stat.id}>
          <span className="label">{stat.label}</span>
          <span className="percentage">{stat.percentage}%</span>
        </li>)}
      </ul>
    </section>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  }))
};