> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/revocationtype-swift.property](https://developer.apple.com/documentation/storekit/transaction/revocationtype-swift.property)

# revocationType

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 26.4+ · visionOS 26.4+ · watchOS 26.4+

The type of refund or revocation that applies to the transaction.

## Declaration

```swift
let revocationType: Transaction.RevocationType?
```

<a id="discussion"></a>

## Discussion

This property indicates whether the transaction has a full refund, a prorated refund, or is revoked from Family Sharing. This property is `nil` for transactions that are not revoked.

> **Note**

> This property is not present for Advanced Commerce transactions, which use [refunds](advancedcommerceinfo-swift.struct/item/refunds.md) instead.
