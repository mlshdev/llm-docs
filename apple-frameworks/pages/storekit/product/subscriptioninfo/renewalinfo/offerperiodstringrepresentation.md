> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptioninfo/renewalinfo/offerperiodstringrepresentation](https://developer.apple.com/documentation/storekit/product/subscriptioninfo/renewalinfo/offerperiodstringrepresentation)

# offerPeriodStringRepresentation

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ (deprecated in 18.4) · iPadOS 15.0+ (deprecated in 18.4) · Mac Catalyst 15.0+ (deprecated in 18.4) · macOS 12.0+ (deprecated in 15.4) · tvOS 15.0+ (deprecated in 18.4) · visionOS 1.0+ (deprecated in 2.4) · watchOS 8.0+ (deprecated in 11.4)

The string representation of the subscription offer period applied to the next billing period.

> Use the [offer](offer.md) property instead.

## Declaration

```swift
@backDeployed(before: iOS 18.4, macOS 15.4, tvOS 18.4, watchOS 11.4, visionOS 2.4)
var offerPeriodStringRepresentation: String? { get }
```

<a id="Discussion"></a>

## Discussion

This value is present only for subscriptions that include an offer.

> **Important**

>  In rare cases, the property might return a sentinel `nil` value. One possible reason is using StoreKit Testing in Xcode; try testing on a device with a newer OS. Another reason could be a critical server error.

## See Also

### Deprecated

- [environmentStringRepresentation](environmentstringrepresentation.md): Deprecated. The string representation of the server environment that signs the renewal information for an auto-renewable subscription.
- [offerID](offerid.md): Deprecated. A string that identifies an offer that applies to the next subscription period.
- [offerType](offertype.md): Deprecated. The subscription offer type for the next subscription period.
- [currencyCode](currencycode.md): Deprecated. The three-letter ISO 4217 currency code for the price of the product.
- [offerPaymentModeStringRepresentation](offerpaymentmodestringrepresentation.md): Deprecated.
