> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepayshippingcontactupdate/newtotal](https://developer.apple.com/documentation/applepayontheweb/applepayshippingcontactupdate/newtotal)

# newTotal

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

The new total that results from a change in the shipping contact.

## Declaration

```
required ApplePayLineItem newTotal;
```

<a id="Discussion"></a>

## Discussion

Recalculate the total for the payment, because it may change as a result of shipping contact changes.  The [newTotal](newtotal.md) value is required.

## See Also

### Updating shipping contact properties

- [errors](errors.md): A list of custom errors to display on the payment sheet.
- [newLineItems](newlineitems.md): An optional list of updated line items.
- [newShippingMethods](newshippingmethods.md): A list of shipping methods that are available to the updated shipping contact.
