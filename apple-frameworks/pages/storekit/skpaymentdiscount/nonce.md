> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymentdiscount/nonce](https://developer.apple.com/documentation/storekit/skpaymentdiscount/nonce)

# nonce (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 12.2+ (deprecated in 18.0) · iPadOS 12.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14.4+ (deprecated in 15.0) · tvOS 12.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A universally unique ID (UUID) value that you define.

> Create a Product.PurchaseOption.promotionalOffer to use in Product.purchase(confirmIn:options:).

## Declaration

```swift
var nonce: UUID { get }
```

<a id="Discussion"></a>

## Discussion

Your server generates a unique [nonce](nonce.md) when it creates the [signature](signature.md) string for the payment discount. The string representation of the [nonce](nonce.md) must be lowercase.

You can use a [nonce](nonce.md) one time; generate a new one for every buy request.

## See Also

### Validating the Discount

- [signature](signature.md): Deprecated. A string representing the properties of a specific promotional offer, cryptographically signed.
- [timestamp](timestamp.md): Deprecated. The date and time of the signature’s creation in milliseconds, formatted in Unix epoch time.

# nonce (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 12.2+ (deprecated in 18.0) · iPadOS 12.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14.4+ (deprecated in 15.0) · tvOS 12.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A universally unique ID (UUID) value that you define.

> Create a Product.PurchaseOption.promotionalOffer to use in Product.purchase(confirmIn:options:).

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSUUID * nonce;
```

<a id="Discussion"></a>

## Discussion

Your server generates a unique [nonce](nonce.md) when it creates the [signature](signature.md) string for the payment discount. The string representation of the [nonce](nonce.md) must be lowercase.

You can use a [nonce](nonce.md) one time; generate a new one for every buy request.

## See Also

### Validating the Discount

- [signature](signature.md): Deprecated. A string representing the properties of a specific promotional offer, cryptographically signed.
- [timestamp](timestamp.md): Deprecated. The date and time of the signature’s creation in milliseconds, formatted in Unix epoch time.
