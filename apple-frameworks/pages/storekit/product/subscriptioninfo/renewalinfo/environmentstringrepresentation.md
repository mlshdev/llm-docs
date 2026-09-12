> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptioninfo/renewalinfo/environmentstringrepresentation](https://developer.apple.com/documentation/storekit/product/subscriptioninfo/renewalinfo/environmentstringrepresentation)

# environmentStringRepresentation

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ (deprecated in 16.0) · iPadOS 15.0+ (deprecated in 16.0) · Mac Catalyst 15.0+ (deprecated in 16.0) · macOS 12.0+ (deprecated in 13.0) · tvOS 15.0+ (deprecated in 16.0) · watchOS 8.0+ (deprecated in 9.0)

The string representation of the server environment that signs the renewal information for an auto-renewable subscription.

> Use the environment property instead.

## Declaration

```swift
@backDeployed(before: iOS 16.0, macOS 13.0, tvOS 16.0, watchOS 9.0, macCatalyst 16.0)
var environmentStringRepresentation: String { get }
```

## See Also

### Deprecated

- [offerID](offerid.md): Deprecated. A string that identifies an offer that applies to the next subscription period.
- [offerType](offertype.md): Deprecated. The subscription offer type for the next subscription period.
- [currencyCode](currencycode.md): Deprecated. The three-letter ISO 4217 currency code for the price of the product.
- [offerPaymentModeStringRepresentation](offerpaymentmodestringrepresentation.md): Deprecated.
- [offerPeriodStringRepresentation](offerperiodstringrepresentation.md): Deprecated. The string representation of the subscription offer period applied to the next billing period.
