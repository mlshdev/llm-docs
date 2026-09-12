> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skmutablepayment/paymentdiscount](https://developer.apple.com/documentation/storekit/skmutablepayment/paymentdiscount)

# paymentDiscount (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 12.2+ (deprecated in 18.0) · iPadOS 12.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14.4+ (deprecated in 15.0) · tvOS 12.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The details of the discount offer to apply to the payment.

> Create a Product.PurchaseOption.promotionalOffer to use in Product.purchase(confirmIn:options:).

## Declaration

```swift
@NSCopying var paymentDiscount: SKPaymentDiscount? { get set }
```

## Mentioned In

- [Implementing promotional offers in your app](../implementing-promotional-offers-in-your-app.md)

# paymentDiscount (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 12.2+ (deprecated in 18.0) · iPadOS 12.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14.4+ (deprecated in 15.0) · tvOS 12.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The details of the discount offer to apply to the payment.

> Create a Product.PurchaseOption.promotionalOffer to use in Product.purchase(confirmIn:options:).

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) SKPaymentDiscount * paymentDiscount;
```

## Mentioned In

- [Implementing promotional offers in your app](../implementing-promotional-offers-in-your-app.md)
