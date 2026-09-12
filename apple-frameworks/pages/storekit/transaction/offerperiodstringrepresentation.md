> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/offerperiodstringrepresentation](https://developer.apple.com/documentation/storekit/transaction/offerperiodstringrepresentation)

# offerPeriodStringRepresentation

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ (deprecated in 18.4) · iPadOS 15.0+ (deprecated in 18.4) · Mac Catalyst 15.0+ (deprecated in 18.4) · macOS 12.0+ (deprecated in 15.4) · tvOS 15.0+ (deprecated in 18.4) · visionOS 1.0+ (deprecated in 2.4) · watchOS 8.0+ (deprecated in 11.4)

The string representation of the offer period applied to the subscription offer for this transaction.

> Use the [offer](offer-swift.property.md) property instead.

## Declaration

```swift
@backDeployed(before: iOS 18.4, macOS 15.4, tvOS 18.4, watchOS 11.4, visionOS 2.4)
var offerPeriodStringRepresentation: String? { get }
```

<a id="Discussion"></a>

## Discussion

This value is present only for subscriptions that include an offer.

> **Important**

>  In rare cases, the property might return a sentinel `nil` value. One possible reason is using StoreKit Testing in Xcode; try testing on a device with a newer OS. Another reason might be a critical server error.

## See Also

### Deprecated

- [currentEntitlement(for:)](currententitlement%28for_%29.md): Deprecated. Gets the latest transactions that entitle the customer to a specified product.
- [currentEntitlements(for:)](currententitlements%28for_%29.md): Gets the transactions that entitle the user to items purchased under a product ID.
