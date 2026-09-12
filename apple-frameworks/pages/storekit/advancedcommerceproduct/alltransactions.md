> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/advancedcommerceproduct/alltransactions](https://developer.apple.com/documentation/storekit/advancedcommerceproduct/alltransactions)

# allTransactions

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

All transactions associated with the generic product ID.

## Declaration

```swift
var allTransactions: Transaction.Transactions { get }
```

## See Also

### Getting transactions and entitlements

- [currentEntitlements](currententitlements.md): The transactions that entitle the customer to Advanced Commerce Items purchased using the generic product ID.
- [latestTransaction](latesttransaction.md): The most recent transaction associated with the generic product ID, if it exists.
