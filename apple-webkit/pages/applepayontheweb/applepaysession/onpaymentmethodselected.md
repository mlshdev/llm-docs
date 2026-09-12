> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaysession/onpaymentmethodselected](https://developer.apple.com/documentation/applepayontheweb/applepaysession/onpaymentmethodselected)

# onpaymentmethodselected

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

An event handler to call when the user selects a new payment method.

## Declaration

```
attribute EventHandler onpaymentmethodselected;
```

<a id="Discussion"></a>

## Discussion

This attribute must be set to a function that accepts an `events` argument; for example, `session.onpaymentmethodselected = function(event) {}`.

The event parameter contains the [paymentMethod](../applepaypaymentmethodselectedevent/paymentmethod.md) attribute. Access it like this:

`var myPaymentMethod = event.paymentMethod;`

The [onpaymentmethodselected](onpaymentmethodselected.md) function must respond by calling [completePaymentMethodSelection](completepaymentmethodselection.md) before the 30 second timeout, after which a message appears stating that the payment could not be completed.

## See Also

### Handling payment method updates

- [completePaymentMethodSelection](completepaymentmethodselection.md): Completes the selection of a payment method with an update.
- [ApplePayPaymentMethodUpdate](../applepaypaymentmethodupdate.md): Updated transaction details to provide after the user changes the payment method in the payment sheet.
- [ApplePayPaymentMethodSelectedEvent](../applepaypaymentmethodselectedevent.md): An event object that contains the payment method.
- [ApplePayPaymentMethod](../applepaypaymentmethod.md): A dictionary that describes an Apple Pay payment method.
