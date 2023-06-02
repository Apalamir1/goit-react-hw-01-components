import PropTypes from 'prop-types';
import Trasaction from './Transaction';
import style from './Transaction.module.css';

export default function TransactionHistory({ transaction }) {
  return (
    <table className={style.history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transaction.map(({ id, type, amount, currency }) => (
          <Trasaction
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  );
}
TransactionHistory.protoTypes = {
  transaction: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
