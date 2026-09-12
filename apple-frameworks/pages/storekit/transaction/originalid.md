> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/originalid](https://developer.apple.com/documentation/storekit/transaction/originalid)

# originalID

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The original transaction identifier of a purchase.

## Declaration

```swift
let originalID: UInt64
```

<a id="Discussion"></a>

## Discussion

The original transaction identifier, [originalID](originalid.md), is identical to [id](id.md) except when the user restores a purchase or renews a transaction. You can use this value to:

- Identify one or more renewals for the same subscription.
- Differentiate a purchase transaction from a restore or a renewal transaction. For restore and renewal transactions, the original transaction identifier, [originalID](originalid.md), and transaction identifier, [id](id.md), differ.
- Match a transaction in the app with a transaction you receive on your server in an [App Store Server Notifications](../../appstoreservernotifications.md) event.

## See Also

### Getting the original transaction identifier

- [originalPurchaseDate](originalpurchasedate.md): The date of purchase for the original transaction.
