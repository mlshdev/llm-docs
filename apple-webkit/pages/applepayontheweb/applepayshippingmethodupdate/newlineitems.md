> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepayshippingmethodupdate/newlineitems](https://developer.apple.com/documentation/applepayontheweb/applepayshippingmethodupdate/newlineitems)

# newLineItems

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

An optional list of updated line items.

## Declaration

```
sequence <ApplePayLineItem> newLineItems;
```

<a id="Discussion"></a>

## Discussion

Supply an updated list of line items if the change in the shipping method caused any changes in the line items.

## See Also

### Updating shipping method properties

- [newTotal](newtotal.md): The new total that results from a change in the shipping method.
- [newShippingMethods](newshippingmethods.md): An updated list of new shipping methods.
