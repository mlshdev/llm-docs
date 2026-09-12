> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/customerengagement/shoppingcart/summary-swift.struct](https://developer.apple.com/documentation/proximityreader/customerengagement/shoppingcart/summary-swift.struct)

# CustomerEngagement.ShoppingCart.Summary

**Framework:** ProximityReader  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A breakdown of totals, line items, and optional footer text for a shopping cart.

## Declaration

```swift
struct Summary
```

## Topics

### Structures

- [CustomerEngagement.ShoppingCart.Summary.LineItem](summary-swift.struct/lineitem.md): A label and value pair of text in the summary section.

### Initializers

- [init(summaryLines:footer:total:)](summary-swift.struct/init%28summarylines_footer_total_%29.md)

### Instance Properties

- [footer](summary-swift.struct/footer.md): A multiline text at the bottom of the summary section.
- [summaryLines](summary-swift.struct/summarylines.md): An array of label-value pairs listing taxes, discounts, or other cart-level entries in the summary. These entries apply to the entire cart rather than individual line items.
- [total](summary-swift.struct/total.md): A decimal value indicating the total amount of the shopping cart.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
