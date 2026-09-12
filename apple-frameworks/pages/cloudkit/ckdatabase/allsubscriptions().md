> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/allsubscriptions()](https://developer.apple.com/documentation/cloudkit/ckdatabase/allsubscriptions())

# allSubscriptions()

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Fetches all subscriptions from the current database.

## Declaration

```swift
func allSubscriptions() async throws -> [CKSubscription]
```

<a id="return-value"></a>

## Return Value

The database’s subscriptions.

<a id="discussion"></a>

## Discussion

This method throws an error if the request fails, such as when the network is unavailable or the device doesn’t have an active iCloud account.

For information on a more configurable way to fetch all subscriptions from a specific database, see [fetchAllSubscriptionsOperation()](../ckfetchsubscriptionsoperation/fetchallsubscriptionsoperation%28%29.md).
