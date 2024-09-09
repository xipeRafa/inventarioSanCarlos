import { useContext,  useState } from 'react';

import { AddAuction } from './AddAuction';
import { AuctionCard } from './AuctionCard';

import { FireStoreDataContext } from '../../context/FireStoreDataContext';
import { AuthContext } from '../../context/AuthContext';

export const AuctionBody = () => {
  const { items } = useContext(FireStoreDataContext);
  const { stateLogout } = useContext(AuthContext);




          const[sliceState, setSliceState]=useState(0)
          let prodByPage = 20;
          const[sliceAlert, setSliceAlert]=useState('')

          const [hmState, setHmState]=useState(true)


  return (
    <div className="">
        <button onClick={()=>setHmState(!hmState)}> {(hmState ? 'hombre' : 'mujer').toUpperCase()} </button>
      {localStorage.getItem('userEmailLS') !== null && <AddAuction />}

      {stateLogout ? (
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 p-5 g-3 border mt-1 ">
          {items.sort((a, b) => b.duration - a.duration).filter(el => el.para === (hmState ? 'hombre' : 'mujer')).slice(sliceState, sliceState + prodByPage).map((doc, i) => {
            return <AuctionCard item={doc} key={i} />;
          })}
        </div>
      ) : (
        ''
      )}






         <div className='sliceButtons'>

            <button className={sliceState === 0 ? 'd-none' : 'button'} onClick={()=>{
                                                                  if(sliceState > 0){
                                                                      setSliceState(sliceState - prodByPage)
                                                                      window.scrollTo(0,0)
                                                                    }
                                                                  }
                                                                }>
                                                                    ⇦ Anterior
            </button>  



            <button className={sliceState === prodByPage || sliceState === 0 ? 'd-none' : 'button'} onClick={()=>{ 
                                                                                                        setSliceState(0)
                                                                                                        window.scrollTo(0,0) 
                                                                                                    }
                                                                                                  }>
                                                                                                      ０
            </button>   



            <button className='button' onClick={()=>{ 
                                    if(items.length > sliceState + prodByPage){
                                        setSliceState(sliceState + prodByPage) 
                                        window.scrollTo(0,0) 
                                    }else{
                                        setSliceAlert(' No hay mas Productos en esta Lista')
                                        setTimeout(()=>{
                                            setSliceAlert('')
                                        },2500)
                                    }
                                }
                    }>
                        Siguiente ⇨ 
            </button>  


            <span className='sliceAlert'>{sliceAlert}</span>


            <p className='sliceButtonsP'>De: {sliceState + 1} a: {items.length > sliceState + prodByPage ? sliceState + prodByPage : items.length}</p>
            <p className='sliceButtonsP'>Paginas de {prodByPage} Prod. c/u </p>

        </div>
    </div>
  );
};
