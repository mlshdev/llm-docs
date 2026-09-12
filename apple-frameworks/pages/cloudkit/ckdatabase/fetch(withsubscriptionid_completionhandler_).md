> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/fetch(withsubscriptionid:completionhandler:)](https://developer.apple.com/documentation/cloudkit/ckdatabase/fetch(withsubscriptionid:completionhandler:))

# fetch(withSubscriptionID:completionHandler:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS · watchOS 6.0+ · Swift 4.2+

Fetches a specific subscription and delivers it to a completion handler.

## Declaration

```swift
@preconcurrency func fetch(withSubscriptionID subscriptionID: CKSubscription.ID, completionHandler: @escaping @Sendable (CKSubscription?, (any Error)?) -> Void)
```

## Parameters

- `subscriptionID`: The identifier of the subscription to fetch.
- `completionHandler`: The closure to execute with the fetch results.

<a id="discussion"></a>

## Discussion

The completion handler takes the following parameters:

- The requested subscription, or `nil` if CloudKit can’t provide that subscription.
- An error if a problem occurs, or `nil` if the fetch completes successfully.

For information on a more convenient way to fetch specific subscriptions, see [subscriptions(for:)](subscriptions%28for_%29.md).

## See Also

### Fetching Subscriptions

- [subscriptions(for:)](subscriptions%28for_%29.md): Fetches the specified subscriptions and returns them to an awaiting caller.
- [fetch(withSubscriptionIDs:completionHandler:)](fetch%28withsubscriptionids_completionhandler_%29.md): Fetches the specified subscriptions and delivers them to a completion handler.
- [subscription(for:)](subscription%28for_%29.md): Fetches a specific subscription and returns it to an awaiting caller.
- [fetchAllSubscriptions(completionHandler:)](fetchallsubscriptions%28completionhandler_%29.md): Fetches all subscriptions from the current database.
