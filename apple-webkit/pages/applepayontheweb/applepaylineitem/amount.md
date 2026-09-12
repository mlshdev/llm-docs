> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaylineitem/amount](https://developer.apple.com/documentation/applepayontheweb/applepaylineitem/amount)

# amount

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

A required value that’s the monetary amount of the line item.

## Declaration

```
DOMString amount;
```

<a id="Discussion"></a>

## Discussion

This number must follow the regular expression `-?[0-9]+(\.[0-9][0-9])?`. The amount is required and can’t be empty.

You specify the currency for the entire transaction including line items by setting the [currencyCode](../applepaypaymentrequest/currencycode.md) property in [ApplePayPaymentRequest](../applepaypaymentrequest.md).

If the payment request is for an automatic reload payment, the `amount` indicates the reload payment amount authorized when the account drops below the \`\`/ApplePayontheWeb/ApplePayLineItem/automaticReloadPaymentThresholdAmount\`\`\`.\`

## See Also

### Setting line item properties

- [label](label.md): A required value that’s a short, localized description of the line item.
- [type](type.md): A value that indicates whether the line item is final or pending.
- [ApplePayLineItemType](../applepaylineitemtype.md): A type that indicates whether a line item is final or pending.
