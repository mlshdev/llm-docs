> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepayshippingmethod/amount](https://developer.apple.com/documentation/applepayontheweb/applepayshippingmethod/amount)

# amount

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

The nonnegative cost associated with this shipping method.

## Declaration

```
required DOMString amount;
```

<a id="Discussion"></a>

## Discussion

The amount must be nonnegative to pass validation.

## See Also

### Working with shipping method properties

- [label](label.md): A short description of the shipping method.
- [detail](detail.md): Additional description of the shipping method.
- [dateComponentsRange](datecomponentsrange.md): The expected range of dates for shipping or picking up an item.
- [identifier](identifier.md): A client-defined value used to identify this shipping method.
- [ApplePayDateComponentsRange](../applepaydatecomponentsrange.md): A dictionary that specifies the start and end dates for a range of time.
