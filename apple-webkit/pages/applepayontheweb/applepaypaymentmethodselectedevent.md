> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaypaymentmethodselectedevent](https://developer.apple.com/documentation/applepayontheweb/applepaypaymentmethodselectedevent)

# ApplePayPaymentMethodSelectedEvent

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Class  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

An event object that contains the payment method.

## Declaration

```
interface ApplePayPaymentMethodSelectedEvent
```

<a id="overview"></a>

## Overview

The event handler [onpaymentmethodselected](applepaysession/onpaymentmethodselected.md) receives this event object when the payment method is selected.

## Topics

### Payment method properties

- [paymentMethod](applepaypaymentmethodselectedevent/paymentmethod.md): The card used to complete a payment.

## See Also

### Handling payment method updates

- [onpaymentmethodselected](applepaysession/onpaymentmethodselected.md): An event handler to call when the user selects a new payment method.
- [completePaymentMethodSelection](applepaysession/completepaymentmethodselection.md): Completes the selection of a payment method with an update.
- [ApplePayPaymentMethodUpdate](applepaypaymentmethodupdate.md): Updated transaction details to provide after the user changes the payment method in the payment sheet.
- [ApplePayPaymentMethod](applepaypaymentmethod.md): A dictionary that describes an Apple Pay payment method.
