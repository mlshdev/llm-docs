> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepayshippingmethodupdate/newautomaticreloadpaymentrequest](https://developer.apple.com/documentation/applepayontheweb/applepayshippingmethodupdate/newautomaticreloadpaymentrequest)

# newAutomaticReloadPaymentRequest

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

An updated request for an automatic reload payment.

## Declaration

```
ApplePayAutomaticReloadPaymentRequest newAutomaticReloadPaymentRequest;
```

<a id="Discussion"></a>

## Discussion

Provide this object to update the [automaticReloadPaymentRequest](../applepaypaymentrequest/automaticreloadpaymentrequest.md) value in the original [ApplePayPaymentRequest](../applepaypaymentrequest.md), if necessary, after the user updated the shipping method.
