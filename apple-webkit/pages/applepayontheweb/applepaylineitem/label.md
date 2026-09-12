> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaylineitem/label](https://developer.apple.com/documentation/applepayontheweb/applepaylineitem/label)

# label

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

A required value that’s a short, localized description of the line item.

## Declaration

```
DOMString label;
```

<a id="Discussion"></a>

## Discussion

Provide the label in title case—for example, VAT Tax, Gift Wrap and Card, or Discount. The label can’t be empty.

Omit any punctuation and whitespace after the label. The framework formats the label for display.

## See Also

### Setting line item properties

- [amount](amount.md): A required value that’s the monetary amount of the line item.
- [type](type.md): A value that indicates whether the line item is final or pending.
- [ApplePayLineItemType](../applepaylineitemtype.md): A type that indicates whether a line item is final or pending.
