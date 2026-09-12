> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptioninfo/renewalinfo/offerpaymentmodestringrepresentation](https://developer.apple.com/documentation/storekit/product/subscriptioninfo/renewalinfo/offerpaymentmodestringrepresentation)

# offerPaymentModeStringRepresentation

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ (deprecated in 18.0) · iPadOS 15.0+ (deprecated in 18.0) · Mac Catalyst 15.0+ (deprecated in 18.0) · macOS 12.0+ (deprecated in 15.0) · tvOS 15.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 8.0+ (deprecated in 11.0)

> Use the offer property instead.

## Declaration

```swift
@backDeployed(before: iOS 18.0, macOS 15.0, tvOS 18.0, watchOS 11.0, visionOS 2.0)
var offerPaymentModeStringRepresentation: String? { get }
```

## See Also

### Deprecated

- [environmentStringRepresentation](environmentstringrepresentation.md): Deprecated. The string representation of the server environment that signs the renewal information for an auto-renewable subscription.
- [offerID](offerid.md): Deprecated. A string that identifies an offer that applies to the next subscription period.
- [offerType](offertype.md): Deprecated. The subscription offer type for the next subscription period.
- [currencyCode](currencycode.md): Deprecated. The three-letter ISO 4217 currency code for the price of the product.
- [offerPeriodStringRepresentation](offerperiodstringrepresentation.md): Deprecated. The string representation of the subscription offer period applied to the next billing period.
