> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applepayontheweb/applepayshippingcontactupdate/newmultitokencontexts

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

Provide this object to update the [multiTokenContexts](../applepaypaymentrequest/multitokencontexts.md) value in the original [ApplePayPaymentRequest](../applepaypaymentrequest.md), if necessary, after the user updated their shipping contact information.

## See Also

### Updating multitoken or multimerchant payments

- [ApplePayPaymentTokenContext](../applepaypaymenttokencontext.md): A dictionary that defines the context for a single payment token in a payment request for multimerchant payments.
