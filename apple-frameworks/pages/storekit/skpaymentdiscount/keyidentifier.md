> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymentdiscount/keyidentifier](https://developer.apple.com/documentation/storekit/skpaymentdiscount/keyidentifier)

# keyIdentifier (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 12.2+ (deprecated in 18.0) · iPadOS 12.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14.4+ (deprecated in 15.0) · tvOS 12.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A string that identifies the key used to generate the signature.

> Create a Product.PurchaseOption.promotionalOffer to use in Product.purchase(confirmIn:options:).

## Declaration

```swift
var keyIdentifier: String { get }
```

<a id="Discussion"></a>

## Discussion

You generate and download keys from App Store Connect. See the “KEY ID” column in App Store Connect to use as the [keyIdentifier](keyidentifier.md).

## See Also

### Identifying the Discount

- [identifier](identifier.md): Deprecated. A string used to uniquely identify a discount offer for a product.

# keyIdentifier (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 12.2+ (deprecated in 18.0) · iPadOS 12.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14.4+ (deprecated in 15.0) · tvOS 12.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A string that identifies the key used to generate the signature.

> Create a Product.PurchaseOption.promotionalOffer to use in Product.purchase(confirmIn:options:).

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * keyIdentifier;
```

<a id="Discussion"></a>

## Discussion

You generate and download keys from App Store Connect. See the “KEY ID” column in App Store Connect to use as the [keyIdentifier](keyidentifier.md).

## See Also

### Identifying the Discount

- [identifier](identifier.md): Deprecated. A string used to uniquely identify a discount offer for a product.
