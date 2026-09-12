> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/subscription(for:)](https://developer.apple.com/documentation/cloudkit/ckdatabase/subscription(for:))

# subscription(for:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Fetches a specific subscription and returns it to an awaiting caller.

## Declaration

```swift
func subscription(for subscriptionID: CKSubscription.ID) async throws -> CKSubscription
```

## Parameters

- `subscriptionID`: The identifier of the subscription to fetch.

<a id="return-value"></a>

## Return Value

The fetched subscription.

<a id="discussion"></a>

## Discussion

This method throws an error if the request fails, such as when the network is unavailable or the device doesn’t have an active iCloud account.

## See Also

### Fetching Subscriptions

- [subscriptions(for:)](subscriptions%28for_%29.md): Fetches the specified subscriptions and returns them to an awaiting caller.
- [fetch(withSubscriptionIDs:completionHandler:)](fetch%28withsubscriptionids_completionhandler_%29.md): Fetches the specified subscriptions and delivers them to a completion handler.
- [fetch(withSubscriptionID:completionHandler:)](fetch%28withsubscriptionid_completionhandler_%29.md): Fetches a specific subscription and delivers it to a completion handler.
- [fetchAllSubscriptions(completionHandler:)](fetchallsubscriptions%28completionhandler_%29.md): Fetches all subscriptions from the current database.
