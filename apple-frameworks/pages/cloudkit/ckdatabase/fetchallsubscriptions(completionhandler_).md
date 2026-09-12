> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/fetchallsubscriptions(completionhandler:)](https://developer.apple.com/documentation/cloudkit/ckdatabase/fetchallsubscriptions(completionhandler:))

# fetchAllSubscriptions(completionHandler:) (Swift)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Fetches all subscriptions from the current database.

## Declaration

```swift
func fetchAllSubscriptions(completionHandler: @escaping @Sendable ([CKSubscription]?, (any Error)?) -> Void)
```

## Parameters

- `completionHandler`: The closure to execute with the fetch results.

<a id="discussion"></a>

## Discussion

The completion handler takes the following parameters:

- The database’s subscriptions, or `nil` if CloudKit can’t provide the subscriptions.
- An error if a problem occurs, or `nil` if the fetch completes successfully.

For information on a more configurable way to fetch all subscriptions from a specific database, see [fetchAllSubscriptionsOperation()](../ckfetchsubscriptionsoperation/fetchallsubscriptionsoperation%28%29.md).

## See Also

### Fetching Subscriptions

- [subscriptions(for:)](subscriptions%28for_%29.md): Fetches the specified subscriptions and returns them to an awaiting caller.
- [fetch(withSubscriptionIDs:completionHandler:)](fetch%28withsubscriptionids_completionhandler_%29.md): Fetches the specified subscriptions and delivers them to a completion handler.
- [subscription(for:)](subscription%28for_%29.md): Fetches a specific subscription and returns it to an awaiting caller.
- [fetch(withSubscriptionID:completionHandler:)](fetch%28withsubscriptionid_completionhandler_%29.md): Fetches a specific subscription and delivers it to a completion handler.

# fetchAllSubscriptionsWithCompletionHandler: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Fetches all subscriptions from the current database.

## Declaration

```objectivec
- (void) fetchAllSubscriptionsWithCompletionHandler:(void (^)(NSArray<CKSubscription *> *subscriptions, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: The closure to execute with the fetch results.

<a id="discussion"></a>

## Discussion

The completion handler takes the following parameters:

- The database’s subscriptions, or `nil` if CloudKit can’t provide the subscriptions.
- An error if a problem occurs, or `nil` if the fetch completes successfully.

For information on a more configurable way to fetch all subscriptions from a specific database, see [fetchAllSubscriptionsOperation](../ckfetchsubscriptionsoperation/fetchallsubscriptionsoperation%28%29.md).

## See Also

### Fetching Subscriptions

- [fetchSubscriptionWithID:completionHandler:](fetchsubscriptionwithid_completionhandler_.md): Fetches a specific subscription and delivers it to a completion handler.
