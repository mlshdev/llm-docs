> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaypaymentmethodupdate/newmultitokencontexts](https://developer.apple.com/documentation/applepayontheweb/applepaypaymentmethodupdate/newmultitokencontexts)

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

Provide this object to update the [multiTokenContexts](../applepaypaymentrequest/multitokencontexts.md) value in the original [ApplePayPaymentRequest](../applepaypaymentrequest.md), if necessary, after the user updated their payment method.

> **Important**

>  You can’t use this property with [newAutomaticReloadPaymentRequest](../applepayshippingmethodupdate/newautomaticreloadpaymentrequest.md) or [newRecurringPaymentRequest](newrecurringpaymentrequest.md) properties. Simultaneous use of these properties results in an error and cancels the payment request.

## See Also

### Updating multitoken or multimerchant payments

- [ApplePayPaymentTokenContext](../applepaypaymenttokencontext.md): A dictionary that defines the context for a single payment token in a payment request for multimerchant payments.
