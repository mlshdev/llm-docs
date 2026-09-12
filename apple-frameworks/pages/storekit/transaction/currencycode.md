> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/currencycode](https://developer.apple.com/documentation/storekit/transaction/currencycode)

# currencyCode

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ (deprecated in 16.0) · iPadOS 15.0+ (deprecated in 16.0) · Mac Catalyst 15.0+ (deprecated in 16.0) · macOS 12.0+ (deprecated in 13.0) · tvOS 15.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.1) · watchOS 8.0+ (deprecated in 9.0)

The three-letter ISO 4217 currency code for the price of the product.

> Use [currency](currency.md) instead. To get the currency code as a string, use the [identifier](../../foundation/locale/currency-swift.struct/identifier.md) property of [currency](../product/subscriptioninfo/renewalinfo/currency.md).

## Declaration

```swift
@backDeployed(before: iOS 16.0, macOS 13.0, tvOS 16.0, watchOS 9.0)
var currencyCode: String? { get }
```

<a id="Discussion"></a>

## Discussion

The [currencyCode](currencycode.md) property contains an ISO 4217 alpha-3 string that represents the currency of the price of the product. Use [currencyCode](../product/subscriptioninfo/renewalinfo/currencycode.md) to access the currency of the price on systems earlier than iOS 16, iPadOS 16, macOS 13, tvOS 16, and watchOS 9. Otherwise, use [currency](../product/subscriptioninfo/renewalinfo/currency.md).

> **Important**

>  For financial and accounting purposes, use the App Store Connect reporting tools. For more information, see [Download financial reports](https://developer.apple.com/help/app-store-connect/getting-paid/download-financial-reports) and [Overview of reporting tools](https://developer.apple.com/help/app-store-connect/measure-app-performance/overview-of-reporting-tools).

Don’t use [currencyCode](currencycode.md) to infer the storefront. Use the [storefront](storefront.md) value in the transaction instead.

For more information on how you set prices, see [Set a price for an in-app purchase](https://developer.apple.com/help/app-store-connect/manage-in-app-purchases/set-a-price-for-an-in-app-purchase).

## See Also

### Deprecated

- [environmentStringRepresentation](environmentstringrepresentation.md): Deprecated. A string representation of the server environment.
- [offerID](offerid.md): Deprecated. A string that identifies an offer applied to the current subscription.
- [offerPaymentModeStringRepresentation](offerpaymentmodestringrepresentation.md): Deprecated. The string representation of the payment mode for a subscription offer.
- [offerType](offertype-swift.property.md): Deprecated. The subscription offer type for the current subscription period.
- [reasonStringRepresentation](reasonstringrepresentation.md): Deprecated. The string representation of the transaction reason.
- [storefrontCountryCode](storefrontcountrycode.md): Deprecated. The three-letter code that represents the country or region associated with the App Store storefront of the purchase.
