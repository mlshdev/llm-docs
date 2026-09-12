> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymentdiscount/signature](https://developer.apple.com/documentation/storekit/skpaymentdiscount/signature)

# signature (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 12.2+ (deprecated in 18.0) · iPadOS 12.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14.4+ (deprecated in 15.0) · tvOS 12.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A string representing the properties of a specific promotional offer, cryptographically signed.

> Create a Product.PurchaseOption.promotionalOffer to use in Product.purchase(confirmIn:options:).

## Declaration

```swift
var signature: String { get }
```

## Mentioned In

- [Implementing promotional offers in your app](../implementing-promotional-offers-in-your-app.md)

<a id="Discussion"></a>

## Discussion

The [signature](signature.md) is a string signed with your private key that represents the properties of a specific promotional offer. To keep your private key secure, generate the [signature](signature.md) on a server.

Generate the [signature](signature.md) using the Elliptic Curve Digital Signature Algorithm (ECDSA) with SHA 256. For more information, see [Generating a signature for promotional offers](../generating-a-signature-for-promotional-offers.md).

## See Also

### Validating the Discount

- [nonce](nonce.md): Deprecated. A universally unique ID (UUID) value that you define.
- [timestamp](timestamp.md): Deprecated. The date and time of the signature’s creation in milliseconds, formatted in Unix epoch time.

# signature (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 12.2+ (deprecated in 18.0) · iPadOS 12.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14.4+ (deprecated in 15.0) · tvOS 12.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A string representing the properties of a specific promotional offer, cryptographically signed.

> Create a Product.PurchaseOption.promotionalOffer to use in Product.purchase(confirmIn:options:).

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * signature;
```

## Mentioned In

- [Implementing promotional offers in your app](../implementing-promotional-offers-in-your-app.md)

<a id="Discussion"></a>

## Discussion

The [signature](signature.md) is a string signed with your private key that represents the properties of a specific promotional offer. To keep your private key secure, generate the [signature](signature.md) on a server.

Generate the [signature](signature.md) using the Elliptic Curve Digital Signature Algorithm (ECDSA) with SHA 256. For more information, see [Generating a signature for promotional offers](../generating-a-signature-for-promotional-offers.md).

## See Also

### Validating the Discount

- [nonce](nonce.md): Deprecated. A universally unique ID (UUID) value that you define.
- [timestamp](timestamp.md): Deprecated. The date and time of the signature’s creation in milliseconds, formatted in Unix epoch time.
