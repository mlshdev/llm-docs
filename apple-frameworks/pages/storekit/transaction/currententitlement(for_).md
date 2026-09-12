> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/currententitlement(for:)](https://developer.apple.com/documentation/storekit/transaction/currententitlement(for:))

# currentEntitlement(for:)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ (deprecated in 18.4) · iPadOS 15.0+ (deprecated in 18.4) · Mac Catalyst 15.0+ (deprecated in 18.4) · macOS 12.0+ (deprecated in 15.4) · tvOS 15.0+ (deprecated in 18.4) · visionOS 1.0+ (deprecated in 2.4) · watchOS 8.0+ (deprecated in 11.4)

Gets the latest transactions that entitle the customer to a specified product.

> Use [currentEntitlements](currententitlements.md) instead.

## Declaration

```swift
static func currentEntitlement(for productID: String) async -> VerificationResult<Transaction>?
```

## Parameters

- `productID`: In-App Purchase product identifier.

<a id="return-value"></a>

## Return Value

A [VerificationResult](../verificationresult.md) or `nil` if the customer has no current In-App Purchases.

## See Also

### Deprecated

- [currentEntitlements(for:)](currententitlements%28for_%29.md): Gets the transactions that entitle the user to items purchased under a product ID.
- [offerPeriodStringRepresentation](offerperiodstringrepresentation.md): Deprecated. The string representation of the offer period applied to the subscription offer for this transaction.
