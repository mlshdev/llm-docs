> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaypaymentmethodupdate/errors](https://developer.apple.com/documentation/applepayontheweb/applepaypaymentmethodupdate/errors)

# errors

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

A list of customized errors you provide that results from the user’s change to the payment method.

## Declaration

```
sequence <ApplePayError> errors;
```

<a id="Discussion"></a>

## Discussion

List the errors in order of importance.

For information on the possible errors, see [ApplePayError](../applepayerror.md).

## See Also

### Updating payment method properties

- [newLineItems](newlineitems.md): An optional list of updated line items for the payment request that results from the user’s change to the payment method.
- [newTotal](newtotal.md): The new total that results from the user’s change to the payment method.
- [newShippingMethods](newshippingmethods.md): The updated list of available shipping methods that results from the user’s change to the payment method.
