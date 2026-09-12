> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/paymentmethodchangeevent/methodname](https://developer.apple.com/documentation/applepayontheweb/paymentmethodchangeevent/methodname)

# methodName

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

The identifier for the payment method to use for the transaction.

## Declaration

```
readonly attribute DOMString methodName;
```

<a id="Discussion"></a>

## Discussion

The [methodName](methodname.md) for Apple Pay transactions is the Apple Pay URL.

For more information, see [W3C payment method identifiers (PMIs)](https://www.w3.org/TR/payment-method-id/#dfn-pmi).

## See Also

### Change Information

- [methodDetails](methoddetails.md): A dictionary that contains the details of the change.
