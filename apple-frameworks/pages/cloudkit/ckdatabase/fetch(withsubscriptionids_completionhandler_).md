> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/fetch(withsubscriptionids:completionhandler:)](https://developer.apple.com/documentation/cloudkit/ckdatabase/fetch(withsubscriptionids:completionhandler:))

# fetch(withSubscriptionIDs:completionHandler:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Fetches the specified subscriptions and delivers them to a completion handler.

## Declaration

```swift
@preconcurrency func fetch(withSubscriptionIDs subscriptionIDs: [CKSubscription.ID], completionHandler: @escaping @Sendable (Result<[CKSubscription.ID : Result<CKSubscription, any Error>], any Error>) -> Void)
```

## Parameters

- `subscriptionIDs`: The identifiers of the subscriptions to fetch.
- `completionHandler`: The closure to execute with the fetch results.

<a id="discussion"></a>

## Discussion

The completion handler takes the following parameters:

- A [Result](https://developer.apple.com/documentation/swift/result) that contains either a dictionary of fetched subscriptions, or an error if the request fails, such as when the network is unavailable or the device doesn’t have an active iCloud account. When present, the dictionary uses the identifiers you specify in `subscriptionIDs` as its keys. The value of each key is a [Result](https://developer.apple.com/documentation/swift/result) that contains either the corresponding fetched subscription, or an error that describes why CloudKit can’t provide that subscription.

For information on a more configurable way to fetch specific subscriptions, see [CKFetchSubscriptionsOperation](../ckfetchsubscriptionsoperation.md).

## See Also

### Fetching Subscriptions

- [subscriptions(for:)](subscriptions%28for_%29.md): Fetches the specified subscriptions and returns them to an awaiting caller.
- [subscription(for:)](subscription%28for_%29.md): Fetches a specific subscription and returns it to an awaiting caller.
- [fetch(withSubscriptionID:completionHandler:)](fetch%28withsubscriptionid_completionhandler_%29.md): Fetches a specific subscription and delivers it to a completion handler.
- [fetchAllSubscriptions(completionHandler:)](fetchallsubscriptions%28completionhandler_%29.md): Fetches all subscriptions from the current database.
