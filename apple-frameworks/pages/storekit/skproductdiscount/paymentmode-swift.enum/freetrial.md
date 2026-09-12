> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skproductdiscount/paymentmode-swift.enum/freetrial](https://developer.apple.com/documentation/storekit/skproductdiscount/paymentmode-swift.enum/freetrial)

# SKProductDiscount.PaymentMode.freeTrial (Swift)

**Framework:** StoreKit  
**Kind:** Case  
**Availability:** iOS 11.2+ (deprecated in 18.0) · iPadOS 11.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.13.2+ (deprecated in 15.0) · tvOS 11.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A constant that indicates that the payment mode is a free trial.

> Use Product.SubscriptionOffer.PaymentMode.

## Declaration

```swift
case freeTrial
```

## Mentioned In

- [Implementing introductory offers in your app](../../implementing-introductory-offers-in-your-app.md)

<a id="Discussion"></a>

## Discussion

With a free trial payment mode, the price is 0, so users pay nothing during the discount period.

![Example of a subscription timeline starting with a free trial. After the free introductory period, the subscription renews at regular price. ](https://developer.apple.com/images/com.apple.storekit/media-2942195@2x.png)

## See Also

### Discount Price Payment Modes

- [SKProductDiscount.PaymentMode.payAsYouGo](payasyougo.md): Deprecated. A constant that indicates a product discount that applies over a single billing period or multiple billing periods.
- [SKProductDiscount.PaymentMode.payUpFront](payupfront.md): Deprecated. A constant that indicates that the system applies the product discount up front.

# SKProductDiscountPaymentModeFreeTrial (Objective-C)

**Framework:** StoreKit  
**Kind:** Enumeration Case  
**Availability:** iOS 11.2+ (deprecated in 18.0) · iPadOS 11.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.13.2+ (deprecated in 15.0) · tvOS 11.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A constant that indicates that the payment mode is a free trial.

> Use Product.SubscriptionOffer.PaymentMode.

## Declaration

```objectivec
SKProductDiscountPaymentModeFreeTrial
```

## Mentioned In

- [Implementing introductory offers in your app](../../implementing-introductory-offers-in-your-app.md)

<a id="Discussion"></a>

## Discussion

With a free trial payment mode, the price is 0, so users pay nothing during the discount period.

![Example of a subscription timeline starting with a free trial. After the free introductory period, the subscription renews at regular price. ](https://developer.apple.com/images/com.apple.storekit/media-2942195@2x.png)

## See Also

### Discount Price Payment Modes

- [SKProductDiscountPaymentModePayAsYouGo](payasyougo.md): Deprecated. A constant that indicates a product discount that applies over a single billing period or multiple billing periods.
- [SKProductDiscountPaymentModePayUpFront](payupfront.md): Deprecated. A constant that indicates that the system applies the product discount up front.
