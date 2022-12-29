import PropTypes from "prop-types";
import './TransactionHistory.css';

export const TransactionHistory = ({items}) => {
  return (
    <table className="transaction-history">
      <thead className="table-head">
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className="table-body">
        {items.map(transaction => 
        <tr key={transaction.id}>
          <td>{transaction.type}</td>
          <td>{transaction.amount}</td>
          <td>{transaction.currency}</td>
        </tr>)}
      </tbody>
    </table>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
  }))
};