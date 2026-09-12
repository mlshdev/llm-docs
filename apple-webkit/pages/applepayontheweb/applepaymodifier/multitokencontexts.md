> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaymodifier/multitokencontexts](https://developer.apple.com/documentation/applepayontheweb/applepaymodifier/multitokencontexts)

# multiTokenContexts

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

An array of payment token contexts that requests multiple payment tokens to support a multimerchant payment.

## Declaration

```
sequence <ApplePayPaymentTokenContext> multiTokenContexts;
```

## Mentioned In

- [Apple Pay on the Web Version 14 Release Notes](../apple-pay-on-the-web-version-14-release-notes.md)

<a id="Discussion"></a>

## Discussion

Use multitoken contexts to indicate payments for multiple merchants. This modifier is an array of [ApplePayPaymentTokenContext](../applepaypaymenttokencontext.md) objects. The sum of the [amount](../applepaypaymenttokencontext/amount.md) of all the payment token contexts must be less than or equal to the grand total amount of the enclosing payment request. Otherwise, the request results in a runtime error and cancels the payment request.

> **Important**

>  You can’t use this property with [recurringPaymentRequest](recurringpaymentrequest.md) or [automaticReloadPaymentRequest](automaticreloadpaymentrequest.md) properties. Simultaneous use of these properties results in an error and cancels the payment request.

## See Also

### Updating multitoken or multimerchant payments

- [ApplePayPaymentTokenContext](../applepaypaymenttokencontext.md): A dictionary that defines the context for a single payment token in a payment request for multimerchant payments.
