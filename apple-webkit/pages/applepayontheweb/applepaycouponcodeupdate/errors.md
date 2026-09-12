> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaycouponcodeupdate/errors](https://developer.apple.com/documentation/applepayontheweb/applepaycouponcodeupdate/errors)

# errors

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

A list of errors resulting from the coupon code update.

## Declaration

```
sequence <ApplePayError> errors;
```

<a id="Discussion"></a>

## Discussion

List the errors in order of importance.

For information on the possible errors, see [ApplePayError](../applepayerror.md).

## See Also

### Setting updated transaction details

- [newLineItems](newlineitems.md): The list of updated line items incorporating the coupon code update.
- [newShippingMethods](newshippingmethods.md): The list of available shipping methods.
- [newTotal](newtotal.md): The updated total resulting from the coupon code update.
