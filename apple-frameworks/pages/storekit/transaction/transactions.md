> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/transactions](https://developer.apple.com/documentation/storekit/transaction/transactions)

# Transaction.Transactions

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An asynchronous sequence of transactions.

## Declaration

```swift
struct Transactions
```

<a id="overview"></a>

## Overview

You don’t create a [Transaction.Transactions](transactions.md) sequence directly. Use methods such as [all](all.md), [updates](updates.md), or [currentEntitlements](currententitlements.md) to get transactions.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Monitoring transaction-related changes

- [updates](updates.md): The asynchronous sequence that emits a transaction when the system creates or updates transactions that occur outside the app or on other devices.
