> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/environmentstringrepresentation](https://developer.apple.com/documentation/storekit/transaction/environmentstringrepresentation)

# environmentStringRepresentation

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ (deprecated in 16.0) · iPadOS 15.0+ (deprecated in 16.0) · Mac Catalyst 15.0+ (deprecated in 16.0) · macOS 12.0+ (deprecated in 13.0) · tvOS 15.0+ (deprecated in 16.0) · watchOS 8.0+ (deprecated in 9.0)

A string representation of the server environment.

> Use [environment](environment.md) instead.

## Declaration

```swift
@backDeployed(before: iOS 16.0, macOS 13.0, tvOS 16.0, watchOS 9.0, macCatalyst 16.0)
var environmentStringRepresentation: String { get }
```

## See Also

### Deprecated

- [currencyCode](currencycode.md): Deprecated. The three-letter ISO 4217 currency code for the price of the product.
- [offerID](offerid.md): Deprecated. A string that identifies an offer applied to the current subscription.
- [offerPaymentModeStringRepresentation](offerpaymentmodestringrepresentation.md): Deprecated. The string representation of the payment mode for a subscription offer.
- [offerType](offertype-swift.property.md): Deprecated. The subscription offer type for the current subscription period.
- [reasonStringRepresentation](reasonstringrepresentation.md): Deprecated. The string representation of the transaction reason.
- [storefrontCountryCode](storefrontcountrycode.md): Deprecated. The three-letter code that represents the country or region associated with the App Store storefront of the purchase.
