> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/customerengagement/shoppingcart/item/totaladjustedprice](https://developer.apple.com/documentation/proximityreader/customerengagement/shoppingcart/item/totaladjustedprice)

# totalAdjustedPrice

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A total adjusted price associated with the line item, typically used to indicate a price change.

## Declaration

```swift
var totalAdjustedPrice: Decimal?
```

<a id="discussion"></a>

## Discussion

When the adjusted price is not `nil`, [totalPrice](totalprice.md) has an overstrike appearance.
