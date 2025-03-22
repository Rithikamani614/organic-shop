import Section12 from './Section12'
import { Outlet } from 'react-router-dom'; 

function Cart(){
    return(
        <div>
           <Section12/>
           <Outlet/>
        </div>
    )
}
export default Cart;