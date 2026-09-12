> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/customerengagement/shoppingcart/summary-swift.struct/lineitem/init(label:value:)-3pcav](https://developer.apple.com/documentation/proximityreader/customerengagement/shoppingcart/summary-swift.struct/lineitem/init(label:value:)-3pcav)

# init(label:value:)

**Framework:** ProximityReader  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates a line item with a label and decimal value, formatted using the session currency and customer’s locale.

## Declaration

```swift
init(label: String, value: Decimal)
```

<a id="discussion"></a>

## Discussion

Localize the label to the customer’s locale. Format the decimal amount using the session currency and customer’s locale.
