> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/revocationreason-swift.struct/upgradedtobundle](https://developer.apple.com/documentation/storekit/transaction/revocationreason-swift.struct/upgradedtobundle)

# upgradedToBundle

**Framework:** StoreKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The transaction was revoked because the customer switched to a subscription bundle.

## Declaration

```swift
@backDeployed(before: iOS 27.0, macOS 27.0, tvOS 27.0, watchOS 27.0, visionOS 27.0)
static var upgradedToBundle: Transaction.RevocationReason { get }
```
