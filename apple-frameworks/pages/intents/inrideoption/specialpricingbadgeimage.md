> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrideoption/specialpricingbadgeimage](https://developer.apple.com/documentation/intents/inrideoption/specialpricingbadgeimage)

# specialPricingBadgeImage (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

A template image for Maps to display when special prices apply.

## Declaration

```swift
@NSCopying var specialPricingBadgeImage: INImage? { get set }
```

<a id="Discussion"></a>

## Discussion

When offering special pricing, use this property to specify an image for Maps to display next to the pricing information. The width and height of the image must both be 12 points and the image must be a template image—that is, an image whose alpha channel defines the shape of the image. Set this property to `nil` if special pricing does not apply.

## See Also

### Specifying Pricing Information

- [priceRange](pricerange.md): The range of prices for this ride option.
- [specialPricing](specialpricing.md): A user-visible string describing any special pricing considerations that apply to this ride.
- [usesMeteredFare](usesmeteredfare-1sig1.md): A Boolean value indicating whether the price uses a metered fare instead of a fixed price.
- [fareLineItems](farelineitems.md): An array of price-related items that break down the costs of the ride.

# specialPricingBadgeImage (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

A template image for Maps to display when special prices apply.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) INImage * specialPricingBadgeImage;
```

```objectivec
@property (atomic, copy, readwrite, nullable) INImage * specialPricingBadgeImage;
```

<a id="Discussion"></a>

## Discussion

When offering special pricing, use this property to specify an image for Maps to display next to the pricing information. The width and height of the image must both be 12 points and the image must be a template image—that is, an image whose alpha channel defines the shape of the image. Set this property to `nil` if special pricing does not apply.

## See Also

### Specifying Pricing Information

- [priceRange](pricerange.md): The range of prices for this ride option.
- [specialPricing](specialpricing.md): A user-visible string describing any special pricing considerations that apply to this ride.
- [usesMeteredFare](https://developer.apple.com/documentation/intents/inrideoption/usesmeteredfare-25g1c): A Boolean value indicating whether the price uses a metered fare instead of a fixed price.
- [fareLineItems](farelineitems.md): An array of price-related items that break down the costs of the ride.
