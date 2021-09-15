import React from 'react'
import Check from './check'

class Myitem extends React.Component{
          
    render()
    {
     var total=(this.props.data*1025+ this.props.data1*2550 + this.props.data2*100) 
 
        return(
           <div>
               
            <div>
            <div className='container1 d-flex flex-row'>
                <button type='button' className='btn btn-primary 
                 d-flex justify-content-start' >
                     Plan Items Below..</button>
                     <button type='button' className='btn btn-primary 
                ' data-toggle="modal" data-target="#exampleModalCenter">
                     View Offers</button>
                     </div>
                     <div class="modal " id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered " role="document">
    <div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title text-info h4" id="exampleModalLabel">Promo Codes</h5>
        
      </div>
      <div class="modal-body ">
        <div className='d-flex flex-row  '>
        <h3 className='h6 text-success'>PLSD123 : </h3> 
      <p className='dist'>10% discount for orders above $5000 (pre-discount)</p>
        </div>
        <div className='d-flex flex-row  '>
        <h3 className='h6 text-success'>PLSD456 : </h3> 
      <p className='dist1'>15% discount for orders above $10000 (pre-discount)</p>
        </div>
     
      </div>
    </div>
  </div>
</div>      
            </div>
          < div className='d-flex flex-row m-3 justify-content-around '>{total>0?<h5>Total Price: ${total}</h5>:''}
        {
total>0?

<button type='button'
 onClick={()=>this.props.data3(0,total)} className='btn btn-success row col-sm-3'
  >Checkout</button>


:''
        }
        </div>
       
           </div>
        )
    }
}


export default Myitem;