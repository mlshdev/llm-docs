> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymentdiscount](https://developer.apple.com/documentation/storekit/skpaymentdiscount)

# SKPaymentDiscount (Swift)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 12.2+ (deprecated in 18.0) · iPadOS 12.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14.4+ (deprecated in 15.0) · tvOS 12.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The signed discount to apply to a payment.

> Create a Product.PurchaseOption.promotionalOffer to use in Product.purchase(confirmIn:options:).

## Declaration

```swift
class SKPaymentDiscount
```

## Mentioned In

- [Implementing promotional offers in your app](implementing-promotional-offers-in-your-app.md)
- [Generating a signature for promotional offers](generating-a-signature-for-promotional-offers.md)

<a id="overview"></a>

## Overview

The [SKPaymentDiscount](skpaymentdiscount.md) contains the details of a promotional offer discount that you want to apply to a [SKMutablePayment](skmutablepayment.md).

Include the signature that you generated in this object. For guidance, see [Generating a signature for promotional offers](generating-a-signature-for-promotional-offers.md). The App Store uses this signature and the parameters to validate the promotional offer. Keep in mind that the signature must correspond to the parameters in the payment for a transaction to be successful.

## Topics

### Initializing a Payment Discount

- [init(identifier:keyIdentifier:nonce:signature:timestamp:)](skpaymentdiscount/init%28identifier_keyidentifier_nonce_signature_timestamp_%29.md): Deprecated. Initializes the payment discount with a signature and the parameters used by the signature.

### Identifying the Discount

- [identifier](skpaymentdiscount/identifier.md): Deprecated. A string used to uniquely identify a discount offer for a product.
- [keyIdentifier](skpaymentdiscount/keyidentifier.md): Deprecated. A string that identifies the key used to generate the signature.

### Validating the Discount

- [nonce](skpaymentdiscount/nonce.md): Deprecated. A universally unique ID (UUID) value that you define.
- [signature](skpaymentdiscount/signature.md): Deprecated. A string representing the properties of a specific promotional offer, cryptographically signed.
- [timestamp](skpaymentdiscount/timestamp.md): Deprecated. The date and time of the signature’s creation in milliseconds, formatted in Unix epoch time.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting Discount Details

- [paymentDiscount](skpayment/paymentdiscount.md): Deprecated. The details of the discount offer to apply to the payment.

# SKPaymentDiscount (Objective-C)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 12.2+ (deprecated in 18.0) · iPadOS 12.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14.4+ (deprecated in 15.0) · tvOS 12.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The signed discount to apply to a payment.

> Create a Product.PurchaseOption.promotionalOffer to use in Product.purchase(confirmIn:options:).

## Declaration

```objectivec
@interface SKPaymentDiscount : NSObject
```

## Mentioned In

- [Implementing promotional offers in your app](implementing-promotional-offers-in-your-app.md)
- [Generating a signature for promotional offers](generating-a-signature-for-promotional-offers.md)

<a id="overview"></a>

## Overview

The [SKPaymentDiscount](skpaymentdiscount.md) contains the details of a promotional offer discount that you want to apply to a [SKMutablePayment](skmutablepayment.md).

Include the signature that you generated in this object. For guidance, see [Generating a signature for promotional offers](generating-a-signature-for-promotional-offers.md). The App Store uses this signature and the parameters to validate the promotional offer. Keep in mind that the signature must correspond to the parameters in the payment for a transaction to be successful.

## Topics

### Initializing a Payment Discount

- [initWithIdentifier:keyIdentifier:nonce:signature:timestamp:](skpaymentdiscount/init%28identifier_keyidentifier_nonce_signature_timestamp_%29.md): Deprecated. Initializes the payment discount with a signature and the parameters used by the signature.

### Identifying the Discount

- [identifier](skpaymentdiscount/identifier.md): Deprecated. A string used to uniquely identify a discount offer for a product.
- [keyIdentifier](skpaymentdiscount/keyidentifier.md): Deprecated. A string that identifies the key used to generate the signature.

### Validating the Discount

- [nonce](skpaymentdiscount/nonce.md): Deprecated. A universally unique ID (UUID) value that you define.
- [signature](skpaymentdiscount/signature.md): Deprecated. A string representing the properties of a specific promotional offer, cryptographically signed.
- [timestamp](skpaymentdiscount/timestamp.md): Deprecated. The date and time of the signature’s creation in milliseconds, formatted in Unix epoch time.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Getting Discount Details

- [paymentDiscount](skpayment/paymentdiscount.md): Deprecated. The details of the discount offer to apply to the payment.
