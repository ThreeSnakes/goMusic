import React from 'react';
import { injectStripe, StripeProvider, Elements, CardElement } from 'react-stripe-elements';

const INITIAL_STATE = "INITIAL",
  SUCCESS_STATE = "COMPLETE",
  FAILED_STATE = "FAILED";

class CreditCardForm extends React.Component {
  constructor(propos) {
    super(propos);
    this.state = {
      status: INITIAL_STATE
    }
  }

  renderCreditCardInformation() {
    const style = {
      base: {
        'fontSize': '20px',
        'color': '#495057',
        'fontFamily': 'apple-system,BlinkMacSystemFont, "SegoeUI",Roboto,"Helvetica Neue",Arial,sans-serif'
      }
    };

    const usersavedcard = <div>
      <div className="form-row text-center">
        <button type="button" className="btn btn-outline-success text-center mx-auto">Use saved card?</button>
      </div>
      <hr />
    </div>

    const rememberCardCheck = <div className="form-row form-check textcenter">
      <input className="form-check-input" type="checkbox" value="" id="remembercardchecker" />
      <label className="form-check-label" htmlFor="remembercardcheck">
        Remember Card?
      </label>
    </div>;

    return (
      <div>
        { usersavedcard }
        <h5 className="mb-4">Payment Info</h5>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="col-lg-12 form-group">
              <label htmlFor="cc-name">Name On Card:</label>
              <input id="cc-name" name='cc-name' className="form-control" placeholder="Name on Card" onChange={this.handleInputChange} type='text'/>
            </div>
          </div>
          <div className="form-row">
            <div className="col-lg-12 from-group">
              <label htmlFor="card">Card Information:</label>
              <CardElement id="card" className="form-control" style={style} />
            </div>
          </div>
          {rememberCardCheck}
          <hr className="mg-4"/>
          <button type="submit" className="btn btn-success btnlarge">{this.props.operation}</button>
        </form>
      </div>
    )
  }
  
  renderSuccess() {
    return (
      <div>
        <h5 className="mb-4 text-success">Request Successfull....</h5>
        <button type="submit" className="btn btn-success btn-large" onClick={() => {
          this.props.toggle()
        }}>Ok</button>
      </div>
    );
  }
  renderFailure() {
    return (
      <div>
        <h5 className="mb-4 text-danger">Credit card information invalid, try again or exit</h5>
        { this.renderCreditCardInformation() }
      </div>
    );
  }
  render() {
    let body = null;
    switch (this.state.status) {
      case SUCCESS_STATE: 
        body = this.renderSuccess();
        break;
      case FAILED_STATE:
        body = this.renderFailure();
        break;
      default:
        body = this.renderCreditCardInformation();
    }
    
    return (
      <div>
        {body}
      </div>
    );
  }
}