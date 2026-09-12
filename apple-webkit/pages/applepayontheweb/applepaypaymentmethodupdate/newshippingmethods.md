> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaypaymentmethodupdate/newshippingmethods](https://developer.apple.com/documentation/applepayontheweb/applepaypaymentmethodupdate/newshippingmethods)

# newShippingMethods

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

The updated list of available shipping methods that results from the user’s change to the payment method.

## Declaration

```
sequence <ApplePayShippingMethod> newShippingMethods;
```

<a id="Discussion"></a>

## Discussion

Supply an updated list of shipping methods if the user’s change in the payment method caused any changes in the shipping methods.

## See Also

### Updating payment method properties

- [newLineItems](newlineitems.md): An optional list of updated line items for the payment request that results from the user’s change to the payment method.
- [newTotal](newtotal.md): The new total that results from the user’s change to the payment method.
- [errors](errors.md): A list of customized errors you provide that results from the user’s change to the payment method.
