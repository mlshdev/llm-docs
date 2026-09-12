> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrideoption/usesmeteredfare-1sig1](https://developer.apple.com/documentation/intents/inrideoption/usesmeteredfare-1sig1)

# usesMeteredFare

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · watchOS 3.2+ · Swift 4.0+

A Boolean value indicating whether the price uses a metered fare instead of a fixed price.

## Declaration

```swift
@nonobjc var usesMeteredFare: Bool? { get set }
```

<a id="Discussion"></a>

## Discussion

A Boolean value indicating whether the ride uses a metered fare instead of a fixed price. When set to [true](https://developer.apple.com/documentation/swift/true), any information in the [priceRange](pricerange.md) property isn’t shown to the user.

## See Also

### Specifying Pricing Information

- [priceRange](pricerange.md): The range of prices for this ride option.
- [specialPricing](specialpricing.md): A user-visible string describing any special pricing considerations that apply to this ride.
- [specialPricingBadgeImage](specialpricingbadgeimage.md): A template image for Maps to display when special prices apply.
- [fareLineItems](farelineitems.md): An array of price-related items that break down the costs of the ride.
