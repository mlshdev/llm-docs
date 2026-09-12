> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skproduct/introductoryprice](https://developer.apple.com/documentation/storekit/skproduct/introductoryprice)

# introductoryPrice (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 11.2+ (deprecated in 18.0) · iPadOS 11.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.13.2+ (deprecated in 15.0) · tvOS 11.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The object containing introductory price information for the product.

> Use Product.subscription.introductionaryOffer.

## Declaration

```swift
var introductoryPrice: SKProductDiscount? { get }
```

## Mentioned In

- [Implementing introductory offers in your app](../implementing-introductory-offers-in-your-app.md)

<a id="Discussion"></a>

## Discussion

If you’ve set up introductory prices in App Store Connect, the introductory price property will be populated. This property is `nil` if the product has no introductory price.

Before displaying UI that offers the introductory price, you must first determine if the user is eligible to receive it. See [Implementing introductory offers in your app](../implementing-introductory-offers-in-your-app.md) for information on determining eligibility and displaying introductory prices.

## See Also

### Getting Pricing Information

- [price](price.md): Deprecated. The cost of the product in the local currency.
- [priceLocale](pricelocale.md): Deprecated. The locale used to format the price of the product.
- [discounts](discounts.md): Deprecated. An array of subscription offers available for the auto-renewable subscription.
- [SKProductDiscount](../skproductdiscount.md): Deprecated. The details of an introductory offer or a promotional offer for an auto-renewable subscription.

# introductoryPrice (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 11.2+ (deprecated in 18.0) · iPadOS 11.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.13.2+ (deprecated in 15.0) · tvOS 11.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The object containing introductory price information for the product.

> Use Product.subscription.introductionaryOffer.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) SKProductDiscount * introductoryPrice;
```

## Mentioned In

- [Implementing introductory offers in your app](../implementing-introductory-offers-in-your-app.md)

<a id="Discussion"></a>

## Discussion

If you’ve set up introductory prices in App Store Connect, the introductory price property will be populated. This property is `nil` if the product has no introductory price.

Before displaying UI that offers the introductory price, you must first determine if the user is eligible to receive it. See [Implementing introductory offers in your app](../implementing-introductory-offers-in-your-app.md) for information on determining eligibility and displaying introductory prices.

## See Also

### Getting Pricing Information

- [price](price.md): Deprecated. The cost of the product in the local currency.
- [priceLocale](pricelocale.md): Deprecated. The locale used to format the price of the product.
- [discounts](discounts.md): Deprecated. An array of subscription offers available for the auto-renewable subscription.
- [SKProductDiscount](../skproductdiscount.md): Deprecated. The details of an introductory offer or a promotional offer for an auto-renewable subscription.
