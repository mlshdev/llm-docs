> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepayshippingmethodupdate/newtotal](https://developer.apple.com/documentation/applepayontheweb/applepayshippingmethodupdate/newtotal)

# newTotal

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

The new total that results from a change in the shipping method.

## Declaration

```
required ApplePayLineItem newTotal;
```

<a id="Discussion"></a>

## Discussion

Recalculate the total for the payment, because it may change as a result of shipping method changes. The [newTotal](../applepayshippingcontactupdate/newtotal.md) value is required.

## See Also

### Updating shipping method properties

- [newLineItems](newlineitems.md): An optional list of updated line items.
- [newShippingMethods](newshippingmethods.md): An updated list of new shipping methods.
