> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skproductdiscount](https://developer.apple.com/documentation/storekit/skproductdiscount)

# SKProductDiscount (Swift)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 11.2+ (deprecated in 18.0) · iPadOS 11.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.13.2+ (deprecated in 15.0) · tvOS 11.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The details of an introductory offer or a promotional offer for an auto-renewable subscription.

> Use Product.SubscriptionOffer.

## Declaration

```swift
class SKProductDiscount
```

## Mentioned In

- [Implementing promotional offers in your app](implementing-promotional-offers-in-your-app.md)

<a id="overview"></a>

## Overview

You set up introductory and promotional offers in App Store Connect. [SKProductDiscount](skproductdiscount.md) contains the offer information as retrieved from the App Store.

For more information about setting up offers, see [Set an introductory offer for an auto-renewable subscription](https://help.apple.com/app-store-connect/#/deve1d49254f) and [Set up promotional offers for auto-renewable subscriptions](https://help.apple.com/app-store-connect/#/dev16dfca448).

## Topics

### Identifying the Discount

- [identifier](skproductdiscount/identifier.md): Deprecated. A string used to uniquely identify a discount offer for a product.
- [type](skproductdiscount/type-swift.property.md): Deprecated. The type of discount offer.
- [SKProductDiscount.Type](skproductdiscount/type-swift.enum.md): Deprecated. Values representing the types of discount offers an app can present.

### Getting Price and Payment Mode

- [price](skproductdiscount/price.md): Deprecated. The discount price of the product in the local currency.
- [priceLocale](skproductdiscount/pricelocale.md): Deprecated. The locale used to format the discount price of the product.
- [paymentMode](skproductdiscount/paymentmode-swift.property.md): Deprecated. The payment mode for this product discount.
- [SKProductDiscount.PaymentMode](skproductdiscount/paymentmode-swift.enum.md): Deprecated. Values representing the payment modes for a product discount.

### Getting the Discount Duration

- [numberOfPeriods](skproductdiscount/numberofperiods.md): Deprecated. An integer that indicates the number of periods the product discount is available.
- [subscriptionPeriod](skproductdiscount/subscriptionperiod.md): Deprecated. An object that defines the period for the product discount.

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

### Getting Pricing Information

- [price](skproduct/price.md): Deprecated. The cost of the product in the local currency.
- [priceLocale](skproduct/pricelocale.md): Deprecated. The locale used to format the price of the product.
- [introductoryPrice](skproduct/introductoryprice.md): Deprecated. The object containing introductory price information for the product.
- [discounts](skproduct/discounts.md): Deprecated. An array of subscription offers available for the auto-renewable subscription.

# SKProductDiscount (Objective-C)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 11.2+ (deprecated in 18.0) · iPadOS 11.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.13.2+ (deprecated in 15.0) · tvOS 11.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The details of an introductory offer or a promotional offer for an auto-renewable subscription.

> Use Product.SubscriptionOffer.

## Declaration

```objectivec
@interface SKProductDiscount : NSObject
```

## Mentioned In

- [Implementing promotional offers in your app](implementing-promotional-offers-in-your-app.md)

<a id="overview"></a>

## Overview

You set up introductory and promotional offers in App Store Connect. [SKProductDiscount](skproductdiscount.md) contains the offer information as retrieved from the App Store.

For more information about setting up offers, see [Set an introductory offer for an auto-renewable subscription](https://help.apple.com/app-store-connect/#/deve1d49254f) and [Set up promotional offers for auto-renewable subscriptions](https://help.apple.com/app-store-connect/#/dev16dfca448).

## Topics

### Identifying the Discount

- [identifier](skproductdiscount/identifier.md): Deprecated. A string used to uniquely identify a discount offer for a product.
- [type](skproductdiscount/type-swift.property.md): Deprecated. The type of discount offer.
- [SKProductDiscountType](skproductdiscount/type-swift.enum.md): Deprecated. Values representing the types of discount offers an app can present.

### Getting Price and Payment Mode

- [price](skproductdiscount/price.md): Deprecated. The discount price of the product in the local currency.
- [priceLocale](skproductdiscount/pricelocale.md): Deprecated. The locale used to format the discount price of the product.
- [paymentMode](skproductdiscount/paymentmode-swift.property.md): Deprecated. The payment mode for this product discount.
- [SKProductDiscountPaymentMode](skproductdiscount/paymentmode-swift.enum.md): Deprecated. Values representing the payment modes for a product discount.

### Getting the Discount Duration

- [numberOfPeriods](skproductdiscount/numberofperiods.md): Deprecated. An integer that indicates the number of periods the product discount is available.
- [subscriptionPeriod](skproductdiscount/subscriptionperiod.md): Deprecated. An object that defines the period for the product discount.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Getting Pricing Information

- [price](skproduct/price.md): Deprecated. The cost of the product in the local currency.
- [priceLocale](skproduct/pricelocale.md): Deprecated. The locale used to format the price of the product.
- [introductoryPrice](skproduct/introductoryprice.md): Deprecated. The object containing introductory price information for the product.
- [discounts](skproduct/discounts.md): Deprecated. An array of subscription offers available for the auto-renewable subscription.
