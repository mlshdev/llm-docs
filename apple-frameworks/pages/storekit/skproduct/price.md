> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skproduct/price](https://developer.apple.com/documentation/storekit/skproduct/price)

# price (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The cost of the product in the local currency.

> Use Product.displayPrice.

## Declaration

```swift
var price: NSDecimalNumber { get }
```

<a id="Discussion"></a>

## Discussion

Your app can format the price using a number formatter, as shown in the following sample code:

**Swift**

```swift
let numberFormatter = NumberFormatter()
numberFormatter.numberStyle = .currency
numberFormatter.locale = product.priceLocale
let formattedString = numberFormatter.string(from: product.price)
```

**Objective-C**

```objc
NSNumberFormatter *numberFormatter = [[NSNumberFormatter alloc] init];
[numberFormatter setFormatterBehavior:NSNumberFormatterBehavior10_4];
[numberFormatter setNumberStyle:NSNumberFormatterCurrencyStyle];
[numberFormatter setLocale:product.priceLocale];
NSString *formattedString = [numberFormatter stringFromNumber:product.price];
```

## See Also

### Getting Pricing Information

- [priceLocale](pricelocale.md): Deprecated. The locale used to format the price of the product.
- [introductoryPrice](introductoryprice.md): Deprecated. The object containing introductory price information for the product.
- [discounts](discounts.md): Deprecated. An array of subscription offers available for the auto-renewable subscription.
- [SKProductDiscount](../skproductdiscount.md): Deprecated. The details of an introductory offer or a promotional offer for an auto-renewable subscription.

# price (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The cost of the product in the local currency.

> Use Product.displayPrice.

## Declaration

```objectivec
@property (nonatomic, readonly) NSDecimalNumber * price;
```

<a id="Discussion"></a>

## Discussion

Your app can format the price using a number formatter, as shown in the following sample code:

**Swift**

```swift
let numberFormatter = NumberFormatter()
numberFormatter.numberStyle = .currency
numberFormatter.locale = product.priceLocale
let formattedString = numberFormatter.string(from: product.price)
```

**Objective-C**

```objc
NSNumberFormatter *numberFormatter = [[NSNumberFormatter alloc] init];
[numberFormatter setFormatterBehavior:NSNumberFormatterBehavior10_4];
[numberFormatter setNumberStyle:NSNumberFormatterCurrencyStyle];
[numberFormatter setLocale:product.priceLocale];
NSString *formattedString = [numberFormatter stringFromNumber:product.price];
```

## See Also

### Getting Pricing Information

- [priceLocale](pricelocale.md): Deprecated. The locale used to format the price of the product.
- [introductoryPrice](introductoryprice.md): Deprecated. The object containing introductory price information for the product.
- [discounts](discounts.md): Deprecated. An array of subscription offers available for the auto-renewable subscription.
- [SKProductDiscount](../skproductdiscount.md): Deprecated. The details of an introductory offer or a promotional offer for an auto-renewable subscription.
