> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaysession/onpaymentauthorized](https://developer.apple.com/documentation/applepayontheweb/applepaysession/onpaymentauthorized)

# onpaymentauthorized

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

An event handler the system calls when the user has authorized the Apple Pay payment with Touch ID, Face ID, or a passcode.

## Declaration

```
attribute EventHandler onpaymentauthorized;
```

<a id="Discussion"></a>

## Discussion

This attribute must be set to a function that accepts an `events` argument; for example, `session.onpaymentauthorized = function(event) {}`.

The event parameter contains the [payment](../applepaypaymentauthorizedevent/payment.md) ([ApplePayPayment](../applepaypayment.md)) attribute.

The [onpaymentauthorized](onpaymentauthorized.md) function must complete the payment and respond by calling [completePayment](completepayment.md) before the 30 second timeout, after which a message appears stating that the payment couldn’t be completed.

## See Also

### Handling payment authorization

- [completePayment](completepayment.md): Completes the payment authorization with a result.
- [ApplePayPaymentAuthorizedEvent](../applepaypaymentauthorizedevent.md): An event object that contains the token used to authorize a payment.
- [ApplePayPayment](../applepaypayment.md): The result of authorizing a payment request that contains payment information.
- [ApplePayPaymentAuthorizationResult](../applepaypaymentauthorizationresult.md): The result of payment authorization, including status and errors.
