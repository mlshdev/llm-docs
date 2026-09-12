> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/offerid](https://developer.apple.com/documentation/storekit/transaction/offerid)

# offerID

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ (deprecated in 17.2) · iPadOS 15.0+ (deprecated in 17.2) · Mac Catalyst 15.0+ (deprecated in 17.2) · macOS 12.0+ (deprecated in 14.2) · tvOS 15.0+ (deprecated in 17.2) · visionOS 1.0+ (deprecated in 1.1) · watchOS 8.0+ (deprecated in 10.2)

A string that identifies an offer applied to the current subscription.

> Use [offer](offer-swift.property.md) instead.

## Declaration

```swift
var offerID: String? { get }
```

## Mentioned In

- [Supporting subscription offer codes in your app](../supporting-subscription-offer-codes-in-your-app.md)

<a id="Discussion"></a>

## Discussion

This value is `nil` if there isn’t an offer, or if the offer type is [introductory](offertype-swift.struct/introductory.md).

If the offer type is [promotional](offertype-swift.struct/promotional.md), this value contains the promotional offer identifier you set up in App Store Connect. For more information about promotional offers, see [Set up promotional offers for auto-renewable subscriptions](https://help.apple.com/app-store-connect/#/dev16dfca448).

If the offer type is [code](offertype-swift.struct/code.md), this value contains the reference name of the offer code you set up in App Store Connect. For more information about offer codes, see [Set up offer codes](https://help.apple.com/app-store-connect/#/dev6a098e4b1).

## See Also

### Deprecated

- [currencyCode](currencycode.md): Deprecated. The three-letter ISO 4217 currency code for the price of the product.
- [environmentStringRepresentation](environmentstringrepresentation.md): Deprecated. A string representation of the server environment.
- [offerPaymentModeStringRepresentation](offerpaymentmodestringrepresentation.md): Deprecated. The string representation of the payment mode for a subscription offer.
- [offerType](offertype-swift.property.md): Deprecated. The subscription offer type for the current subscription period.
- [reasonStringRepresentation](reasonstringrepresentation.md): Deprecated. The string representation of the transaction reason.
- [storefrontCountryCode](storefrontcountrycode.md): Deprecated. The three-letter code that represents the country or region associated with the App Store storefront of the purchase.
