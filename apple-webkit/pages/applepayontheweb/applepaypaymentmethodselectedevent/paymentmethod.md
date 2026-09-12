> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaypaymentmethodselectedevent/paymentmethod](https://developer.apple.com/documentation/applepayontheweb/applepaypaymentmethodselectedevent/paymentmethod)

# paymentMethod

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

The card used to complete a payment.

## Declaration

```
readonly attribute ApplePayPaymentMethod paymentMethod;
```

<a id="Discussion"></a>

## Discussion

See [ApplePayPaymentMethod](../applepaypaymentmethod.md). For privacy reasons, only the `type` property ([ApplePayPaymentMethodType](../applepaypaymentmethodtype.md)) is provided in most cases before the user authorizes the transaction.

This attribute is contained by the [onpaymentmethodselected](../applepaysession/onpaymentmethodselected.md) event. Access this attribute using the event parameter in the callback function; for example, `var myPaymentMethod = event.paymentMethod;`.
