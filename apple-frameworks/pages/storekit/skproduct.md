> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skproduct](https://developer.apple.com/documentation/storekit/skproduct)

# SKProduct (Swift)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Information about a registered product in App Store Connect.

> Use Product.

## Declaration

```swift
class SKProduct
```

## Mentioned In

- [Implementing promotional offers in your app](implementing-promotional-offers-in-your-app.md)
- [Fetching product information from the App Store](fetching-product-information-from-the-app-store.md)
- [Requesting a payment from the App Store](requesting-a-payment-from-the-app-store.md)
- [Supporting Family Sharing in your app](supporting-family-sharing-in-your-app.md)

<a id="overview"></a>

## Overview

[SKProduct](skproduct.md) objects are returned as part of an [SKProductsResponse](skproductsresponse.md) object.

## Topics

### Getting the Product Identifier

- [productIdentifier](skproduct/productidentifier.md): Deprecated. The string that identifies the product to the Apple App Store.

### Getting Product Attributes

- [localizedDescription](skproduct/localizeddescription.md): Deprecated. A description of the product.
- [localizedTitle](skproduct/localizedtitle.md): Deprecated. The name of the product.
- [contentVersion](skproduct/contentversion.md): Deprecated. A string that identifies the version of the content.
- [isFamilyShareable](skproduct/isfamilyshareable.md): Deprecated. A Boolean value that indicates whether the product is available for Family Sharing in App Store Connect.
- [contentLengths](skproduct/contentlengths.md): Deprecated. The total size of the content, in bytes.

### Getting Pricing Information

- [price](skproduct/price.md): Deprecated. The cost of the product in the local currency.
- [priceLocale](skproduct/pricelocale.md): Deprecated. The locale used to format the price of the product.
- [introductoryPrice](skproduct/introductoryprice.md): Deprecated. The object containing introductory price information for the product.
- [discounts](skproduct/discounts.md): Deprecated. An array of subscription offers available for the auto-renewable subscription.
- [SKProductDiscount](skproductdiscount.md): Deprecated. The details of an introductory offer or a promotional offer for an auto-renewable subscription.

### Getting Subscription Information

- [subscriptionGroupIdentifier](skproduct/subscriptiongroupidentifier.md): Deprecated. The identifier of the subscription group to which the subscription belongs.
- [subscriptionPeriod](skproduct/subscriptionperiod.md): Deprecated. The period details for products that are subscriptions.
- [SKProductSubscriptionPeriod](skproductsubscriptionperiod.md): Deprecated. An object containing the subscription period duration information.
- [SKProduct.PeriodUnit](skproduct/periodunit.md): Deprecated. Values representing the duration of an interval, from a day up to a year.

### Getting Downloadable Content Information

- [isDownloadable](skproduct/isdownloadable.md): Deprecated. A Boolean value that indicates whether the App Store has downloadable content for this product.
- [downloadContentLengths](skproduct/downloadcontentlengths.md): Deprecated. The lengths of the downloadable files available for this product.
- [downloadContentVersion](skproduct/downloadcontentversion.md): Deprecated. A string that identifies which version of the content is available for download.
- [downloadable](skproduct/downloadable.md): Deprecated. A Boolean value that indicates whether the App Store has downloadable content for this product.

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

### Product information

- [Loading in-app product identifiers](loading-in-app-product-identifiers.md): Load the unique identifiers for your in-app products to retrieve product information from the App Store.
- [Fetching product information from the App Store](fetching-product-information-from-the-app-store.md): Retrieve up-to-date information about the products for sale in your app to display to your customers.
- [SKProductsRequest](skproductsrequest.md): Deprecated. An object that can retrieve localized information from the App Store about a specified list of products.
- [SKProductsResponse](skproductsresponse.md): Deprecated. An App Store response to a request for information about a list of products.

# SKProduct (Objective-C)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Information about a registered product in App Store Connect.

> Use Product.

## Declaration

```objectivec
@interface SKProduct : NSObject
```

## Mentioned In

- [Implementing promotional offers in your app](implementing-promotional-offers-in-your-app.md)
- [Fetching product information from the App Store](fetching-product-information-from-the-app-store.md)
- [Requesting a payment from the App Store](requesting-a-payment-from-the-app-store.md)
- [Supporting Family Sharing in your app](supporting-family-sharing-in-your-app.md)

<a id="overview"></a>

## Overview

[SKProduct](skproduct.md) objects are returned as part of an [SKProductsResponse](skproductsresponse.md) object.

## Topics

### Getting the Product Identifier

- [productIdentifier](skproduct/productidentifier.md): Deprecated. The string that identifies the product to the Apple App Store.

### Getting Product Attributes

- [localizedDescription](skproduct/localizeddescription.md): Deprecated. A description of the product.
- [localizedTitle](skproduct/localizedtitle.md): Deprecated. The name of the product.
- [contentVersion](skproduct/contentversion.md): Deprecated. A string that identifies the version of the content.
- [isFamilyShareable](skproduct/isfamilyshareable.md): Deprecated. A Boolean value that indicates whether the product is available for Family Sharing in App Store Connect.
- [contentLengths](skproduct/contentlengths.md): Deprecated. The total size of the content, in bytes.

### Getting Pricing Information

- [price](skproduct/price.md): Deprecated. The cost of the product in the local currency.
- [priceLocale](skproduct/pricelocale.md): Deprecated. The locale used to format the price of the product.
- [introductoryPrice](skproduct/introductoryprice.md): Deprecated. The object containing introductory price information for the product.
- [discounts](skproduct/discounts.md): Deprecated. An array of subscription offers available for the auto-renewable subscription.
- [SKProductDiscount](skproductdiscount.md): Deprecated. The details of an introductory offer or a promotional offer for an auto-renewable subscription.

### Getting Subscription Information

- [subscriptionGroupIdentifier](skproduct/subscriptiongroupidentifier.md): Deprecated. The identifier of the subscription group to which the subscription belongs.
- [subscriptionPeriod](skproduct/subscriptionperiod.md): Deprecated. The period details for products that are subscriptions.
- [SKProductSubscriptionPeriod](skproductsubscriptionperiod.md): Deprecated. An object containing the subscription period duration information.
- [SKProductPeriodUnit](skproduct/periodunit.md): Deprecated. Values representing the duration of an interval, from a day up to a year.

### Getting Downloadable Content Information

- [isDownloadable](skproduct/isdownloadable.md): Deprecated. A Boolean value that indicates whether the App Store has downloadable content for this product.
- [downloadContentLengths](skproduct/downloadcontentlengths.md): Deprecated. The lengths of the downloadable files available for this product.
- [downloadContentVersion](skproduct/downloadcontentversion.md): Deprecated. A string that identifies which version of the content is available for download.
- [downloadable](skproduct/downloadable.md): Deprecated. A Boolean value that indicates whether the App Store has downloadable content for this product.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Product information

- [Loading in-app product identifiers](loading-in-app-product-identifiers.md): Load the unique identifiers for your in-app products to retrieve product information from the App Store.
- [Fetching product information from the App Store](fetching-product-information-from-the-app-store.md): Retrieve up-to-date information about the products for sale in your app to display to your customers.
- [SKProductsRequest](skproductsrequest.md): Deprecated. An object that can retrieve localized information from the App Store about a specified list of products.
- [SKProductsResponse](skproductsresponse.md): Deprecated. An App Store response to a request for information about a list of products.
