> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skproductdiscount/type-swift.enum](https://developer.apple.com/documentation/storekit/skproductdiscount/type-swift.enum)

# SKProductDiscount.Type (Swift)

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 12.2+ (deprecated in 18.0) · iPadOS 12.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14.4+ (deprecated in 15.0) · tvOS 12.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Values representing the types of discount offers an app can present.

> Use Product.SubscriptionOffer.OfferType.

## Declaration

```swift
enum `Type`
```

## Topics

### Types of Offers

- [SKProductDiscount.Type.introductory](type-swift.enum/introductory.md): Deprecated. A constant indicating the discount type is an introductory offer.
- [SKProductDiscount.Type.subscription](type-swift.enum/subscription.md): Deprecated. A constant indicating the discount type is a promotional offer.

### Initializers

- [init(rawValue:)](type-swift.enum/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Identifying the Discount

- [identifier](identifier.md): Deprecated. A string used to uniquely identify a discount offer for a product.
- [type](type-swift.property.md): Deprecated. The type of discount offer.

# SKProductDiscountType (Objective-C)

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 12.2+ (deprecated in 18.0) · iPadOS 12.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14.4+ (deprecated in 15.0) · tvOS 12.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Values representing the types of discount offers an app can present.

> Use Product.SubscriptionOffer.OfferType.

## Declaration

```objectivec
enum SKProductDiscountType : NSUInteger;
```

## Topics

### Types of Offers

- [SKProductDiscountTypeIntroductory](type-swift.enum/introductory.md): Deprecated. A constant indicating the discount type is an introductory offer.
- [SKProductDiscountTypeSubscription](type-swift.enum/subscription.md): Deprecated. A constant indicating the discount type is a promotional offer.

## See Also

### Identifying the Discount

- [identifier](identifier.md): Deprecated. A string used to uniquely identify a discount offer for a product.
- [type](type-swift.property.md): Deprecated. The type of discount offer.
