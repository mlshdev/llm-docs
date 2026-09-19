> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/transaction/previousoriginaltransactionid

# previousOriginalTransactionID

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The original transaction ID of the subscription this one replaced when a customer switched between a standalone auto-renewable subscription and a subscription bundle (in either direction).

## Declaration

```swift
@backDeployed(before: iOS 27.0, macOS 27.0, tvOS 27.0, watchOS 27.0, visionOS 27.0)
var previousOriginalTransactionID: UInt64? { get }
```

<a id="discussion"></a>

## Discussion

For a bundle transaction, this is the standalone subscription’s original transaction ID, while for a standalone transaction, this is the bundle’s original transaction ID. This field is `nil` if no such switch occurred.
