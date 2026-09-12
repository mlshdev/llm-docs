> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/currententitlements(for:)](https://developer.apple.com/documentation/storekit/transaction/currententitlements(for:))

# currentEntitlements(for:)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Gets the transactions that entitle the user to items purchased under a product ID.

## Declaration

```swift
static func currentEntitlements(for productID: String) -> Transaction.Transactions
```

## Parameters

- `productID`: Identifies the product to check entitlements for.

<a id="return-value"></a>

## Return Value

A sequence containing all transactions that entitle the user to the product.

<a id="Discussion"></a>

## Discussion

If a generic SKU is provided, the returned sequence will yield all transactions that entitle the user to Advanced Commerce Items purchased using the generic product’s ID.

If an ID for a regular IAP is provided, the returned sequence will contain no more than one transaction.

## See Also

### Deprecated

- [currentEntitlement(for:)](currententitlement%28for_%29.md): Deprecated. Gets the latest transactions that entitle the customer to a specified product.
- [offerPeriodStringRepresentation](offerperiodstringrepresentation.md): Deprecated. The string representation of the offer period applied to the subscription offer for this transaction.
