> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skproductdiscount/identifier](https://developer.apple.com/documentation/storekit/skproductdiscount/identifier)

# identifier (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 12.2+ (deprecated in 18.0) · iPadOS 12.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14.4+ (deprecated in 15.0) · tvOS 12.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A string used to uniquely identify a discount offer for a product.

> Use Product.SubscriptionOffer.id.

## Declaration

```swift
var identifier: String? { get }
```

## Mentioned In

- [Generating a signature for promotional offers](../generating-a-signature-for-promotional-offers.md)
- [Implementing promotional offers in your app](../implementing-promotional-offers-in-your-app.md)

<a id="Discussion"></a>

## Discussion

You set up offers and their identifiers in App Store Connect.

## See Also

### Identifying the Discount

- [type](type-swift.property.md): Deprecated. The type of discount offer.
- [SKProductDiscount.Type](type-swift.enum.md): Deprecated. Values representing the types of discount offers an app can present.

# identifier (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 12.2+ (deprecated in 18.0) · iPadOS 12.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14.4+ (deprecated in 15.0) · tvOS 12.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A string used to uniquely identify a discount offer for a product.

> Use Product.SubscriptionOffer.id.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * identifier;
```

## Mentioned In

- [Generating a signature for promotional offers](../generating-a-signature-for-promotional-offers.md)
- [Implementing promotional offers in your app](../implementing-promotional-offers-in-your-app.md)

<a id="Discussion"></a>

## Discussion

You set up offers and their identifiers in App Store Connect.

## See Also

### Identifying the Discount

- [type](type-swift.property.md): Deprecated. The type of discount offer.
- [SKProductDiscountType](type-swift.enum.md): Deprecated. Values representing the types of discount offers an app can present.
