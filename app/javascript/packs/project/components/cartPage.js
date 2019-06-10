import React from 'react';
import Header from './comps/Header'
import Footer from './comps/Footer'
import { MDBBtn, MDBFormInline,MDBInput, MDBBtnGroup, MDBIcon, MDBCol, MDBRow, MDBNavLink } from 'mdbreact';
import {MDBCard, MDBCarousel, MDBListGroup, MDBListGroupItem,MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
'mdbreact';

import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

class Cart extends React.Component {
    
	constructor(props) {
	
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            cart: null
        }
    
	}

    componentWillMount() {

        var cart_count = localStorage.cart;
        if (cart_count!=null && cart_count!=undefined && cart_count!='0'){
            this.setState({cart:'1'});
        }
    }
	
	handleSubmit(e) {

		e.preventDefault()

	}
	
	handleChange(e) {

    } 

    handleClick(e){
        if(e.target.id==='redirect')this.props.history.push('/')
        else{
            localStorage.setItem('cart','0')
            this.setState({cart:null})
            alert('Removed 1 item')
            this.props.history.push('/cart')
        }

    }
    
    render() {

        if(this.state.cart === null) {
            return(
                <div className = 'App'>
                    <Header></Header>
                    <MDBContainer style = {{position:'relative', top:'200px'}}>
                        <MDBRow className = 'justify-content-center'>
                            <MDBCol md = '8'>
                                <p className = 'text-center mb-4 mt-0' style = {{fontSize: '30px'}}> 
                                    Your Shopping Cart is empty. 
                                </p>
                                <p className = 'text-center mb-4 mt-0' style = {{fontSize: '15px'}}> 
                                    Continue Shopping on the CatchCare homepage, learn about today's deals. 
                                </p>
                                <div className = 'text-center mb-4 mt-5'>
                                    <MDBBtn id='redirect' color = 'purple' onClick={this.handleClick} type = 'submit' className = 'btn-block z-depth-2 white-text'>
                                         Continue Shopping
                                    </MDBBtn>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
        )}
        else {
            return(
                <div name = 'App'>
                    <Header></Header>
                    <MDBContainer style = {{position:'relative', top:'200px'}}>
                        <MDBRow className = 'justify-content-center'>
                            <p className = 'text-center mb-4 mt-0' style = {{fontSize: '30px'}}> 
                                Your Cart
                            </p>
                        </MDBRow>
                        <MDBTable hover>
                            <MDBTableHead>
                            <tr>
                            <th>#</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th></th>
                            </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                            <tr>
                            <td>1</td>
                            <td>Outshine Double Crutch</td>
                            <td>$20 </td>
                            <td>1</td>
                            <td><MDBBtn onClick = {this.handleClick} className = 'white-text' color = 'purple'>Remove</MDBBtn>
                            </td>
                            </tr>
                            </MDBTableBody>
                        </MDBTable>
                        <MDBRow className = 'dflex justify-content-right'>
                            <MDBBtn className = 'white-text' color = 'purple'>Proceed to checkout</MDBBtn>
                        </MDBRow>
                    </MDBContainer>
                </div>
                )
        }
    }
}
export default Cart