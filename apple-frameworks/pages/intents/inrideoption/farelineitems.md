> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrideoption/farelineitems](https://developer.apple.com/documentation/intents/inrideoption/farelineitems)

# fareLineItems (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

An array of price-related items that break down the costs of the ride.

## Declaration

```swift
var fareLineItems: [INRideFareLineItem]? { get set }
```

<a id="Discussion"></a>

## Discussion

When the cost of a ride has multiple components, use [INRideFareLineItem](../inridefarelineitem.md) objects to break down the individual costs of the ride. You can use line items to specify fixed charges, per-mile charges, special surcharges, or any other charges that you designate. The system displays the fare line items to the user as part of the pricing information.

## See Also

### Specifying Pricing Information

- [priceRange](pricerange.md): The range of prices for this ride option.
- [specialPricing](specialpricing.md): A user-visible string describing any special pricing considerations that apply to this ride.
- [specialPricingBadgeImage](specialpricingbadgeimage.md): A template image for Maps to display when special prices apply.
- [usesMeteredFare](usesmeteredfare-1sig1.md): A Boolean value indicating whether the price uses a metered fare instead of a fixed price.

# fareLineItems (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

An array of price-related items that break down the costs of the ride.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSArray<INRideFareLineItem *> * fareLineItems;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSArray<INRideFareLineItem *> * fareLineItems;
```

<a id="Discussion"></a>

## Discussion

When the cost of a ride has multiple components, use [INRideFareLineItem](../inridefarelineitem.md) objects to break down the individual costs of the ride. You can use line items to specify fixed charges, per-mile charges, special surcharges, or any other charges that you designate. The system displays the fare line items to the user as part of the pricing information.

## See Also

### Specifying Pricing Information

- [priceRange](pricerange.md): The range of prices for this ride option.
- [specialPricing](specialpricing.md): A user-visible string describing any special pricing considerations that apply to this ride.
- [specialPricingBadgeImage](specialpricingbadgeimage.md): A template image for Maps to display when special prices apply.
- [usesMeteredFare](https://developer.apple.com/documentation/intents/inrideoption/usesmeteredfare-25g1c): A Boolean value indicating whether the price uses a metered fare instead of a fixed price.
