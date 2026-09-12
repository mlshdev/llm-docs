> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skproductdiscount/paymentmode-swift.enum/payupfront](https://developer.apple.com/documentation/storekit/skproductdiscount/paymentmode-swift.enum/payupfront)

# SKProductDiscount.PaymentMode.payUpFront (Swift)

**Framework:** StoreKit  
**Kind:** Case  
**Availability:** iOS 11.2+ (deprecated in 18.0) · iPadOS 11.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.13.2+ (deprecated in 15.0) · tvOS 11.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A constant that indicates that the system applies the product discount up front.

> Use Product.SubscriptionOffer.PaymentMode.

## Declaration

```swift
case payUpFront
```

## Mentioned In

- [Implementing introductory offers in your app](../../implementing-introductory-offers-in-your-app.md)

<a id="Discussion"></a>

## Discussion

With a pay up front payment mode, users pay the discounted price one time, and receive the product for duration of the discount period.

![Example of a subscription timeline with a pay up front payment mode. The introductory price is billed one time.](https://developer.apple.com/images/com.apple.storekit/media-2942133.png)

## See Also

### Discount Price Payment Modes

- [SKProductDiscount.PaymentMode.payAsYouGo](payasyougo.md): Deprecated. A constant that indicates a product discount that applies over a single billing period or multiple billing periods.
- [SKProductDiscount.PaymentMode.freeTrial](freetrial.md): Deprecated. A constant that indicates that the payment mode is a free trial.

# SKProductDiscountPaymentModePayUpFront (Objective-C)

**Framework:** StoreKit  
**Kind:** Enumeration Case  
**Availability:** iOS 11.2+ (deprecated in 18.0) · iPadOS 11.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.13.2+ (deprecated in 15.0) · tvOS 11.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A constant that indicates that the system applies the product discount up front.

> Use Product.SubscriptionOffer.PaymentMode.

## Declaration

```objectivec
SKProductDiscountPaymentModePayUpFront
```

## Mentioned In

- [Implementing introductory offers in your app](../../implementing-introductory-offers-in-your-app.md)

<a id="Discussion"></a>

## Discussion

With a pay up front payment mode, users pay the discounted price one time, and receive the product for duration of the discount period.

![Example of a subscription timeline with a pay up front payment mode. The introductory price is billed one time.](https://developer.apple.com/images/com.apple.storekit/media-2942133.png)

## See Also

### Discount Price Payment Modes

- [SKProductDiscountPaymentModePayAsYouGo](payasyougo.md): Deprecated. A constant that indicates a product discount that applies over a single billing period or multiple billing periods.
- [SKProductDiscountPaymentModeFreeTrial](freetrial.md): Deprecated. A constant that indicates that the payment mode is a free trial.
