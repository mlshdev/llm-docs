> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/reasonstringrepresentation](https://developer.apple.com/documentation/storekit/transaction/reasonstringrepresentation)

# reasonStringRepresentation

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ (deprecated in 17.0) · iPadOS 15.0+ (deprecated in 17.0) · Mac Catalyst 15.0+ (deprecated in 17.0) · macOS 12.0+ (deprecated in 14.0) · tvOS 15.0+ (deprecated in 17.0) · watchOS 8.0+ (deprecated in 10.0)

The string representation of the transaction reason.

> Use [reason](reason-swift.property.md) instead.

## Declaration

```swift
@backDeployed(before: iOS 17.0, macOS 14.0, tvOS 17.0, watchOS 10.0, macCatalyst 17.0)
var reasonStringRepresentation: String { get }
```

<a id="Discussion"></a>

## Discussion

For more information, see [reason](reason-swift.property.md).

## See Also

### Deprecated

- [currencyCode](currencycode.md): Deprecated. The three-letter ISO 4217 currency code for the price of the product.
- [environmentStringRepresentation](environmentstringrepresentation.md): Deprecated. A string representation of the server environment.
- [offerID](offerid.md): Deprecated. A string that identifies an offer applied to the current subscription.
- [offerPaymentModeStringRepresentation](offerpaymentmodestringrepresentation.md): Deprecated. The string representation of the payment mode for a subscription offer.
- [offerType](offertype-swift.property.md): Deprecated. The subscription offer type for the current subscription period.
- [storefrontCountryCode](storefrontcountrycode.md): Deprecated. The three-letter code that represents the country or region associated with the App Store storefront of the purchase.
