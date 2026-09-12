> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skproduct/discounts](https://developer.apple.com/documentation/storekit/skproduct/discounts)

# discounts (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 12.2+ (deprecated in 18.0) · iPadOS 12.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14.4+ (deprecated in 15.0) · tvOS 12.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

An array of subscription offers available for the auto-renewable subscription.

> Use Product.subscription.promotionalOffers.

## Declaration

```swift
var discounts: [SKProductDiscount] { get }
```

## Mentioned In

- [Implementing promotional offers in your app](../implementing-promotional-offers-in-your-app.md)

<a id="Discussion"></a>

## Discussion

The [discounts](discounts.md) array contains all of the introductory offers and promotional offers that you set up in App Store Connect for this subscription ([productIdentifier](productidentifier.md)).  It’s up to the logic in your app to decide which offer to present to the user.

For more information about offers, see [Implementing promotional offers in your app](../implementing-promotional-offers-in-your-app.md), and [Implementing introductory offers in your app](../implementing-introductory-offers-in-your-app.md).

## See Also

### Getting Pricing Information

- [price](price.md): Deprecated. The cost of the product in the local currency.
- [priceLocale](pricelocale.md): Deprecated. The locale used to format the price of the product.
- [introductoryPrice](introductoryprice.md): Deprecated. The object containing introductory price information for the product.
- [SKProductDiscount](../skproductdiscount.md): Deprecated. The details of an introductory offer or a promotional offer for an auto-renewable subscription.

# discounts (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 12.2+ (deprecated in 18.0) · iPadOS 12.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14.4+ (deprecated in 15.0) · tvOS 12.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

An array of subscription offers available for the auto-renewable subscription.

> Use Product.subscription.promotionalOffers.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<SKProductDiscount *> * discounts;
```

## Mentioned In

- [Implementing promotional offers in your app](../implementing-promotional-offers-in-your-app.md)

<a id="Discussion"></a>

## Discussion

The [discounts](discounts.md) array contains all of the introductory offers and promotional offers that you set up in App Store Connect for this subscription ([productIdentifier](productidentifier.md)).  It’s up to the logic in your app to decide which offer to present to the user.

For more information about offers, see [Implementing promotional offers in your app](../implementing-promotional-offers-in-your-app.md), and [Implementing introductory offers in your app](../implementing-introductory-offers-in-your-app.md).

## See Also

### Getting Pricing Information

- [price](price.md): Deprecated. The cost of the product in the local currency.
- [priceLocale](pricelocale.md): Deprecated. The locale used to format the price of the product.
- [introductoryPrice](introductoryprice.md): Deprecated. The object containing introductory price information for the product.
- [SKProductDiscount](../skproductdiscount.md): Deprecated. The details of an introductory offer or a promotional offer for an auto-renewable subscription.
