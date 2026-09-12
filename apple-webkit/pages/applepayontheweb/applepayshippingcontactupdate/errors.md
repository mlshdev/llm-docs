> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepayshippingcontactupdate/errors](https://developer.apple.com/documentation/applepayontheweb/applepayshippingcontactupdate/errors)

# errors

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

A list of custom errors to display on the payment sheet.

## Declaration

```
sequence <ApplePayError> errors;
```

<a id="Discussion"></a>

## Discussion

List the errors on the payment sheet for the user to remedy. If there are multiple errors, list the most important error first.

For information on errors, see [ApplePayError](../applepayerror.md).

## See Also

### Updating shipping contact properties

- [newLineItems](newlineitems.md): An optional list of updated line items.
- [newShippingMethods](newshippingmethods.md): A list of shipping methods that are available to the updated shipping contact.
- [newTotal](newtotal.md): The new total that results from a change in the shipping contact.
