> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepayshippingmethodupdate/newmultitokencontexts](https://developer.apple.com/documentation/applepayontheweb/applepayshippingmethodupdate/newmultitokencontexts)

# newMultiTokenContexts

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

An array of updated multitoken contexts for a multimerchant payment request.

## Declaration

```
sequence <ApplePayPaymentTokenContext> newMultiTokenContexts;
```

<a id="Discussion"></a>

## Discussion

Provide this object to update the [multiTokenContexts](../applepaypaymentrequest/multitokencontexts.md) value in the original [ApplePayPaymentRequest](../applepaypaymentrequest.md), if necessary, after the user updated the shipping method.
