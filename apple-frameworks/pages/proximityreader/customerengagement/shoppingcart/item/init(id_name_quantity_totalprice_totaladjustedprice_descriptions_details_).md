> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/proximityreader/customerengagement/shoppingcart/item/init(id:name:quantity:totalprice:totaladjustedprice:descriptions:details:)

# init(id:name:quantity:totalPrice:totalAdjustedPrice:descriptions:details:)

**Framework:** ProximityReader  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

## Declaration

```swift
init(id: String = UUID().uuidString, name: String, quantity: Int = 1, totalPrice: Decimal, totalAdjustedPrice: Decimal? = nil, descriptions: [String] = [], details: [String] = [])
```
