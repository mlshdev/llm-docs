> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaypaymentmethodupdate/newrecurringpaymentrequest](https://developer.apple.com/documentation/applepayontheweb/applepaypaymentmethodupdate/newrecurringpaymentrequest)

# newRecurringPaymentRequest

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

An updated request for a recurring payment.

## Declaration

```
ApplePayRecurringPaymentRequest newRecurringPaymentRequest;
```

<a id="Discussion"></a>

## Discussion

Provide this object to update the [recurringPaymentRequest](../applepaypaymentrequest/recurringpaymentrequest.md) value in the original [ApplePayPaymentRequest](../applepaypaymentrequest.md), if necessary, after the user updated their payment method.

> **Important**

>  You can’t use this property with [newMultiTokenContexts](newmultitokencontexts.md) or [newAutomaticReloadPaymentRequest](newautomaticreloadpaymentrequest.md) properties. Simultaneous use of these properties results in an error and cancels the payment request.

## See Also

### Updating recurring payments

- [ApplePayRecurringPaymentRequest](../applepayrecurringpaymentrequest.md): A dictionary that represents a request to set up a recurring payment, typically a subscription.
