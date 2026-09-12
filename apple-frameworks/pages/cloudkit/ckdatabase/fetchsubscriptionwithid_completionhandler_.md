> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/fetchsubscriptionwithid:completionhandler:](https://developer.apple.com/documentation/cloudkit/ckdatabase/fetchsubscriptionwithid:completionhandler:)

# fetchSubscriptionWithID:completionHandler:

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Fetches a specific subscription and delivers it to a completion handler.

## Declaration

```objectivec
- (void) fetchSubscriptionWithID:(CKSubscriptionID) subscriptionID completionHandler:(void (^)(CKSubscription *subscription, NSError *error)) completionHandler;
```

## Parameters

- `subscriptionID`: The identifier of the subscription to fetch.
- `completionHandler`: The block to execute with the fetch results.

<a id="discussion"></a>

## Discussion

The completion handler takes the following parameters:

- **`subscription`**: The requested subscription, or `nil` if CloudKit can’t provide that subscription.
- **`error`**: An error if a problem occurs, or `nil` if the fetch completes successfully.

For information on a more configurable way to fetch specific subscriptions, see [CKFetchSubscriptionsOperation](../ckfetchsubscriptionsoperation.md).

## See Also

### Fetching Subscriptions

- [fetchAllSubscriptionsWithCompletionHandler:](fetchallsubscriptions%28completionhandler_%29.md): Fetches all subscriptions from the current database.
