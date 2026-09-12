> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skproduct/pricelocale](https://developer.apple.com/documentation/storekit/skproduct/pricelocale)

# priceLocale (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The locale used to format the price of the product.

> Use Product.displayPrice.

## Declaration

```swift
var priceLocale: Locale { get }
```

<a id="Discussion"></a>

## Discussion

Use the locale to format the [price](price.md).

## See Also

### Getting Pricing Information

- [price](price.md): Deprecated. The cost of the product in the local currency.
- [introductoryPrice](introductoryprice.md): Deprecated. The object containing introductory price information for the product.
- [discounts](discounts.md): Deprecated. An array of subscription offers available for the auto-renewable subscription.
- [SKProductDiscount](../skproductdiscount.md): Deprecated. The details of an introductory offer or a promotional offer for an auto-renewable subscription.

# priceLocale (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The locale used to format the price of the product.

> Use Product.displayPrice.

## Declaration

```objectivec
@property (nonatomic, readonly) NSLocale * priceLocale;
```

<a id="Discussion"></a>

## Discussion

Use the locale to format the [price](price.md).

## See Also

### Getting Pricing Information

- [price](price.md): Deprecated. The cost of the product in the local currency.
- [introductoryPrice](introductoryprice.md): Deprecated. The object containing introductory price information for the product.
- [discounts](discounts.md): Deprecated. An array of subscription offers available for the auto-renewable subscription.
- [SKProductDiscount](../skproductdiscount.md): Deprecated. The details of an introductory offer or a promotional offer for an auto-renewable subscription.
