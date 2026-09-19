> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/financekit/financestore/containsorder(matching:updateddate:)

# containsOrder(matching:updatedDate:)

**Framework:** FinanceKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Checks whether the finance store contains an order.

## Declaration

```swift
func containsOrder(matching fqoid: FullyQualifiedOrderIdentifier, updatedDate: Date? = nil) async throws -> FinanceStore.ContainsOrderResult
```

<a id="Discussion"></a>

## Discussion

This returns `.notFound` for any orders that the process isn’t entitled to access.
