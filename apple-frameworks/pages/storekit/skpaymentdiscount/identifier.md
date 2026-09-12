> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymentdiscount/identifier](https://developer.apple.com/documentation/storekit/skpaymentdiscount/identifier)

# identifier (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 12.2+ (deprecated in 18.0) · iPadOS 12.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14.4+ (deprecated in 15.0) · tvOS 12.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A string used to uniquely identify a discount offer for a product.

> Create a Product.PurchaseOption.promotionalOffer to use in Product.purchase(confirmIn:options:).

## Declaration

```swift
var identifier: String { get }
```

<a id="Discussion"></a>

## Discussion

You set up offers and their identifiers in App Store Connect. If the [identifier](identifier.md) is not valid, an [SKError.Code.invalidOfferIdentifier](../skerror/code/invalidofferidentifier.md) error can result.

## See Also

### Identifying the Discount

- [keyIdentifier](keyidentifier.md): Deprecated. A string that identifies the key used to generate the signature.

# identifier (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 12.2+ (deprecated in 18.0) · iPadOS 12.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14.4+ (deprecated in 15.0) · tvOS 12.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A string used to uniquely identify a discount offer for a product.

> Create a Product.PurchaseOption.promotionalOffer to use in Product.purchase(confirmIn:options:).

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * identifier;
```

<a id="Discussion"></a>

## Discussion

You set up offers and their identifiers in App Store Connect. If the [identifier](identifier.md) is not valid, an [SKErrorInvalidOfferIdentifier](../skerror/code/invalidofferidentifier.md) error can result.

## See Also

### Identifying the Discount

- [keyIdentifier](keyidentifier.md): Deprecated. A string that identifies the key used to generate the signature.
