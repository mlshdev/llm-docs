> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrideoption/pricerange](https://developer.apple.com/documentation/intents/inrideoption/pricerange)

# priceRange (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The range of prices for this ride option.

## Declaration

```swift
@NSCopying var priceRange: INPriceRange? { get set }
```

## Mentioned In

- [Generating a List of Ride Options](../../sirikit/generating-a-list-of-ride-options.md)

<a id="Discussion"></a>

## Discussion

Use this property to specify the approximate cost of the ride. Price ranges should reflect the actual price you plan to charge and should include any special pricing that currently applies. If the ride option also includes separate line items, display those items separately.

If the [usesMeteredFare](https://developer.apple.com/documentation/intents/inrideoption/usesmeteredfare-25g1c) property is [true](https://developer.apple.com/documentation/swift/true), the information in this property is not displayed.

## See Also

### Specifying Pricing Information

- [specialPricing](specialpricing.md): A user-visible string describing any special pricing considerations that apply to this ride.
- [specialPricingBadgeImage](specialpricingbadgeimage.md): A template image for Maps to display when special prices apply.
- [usesMeteredFare](usesmeteredfare-1sig1.md): A Boolean value indicating whether the price uses a metered fare instead of a fixed price.
- [fareLineItems](farelineitems.md): An array of price-related items that break down the costs of the ride.

# priceRange (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The range of prices for this ride option.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) INPriceRange * priceRange;
```

```objectivec
@property (atomic, copy, readwrite, nullable) INPriceRange * priceRange;
```

## Mentioned In

- [Generating a List of Ride Options](../../sirikit/generating-a-list-of-ride-options.md)

<a id="Discussion"></a>

## Discussion

Use this property to specify the approximate cost of the ride. Price ranges should reflect the actual price you plan to charge and should include any special pricing that currently applies. If the ride option also includes separate line items, display those items separately.

If the [usesMeteredFare](https://developer.apple.com/documentation/intents/inrideoption/usesmeteredfare-25g1c) property is [true](https://developer.apple.com/documentation/swift/true), the information in this property is not displayed.

## See Also

### Specifying Pricing Information

- [specialPricing](specialpricing.md): A user-visible string describing any special pricing considerations that apply to this ride.
- [specialPricingBadgeImage](specialpricingbadgeimage.md): A template image for Maps to display when special prices apply.
- [usesMeteredFare](https://developer.apple.com/documentation/intents/inrideoption/usesmeteredfare-25g1c): A Boolean value indicating whether the price uses a metered fare instead of a fixed price.
- [fareLineItems](farelineitems.md): An array of price-related items that break down the costs of the ride.
