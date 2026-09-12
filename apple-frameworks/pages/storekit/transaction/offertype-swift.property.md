> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/offertype-swift.property](https://developer.apple.com/documentation/storekit/transaction/offertype-swift.property)

# offerType

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ (deprecated in 17.2) · iPadOS 15.0+ (deprecated in 17.2) · Mac Catalyst 15.0+ (deprecated in 17.2) · macOS 12.0+ (deprecated in 14.2) · tvOS 15.0+ (deprecated in 17.2) · visionOS 1.0+ (deprecated in 1.1) · watchOS 8.0+ (deprecated in 10.2)

The subscription offer type for the current subscription period.

> Use [offer](offer-swift.property.md) instead.

## Declaration

```swift
var offerType: Transaction.OfferType? { get }
```

## Mentioned In

- [Supporting subscription offer codes in your app](../supporting-subscription-offer-codes-in-your-app.md)
- [Supporting offer codes in your app](../supporting-offer-codes-in-your-app.md)

<a id="Discussion"></a>

## Discussion

If this value is `nil`, there’s no offer applied.

## See Also

### Deprecated

- [currencyCode](currencycode.md): Deprecated. The three-letter ISO 4217 currency code for the price of the product.
- [environmentStringRepresentation](environmentstringrepresentation.md): Deprecated. A string representation of the server environment.
- [offerID](offerid.md): Deprecated. A string that identifies an offer applied to the current subscription.
- [offerPaymentModeStringRepresentation](offerpaymentmodestringrepresentation.md): Deprecated. The string representation of the payment mode for a subscription offer.
- [reasonStringRepresentation](reasonstringrepresentation.md): Deprecated. The string representation of the transaction reason.
- [storefrontCountryCode](storefrontcountrycode.md): Deprecated. The three-letter code that represents the country or region associated with the App Store storefront of the purchase.
