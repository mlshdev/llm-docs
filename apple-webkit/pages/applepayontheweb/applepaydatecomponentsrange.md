> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaydatecomponentsrange](https://developer.apple.com/documentation/applepayontheweb/applepaydatecomponentsrange)

# ApplePayDateComponentsRange

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Structure  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

A dictionary that specifies the start and end dates for a range of time.

## Declaration

```
dictionary ApplePayDateComponentsRange {
	required ApplePayDateComponents startDateComponents;
	required ApplePayDateComponents endDateComponents;
};
```

## Topics

### Start and End Dates of the Range

- [startDateComponents](applepaydatecomponentsrange/startdatecomponents.md): The start date and time of the range.
- [endDateComponents](applepaydatecomponentsrange/enddatecomponents.md): The end date and time of the range.
- [ApplePayDateComponents](applepaydatecomponents.md): A dictionary that specifies the values for the calendrical units for a date.

## See Also

### Working with shipping method properties

- [label](applepayshippingmethod/label.md): A short description of the shipping method.
- [detail](applepayshippingmethod/detail.md): Additional description of the shipping method.
- [dateComponentsRange](applepayshippingmethod/datecomponentsrange.md): The expected range of dates for shipping or picking up an item.
- [identifier](applepayshippingmethod/identifier.md): A client-defined value used to identify this shipping method.
- [amount](applepayshippingmethod/amount.md): The nonnegative cost associated with this shipping method.
