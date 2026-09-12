> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/customerengagement/shoppingcart/summary-swift.struct/lineitem](https://developer.apple.com/documentation/proximityreader/customerengagement/shoppingcart/summary-swift.struct/lineitem)

# CustomerEngagement.ShoppingCart.Summary.LineItem

**Framework:** ProximityReader  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A label and value pair of text in the summary section.

## Declaration

```swift
struct LineItem
```

## Topics

### Initializers

- [init(label:value:)](lineitem/init%28label_value_%29-3pcav.md): Creates a line item with a label and decimal value, formatted using the session currency and customer’s locale.
- [init(label:value:)](lineitem/init%28label_value_%29-lf9.md): Creates a line item with the given label and string value.

### Instance Properties

- [label](lineitem/label.md): The summary line label.
- [value](lineitem/value-swift.property.md): The stored string or decimal representation of the line item.

### Enumerations

- [CustomerEngagement.ShoppingCart.Summary.LineItem.Value](lineitem/value-swift.enum.md): A value that holds either a [String](https://developer.apple.com/documentation/swift/string) or \`[Decimal](../../../../foundation/decimal.md) amount for a summary line item.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
