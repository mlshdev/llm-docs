> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/subscriptions(for:)](https://developer.apple.com/documentation/cloudkit/ckdatabase/subscriptions(for:))

# subscriptions(for:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Fetches the specified subscriptions and returns them to an awaiting caller.

## Declaration

```swift
func subscriptions(for ids: [CKSubscription.ID]) async throws -> [CKSubscription.ID : Result<CKSubscription, any Error>]
```

## Parameters

- `ids`: The identifiers of the subscriptions to fetch.

<a id="return-value"></a>

## Return Value

A dictionary that contains the fetched subscriptions. The dictionary uses the identifiers you specify in `ids` as its keys. The value of each key is a [Result](https://developer.apple.com/documentation/swift/result) that contains either the corresponding fetched subscription, or an error that describes why CloudKit can’t provide that subscription.

<a id="discussion"></a>

## Discussion

This method throws an error if the request fails, such as when the network is unavailable or the device doesn’t have an active iCloud account; otherwise, the returned dictionary includes any individual subscription errors.

For information on a more configurable way to fetch specific subscriptions, see [CKFetchSubscriptionsOperation](../ckfetchsubscriptionsoperation.md).

## See Also

### Fetching Subscriptions

- [fetch(withSubscriptionIDs:completionHandler:)](fetch%28withsubscriptionids_completionhandler_%29.md): Fetches the specified subscriptions and delivers them to a completion handler.
- [subscription(for:)](subscription%28for_%29.md): Fetches a specific subscription and returns it to an awaiting caller.
- [fetch(withSubscriptionID:completionHandler:)](fetch%28withsubscriptionid_completionhandler_%29.md): Fetches a specific subscription and delivers it to a completion handler.
- [fetchAllSubscriptions(completionHandler:)](fetchallsubscriptions%28completionhandler_%29.md): Fetches all subscriptions from the current database.
