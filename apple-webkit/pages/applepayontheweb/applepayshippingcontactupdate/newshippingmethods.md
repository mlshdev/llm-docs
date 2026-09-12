> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepayshippingcontactupdate/newshippingmethods](https://developer.apple.com/documentation/applepayontheweb/applepayshippingcontactupdate/newshippingmethods)

# newShippingMethods

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

A list of shipping methods that are available to the updated shipping contact.

## Declaration

```
sequence <ApplePayShippingMethod> newShippingMethods;
```

<a id="Discussion"></a>

## Discussion

Supply a list of shipping methods that apply to the updated shipping contact, if the shipping methods changed. See [ApplePayShippingMethod](../applepayshippingmethod.md).

## See Also

### Updating shipping contact properties

- [errors](errors.md): A list of custom errors to display on the payment sheet.
- [newLineItems](newlineitems.md): An optional list of updated line items.
- [newTotal](newtotal.md): The new total that results from a change in the shipping contact.
