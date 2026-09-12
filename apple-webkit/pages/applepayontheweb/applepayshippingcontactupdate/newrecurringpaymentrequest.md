> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepayshippingcontactupdate/newrecurringpaymentrequest](https://developer.apple.com/documentation/applepayontheweb/applepayshippingcontactupdate/newrecurringpaymentrequest)

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

Provide this object to update the [recurringPaymentRequest](../applepaypaymentrequest/recurringpaymentrequest.md) value in the original [ApplePayPaymentRequest](../applepaypaymentrequest.md), if necessary, after the user updated their shipping contact information.

## See Also

### Updating recurrring payments

- [ApplePayRecurringPaymentRequest](../applepayrecurringpaymentrequest.md): A dictionary that represents a request to set up a recurring payment, typically a subscription.
