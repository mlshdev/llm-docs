> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrideoption/specialpricing](https://developer.apple.com/documentation/intents/inrideoption/specialpricing)

# specialPricing (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

A user-visible string describing any special pricing considerations that apply to this ride.

## Declaration

```swift
var specialPricing: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property when you need to communicate special pricing conditions to the user. For example, you might set the value of this property to “Sale” when you want to offer discounted rides. The value in the [priceRange](pricerange.md) and [fareLineItems](farelineitems.md) properties should account for any special pricing you offer. Set this property to `nil` if special pricing does not apply.

## See Also

### Specifying Pricing Information

- [priceRange](pricerange.md): The range of prices for this ride option.
- [specialPricingBadgeImage](specialpricingbadgeimage.md): A template image for Maps to display when special prices apply.
- [usesMeteredFare](usesmeteredfare-1sig1.md): A Boolean value indicating whether the price uses a metered fare instead of a fixed price.
- [fareLineItems](farelineitems.md): An array of price-related items that break down the costs of the ride.

# specialPricing (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

A user-visible string describing any special pricing considerations that apply to this ride.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSString * specialPricing;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSString * specialPricing;
```

<a id="Discussion"></a>

## Discussion

Use this property when you need to communicate special pricing conditions to the user. For example, you might set the value of this property to “Sale” when you want to offer discounted rides. The value in the [priceRange](pricerange.md) and [fareLineItems](farelineitems.md) properties should account for any special pricing you offer. Set this property to `nil` if special pricing does not apply.

## See Also

### Specifying Pricing Information

- [priceRange](pricerange.md): The range of prices for this ride option.
- [specialPricingBadgeImage](specialpricingbadgeimage.md): A template image for Maps to display when special prices apply.
- [usesMeteredFare](https://developer.apple.com/documentation/intents/inrideoption/usesmeteredfare-25g1c): A Boolean value indicating whether the price uses a metered fare instead of a fixed price.
- [fareLineItems](farelineitems.md): An array of price-related items that break down the costs of the ride.
