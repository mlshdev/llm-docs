> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaypaymentrequest/recurringpaymentrequest](https://developer.apple.com/documentation/applepayontheweb/applepaypaymentrequest/recurringpaymentrequest)

# recurringPaymentRequest

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

A property that requests a recurring payment, typically a subscription.

## Declaration

```
ApplePayRecurringPaymentRequest recurringPaymentRequest;
```

## Mentioned In

- [Apple Pay on the Web Version 14 Release Notes](../apple-pay-on-the-web-version-14-release-notes.md)

<a id="Discussion"></a>

## Discussion

This property is optional. Use it to indicate that the payment request is for a recurring payment.

Apple Pay issues an Apple Pay Merchant Token if the user’s payment network supports merchant-specific payment tokens. Otherwise, Apple Pay issues a device token for the payment request.

> **Important**

>  You can’t use this property with [multiTokenContexts](multitokencontexts.md) or [automaticReloadPaymentRequest](automaticreloadpaymentrequest.md) properties. Simultaneous use of these properties results in an error and cancels the payment request.

## See Also

### Requesting recurring payments

- [ApplePayRecurringPaymentRequest](../applepayrecurringpaymentrequest.md): A dictionary that represents a request to set up a recurring payment, typically a subscription.
