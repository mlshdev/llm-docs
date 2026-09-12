> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/delete(withsubscriptionid:completionhandler:)](https://developer.apple.com/documentation/cloudkit/ckdatabase/delete(withsubscriptionid:completionhandler:))

# delete(withSubscriptionID:completionHandler:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS · watchOS 6.0+ · Swift 4.2+

Deletes a specific subscription and delivers the deleted subscription’s identifier to a completion handler.

## Declaration

```swift
@preconcurrency func delete(withSubscriptionID subscriptionID: CKSubscription.ID, completionHandler: @escaping @Sendable (String?, (any Error)?) -> Void)
```

## Parameters

- `subscriptionID`: The identifier of the subscription to delete.
- `completionHandler`: The closure to execute after CloudKit deletes the subscription.

<a id="discussion"></a>

## Discussion

The completion handler takes the following parameters:

- The identifier of the deleted subscription, or `nil` if there’s an error.
- An error if a problem occurs, or `nil` if CloudKit successfully deletes the subscription.

For information on a more convenient way to delete subscriptions, see [modifySubscriptions(saving:deleting:)](modifysubscriptions%28saving_deleting_%29.md).

## See Also

### Modifying Subscriptions

- [modifySubscriptions(saving:deleting:)](modifysubscriptions%28saving_deleting_%29.md): Modifies the specified subscriptions and returns the results to an awaiting caller.
- [modifySubscriptions(saving:deleting:completionHandler:)](modifysubscriptions%28saving_deleting_completionhandler_%29.md): Modifies the specified subscriptions and delivers the results to a completion handler.
- [save(\_:completionHandler:)](save%28__completionhandler_%29-9pona.md): Saves a specific subscription.
- [deleteSubscription(withID:)](deletesubscription%28withid_%29.md): Deletes a specific subscription and returns the deleted subscription’s identifier to an awaiting caller.
