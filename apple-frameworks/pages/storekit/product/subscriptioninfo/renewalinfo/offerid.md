> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptioninfo/renewalinfo/offerid](https://developer.apple.com/documentation/storekit/product/subscriptioninfo/renewalinfo/offerid)

# offerID

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ (deprecated in 18.0) · iPadOS 15.0+ (deprecated in 18.0) · Mac Catalyst 15.0+ (deprecated in 18.0) · macOS 12.0+ (deprecated in 15.0) · tvOS 15.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 8.0+ (deprecated in 11.0)

A string that identifies an offer that applies to the next subscription period.

> Use the offer property instead.

## Declaration

```swift
var offerID: String? { get }
```

## Mentioned In

- [Supporting offer codes in your app](../../../supporting-offer-codes-in-your-app.md)
- [Supporting subscription offer codes in your app](../../../supporting-subscription-offer-codes-in-your-app.md)

<a id="Discussion"></a>

## Discussion

This value is `nil` if there isn’t an offer, or if the offer type is [introductory](../../../transaction/offertype-swift.struct/introductory.md).

If the offer type is [promotional](../../../transaction/offertype-swift.struct/promotional.md), this value contains the promotional offer identifier you set up in App Store Connect. For more information about promotional offers, see [Set up promotional offers for auto-renewable subscriptions](https://help.apple.com/app-store-connect/#/dev16dfca448).

If the offer type is [code](../../../transaction/offertype-swift.struct/code.md), this value contains the reference name of the offer code you set up in App Store Connect. For more information about offer codes, see [Set up offer codes](https://help.apple.com/app-store-connect/#/dev6a098e4b1).

## See Also

### Deprecated

- [environmentStringRepresentation](environmentstringrepresentation.md): Deprecated. The string representation of the server environment that signs the renewal information for an auto-renewable subscription.
- [offerType](offertype.md): Deprecated. The subscription offer type for the next subscription period.
- [currencyCode](currencycode.md): Deprecated. The three-letter ISO 4217 currency code for the price of the product.
- [offerPaymentModeStringRepresentation](offerpaymentmodestringrepresentation.md): Deprecated.
- [offerPeriodStringRepresentation](offerperiodstringrepresentation.md): Deprecated. The string representation of the subscription offer period applied to the next billing period.
