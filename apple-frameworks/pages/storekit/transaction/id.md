> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/id](https://developer.apple.com/documentation/storekit/transaction/id)

# id

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The unique identifier for the transaction.

## Declaration

```swift
let id: UInt64
```

<a id="Discussion"></a>

## Discussion

Every transaction such as an in-app purchase, restore, or subscription renewal has a unique transaction identifier.

## See Also

### Identifying a transaction

- [webOrderLineItemID](weborderlineitemid.md): A unique ID that identifies subscription purchase events across devices, including subscription renewals.
