> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/offerpaymentmodestringrepresentation](https://developer.apple.com/documentation/storekit/transaction/offerpaymentmodestringrepresentation)

# offerPaymentModeStringRepresentation

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ (deprecated in 17.2) · iPadOS 15.0+ (deprecated in 17.2) · Mac Catalyst 15.0+ (deprecated in 17.2) · macOS 12.0+ (deprecated in 14.2) · tvOS 15.0+ (deprecated in 17.2) · visionOS 1.0+ (deprecated in 1.1) · watchOS 8.0+ (deprecated in 10.2)

The string representation of the payment mode for a subscription offer.

> Use `paymentMode` instead.

## Declaration

```swift
@backDeployed(before: iOS 17.2, macOS 14.2, tvOS 17.2, watchOS 10.2)
var offerPaymentModeStringRepresentation: String? { get }
```

## See Also

### Deprecated

- [currencyCode](currencycode.md): Deprecated. The three-letter ISO 4217 currency code for the price of the product.
- [environmentStringRepresentation](environmentstringrepresentation.md): Deprecated. A string representation of the server environment.
- [offerID](offerid.md): Deprecated. A string that identifies an offer applied to the current subscription.
- [offerType](offertype-swift.property.md): Deprecated. The subscription offer type for the current subscription period.
- [reasonStringRepresentation](reasonstringrepresentation.md): Deprecated. The string representation of the transaction reason.
- [storefrontCountryCode](storefrontcountrycode.md): Deprecated. The three-letter code that represents the country or region associated with the App Store storefront of the purchase.
