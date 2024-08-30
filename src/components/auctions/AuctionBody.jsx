import { useContext } from 'react';

import { AddAuction } from './AddAuction';
import { AuctionCard } from './AuctionCard';

import { FireStoreDataContext } from '../../context/FireStoreDataContext';
import { AuthContext } from '../../context/AuthContext';

export const AuctionBody = () => {
  const { items } = useContext(FireStoreDataContext);
  const { stateLogout } = useContext(AuthContext);

  console.log(items.filter(el => el.sucursal === 'San Carlos'));

  return (
    <div className="">
      {localStorage.getItem('userEmailLS') !== null && <AddAuction />}

      {stateLogout ? (
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 p-5 g-3 border mt-1 ">
          {items.sort((a, b) => b.duration - a.duration).slice(0,12).map((doc, i) => {
            return <AuctionCard item={doc} key={i} />;
          })}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
