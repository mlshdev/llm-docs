> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/customerengagement/shoppingcart/summary-swift.struct/total](https://developer.apple.com/documentation/proximityreader/customerengagement/shoppingcart/summary-swift.struct/total)

# total

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A decimal value indicating the total amount of the shopping cart.

## Declaration

```swift
let total: Decimal
```

<a id="discussion"></a>

## Discussion

The total always appears at the bottom as floating text, even when the shopping cart content scrolls. The framework formats this value using the region and currency defined in [CustomerEngagementSession.Configuration](../../../customerengagementsession/configuration-swift.struct.md).
