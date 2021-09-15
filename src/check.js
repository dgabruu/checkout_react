const func=()=>{

    return(

        <>
    <button type='button' className='btn btn-success row col-sm-3'data-toggle="modal"
 data-target="#exampleModalCenter" >Checkout</button>
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
        <h3 className='h6 text-success'>PLSD457 : </h3> 
      <p className='dist1'>15% discount for orders above $10000 (pre-discount)</p>
        </div>
     
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default func;