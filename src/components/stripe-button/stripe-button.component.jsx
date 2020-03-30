import React from 'react';
import StripeCheckout from 'react-stripe-checkout';



const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_uBh7MYTvOy0M3KKNEddDmmnj00VlFQSuIu';
    
    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
      };
    
      return (
        <StripeCheckout
          label='Pay Now'
          name='Urban Apparel.'
          billingAddress
          shippingAddress
          description={`Your total is $${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
        />
      );
    };
    
    export default StripeCheckoutButton;