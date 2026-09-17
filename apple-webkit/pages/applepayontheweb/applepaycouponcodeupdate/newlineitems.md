> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applepayontheweb/applepaycouponcodeupdate/newlineitems

# newLineItems

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

The list of updated line items incorporating the coupon code update.

## Declaration

```
sequence <ApplePayLineItem> newLineItems;
```

## See Also

### Setting updated transaction details

- [newShippingMethods](newshippingmethods.md): The list of available shipping methods.
- [newTotal](newtotal.md): The updated total resulting from the coupon code update.
- [errors](errors.md): A list of errors resulting from the coupon code update.
