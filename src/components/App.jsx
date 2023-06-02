import ProfileList from './Profile/ProfileList.js';
import StatisticsList from './Statistics/StatisticsList.js';
import FriendsList from './Friends/FriendsList.js';
import TransactionHistory from './Transactions/TrancsactionHistory.js';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export default function App() {
  return (
    <div>
      <ProfileList user={user} />
      <StatisticsList title="Upload stats" statistics={data} />
      <FriendsList friends={friends} />
      <TransactionHistory transaction={transactions} />
    </div>
  );
}
