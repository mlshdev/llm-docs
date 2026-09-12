> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skproductdiscount/paymentmode-swift.enum](https://developer.apple.com/documentation/storekit/skproductdiscount/paymentmode-swift.enum)

# SKProductDiscount.PaymentMode (Swift)

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 11.2+ (deprecated in 18.0) · iPadOS 11.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.13.2+ (deprecated in 15.0) · tvOS 11.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Values representing the payment modes for a product discount.

> Use Product.SubscriptionOffer.PaymentMode.

## Declaration

```swift
enum PaymentMode
```

## Mentioned In

- [Implementing introductory offers in your app](../implementing-introductory-offers-in-your-app.md)

<a id="overview"></a>

## Overview

The payment mode indicates if the discount price is charged one time, multiple times, or if the discount is a free trial.

The payment mode may determine the wording you choose to phrase the offer in your app’s UI.

## Topics

### Discount Price Payment Modes

- [SKProductDiscount.PaymentMode.payAsYouGo](paymentmode-swift.enum/payasyougo.md): Deprecated. A constant that indicates a product discount that applies over a single billing period or multiple billing periods.
- [SKProductDiscount.PaymentMode.payUpFront](paymentmode-swift.enum/payupfront.md): Deprecated. A constant that indicates that the system applies the product discount up front.
- [SKProductDiscount.PaymentMode.freeTrial](paymentmode-swift.enum/freetrial.md): Deprecated. A constant that indicates that the payment mode is a free trial.

### Initializers

- [init(rawValue:)](paymentmode-swift.enum/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting Price and Payment Mode

- [price](price.md): Deprecated. The discount price of the product in the local currency.
- [priceLocale](pricelocale.md): Deprecated. The locale used to format the discount price of the product.
- [paymentMode](paymentmode-swift.property.md): Deprecated. The payment mode for this product discount.

# SKProductDiscountPaymentMode (Objective-C)

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 11.2+ (deprecated in 18.0) · iPadOS 11.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.13.2+ (deprecated in 15.0) · tvOS 11.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Values representing the payment modes for a product discount.

> Use Product.SubscriptionOffer.PaymentMode.

## Declaration

```objectivec
enum SKProductDiscountPaymentMode : NSUInteger;
```

## Mentioned In

- [Implementing introductory offers in your app](../implementing-introductory-offers-in-your-app.md)

<a id="overview"></a>

## Overview

The payment mode indicates if the discount price is charged one time, multiple times, or if the discount is a free trial.

The payment mode may determine the wording you choose to phrase the offer in your app’s UI.

## Topics

### Discount Price Payment Modes

- [SKProductDiscountPaymentModePayAsYouGo](paymentmode-swift.enum/payasyougo.md): Deprecated. A constant that indicates a product discount that applies over a single billing period or multiple billing periods.
- [SKProductDiscountPaymentModePayUpFront](paymentmode-swift.enum/payupfront.md): Deprecated. A constant that indicates that the system applies the product discount up front.
- [SKProductDiscountPaymentModeFreeTrial](paymentmode-swift.enum/freetrial.md): Deprecated. A constant that indicates that the payment mode is a free trial.

## See Also

### Getting Price and Payment Mode

- [price](price.md): Deprecated. The discount price of the product in the local currency.
- [priceLocale](pricelocale.md): Deprecated. The locale used to format the discount price of the product.
- [paymentMode](paymentmode-swift.property.md): Deprecated. The payment mode for this product discount.
