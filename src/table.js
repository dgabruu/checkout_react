import React from 'react'
import Data from './data'
import Myitem from './myitem'
import './table.css'

class Table extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
      count:0,
      count1:0,
      count2:0,
      click:1,
      subtotal:0,
      promo:'',
      confirm:true
    }
    this.myloc=this.myloc.bind(this)
  }
  myloc=(e,total)=>{
    this.setState({click:e,
    subtotal:total})
  }
  
    render()
    {
      var price=this.state.subtotal
      console.log('count',this.state.count)
      if(this.state.promo==='PLSD123')
      price=this.state.subtotal - (this.state.subtotal * 10 / 100)
     if(this.state.promo==='PLSD456')
      price=this.state.subtotal - (this.state.subtotal * 15 / 100)
        return(
          <>
          {this.state.click?
            <div>
            <h2 className='display-2'> Welcome !!! </h2>
            <h3 className='h3'> Plan Your List of Products From Below.... </h3>
           <center> <table className="table table-striped table-rounded table-hover w-50">
  <thead className='thead-dark bg-dark text-light'>
    <tr>
      
      <th scope="col">PRODUCT ID</th>
      <th scope="col">PRODUCT NAME</th>
      <th scope="col">PRICE</th>
      <th scope="col">MODIFY ITEMS</th>
    </tr>
  </thead>
  <tbody>
    <tr >
      
      <td>{Data[0].id}</td>
      <td>{Data[0].name}</td>
      <td>${Data[0].price}</td>
      <td><div className='container'><button className='btn btn-warning'
       onClick={()=>this.setState({count:this.state.count+1})}>
        + 
      </button>
      { this.state.count>0?
      <button 
      className='btn btn-warning m-1'  onClick={()=>this.setState({count:this.state.count-1})}>- </button>:''}
      {this.state.count>0?this.state.count:''}
      </div></td> 

    </tr>
    <tr>
     
      <td>{Data[1].id}</td>
      <td>{Data[1].name}</td>
      <td>${Data[1].price}</td>
      <td><div className='container'><button className='btn btn-warning'
       onClick={()=>this.setState({count1:this.state.count1+1})}>
        + 
      </button>
      { this.state.count1>0?
      <button 
      className='btn btn-warning m-1'  onClick={()=>this.setState({count1:this.state.count1-1})}>- </button>:''}
      {this.state.count1>0?this.state.count1:''}
      </div></td> 

    </tr>
    <tr>
     
      <td>{Data[2].id}</td>
      <td>{Data[2].name}</td>
      <td>${Data[2].price}</td>
      <td><div className='container'><button className='btn btn-warning'
       onClick={()=>this.setState({count2:this.state.count2+1})}>
        + 
      </button>
      { this.state.count2>0?
      <button 
      className='btn btn-warning m-1'  onClick={()=>this.setState({count2:this.state.count2-1})}>- </button>:''}
      {this.state.count2>0?this.state.count2:''}
      </div></td> 

    </tr>
  </tbody>
</table> </center>

<Myitem data={this.state.count} data1={this.state.count1} data2={this.state.count2} data3={this.myloc} />

            </div>:<div class="card">
  <h5 class="card-header text-warning">Checking Out...</h5>
  <div class="card-body">
    <h5 class="card-title">Below Items Selected</h5>
    <p class="card-text">
    {
      this.state.subtotal>5000 && this.state.subtotal<10000 && this.state.confirm?<center><div className="form-group d-flex justify-content-center  col-sm-2">
     
      <select id="inputState" onChange={(e)=>{this.setState({promo:e.target.value})}} className="form-control  ">
        <option selected >Choose Promo</option>
        <option className='text-success'>PLSD123</option>
        
      </select>
    </div></center>: this.state.subtotal>=10000 && this.state.confirm?<center><div className="form-group  col-sm-3 d-flex justify-content-center">
     
     <select id="inputState" onChange={(e)=>{this.setState({promo:e.target.value})}} className="form-control ">
       <option selected>Choose Promo</option>
       <option className='text-success'>PLSD456 </option>
       
     </select>

   </div></center>:''
    }
    </p>
    <h5 className='text-success'>Price: ${price}</h5>
    {this.state.confirm?<div>
    <a  class="btn btn-primary" onClick={()=>window.location.pathname='/'}>Cancel </a>
    <a  class="btn btn-primary" onClick={()=>this.setState({confirm:!this.state.confirm})}
     >Buy Items</a></div>:<div>
          <h1 className='text-success'>Congratulations !! Booking Confirmed..</h1>
          <p className='text-dark'>
        
            {this.state.count?<p>{this.state.count} × {Data[0].name}</p>:''}
            {this.state.count1?<p>{this.state.count1} × {Data[1].name}</p>:''}
            {this.state.count2?<p>{this.state.count2} × {Data[2].name}</p>:''}
            <h5>Promotion : {this.state.promo}</h5>

          </p>
          <a  class="btn btn-primary" onClick={()=>window.location.pathname='/'}>Buy more </a>
       </div>}
  </div>
</div>}
            </>
        )
    }


}

export default Table