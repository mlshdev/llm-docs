> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/deletesubscription(withid:)](https://developer.apple.com/documentation/cloudkit/ckdatabase/deletesubscription(withid:))

# deleteSubscription(withID:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Deletes a specific subscription and returns the deleted subscription’s identifier to an awaiting caller.

## Declaration

```swift
@discardableResult func deleteSubscription(withID subscriptionID: CKSubscription.ID) async throws -> CKSubscription.ID
```

## Parameters

- `subscriptionID`: The identifier of the subscription to delete.

<a id="return-value"></a>

## Return Value

The identifier of the deleted subscription.

<a id="discussion"></a>

## Discussion

This method throws an error if the request fails, such as when the network is unavailable or the device doesn’t have an active iCloud account.

For information on a more convenient way to delete subscriptions, see [modifySubscriptions(saving:deleting:)](modifysubscriptions%28saving_deleting_%29.md).

## See Also

### Modifying Subscriptions

- [modifySubscriptions(saving:deleting:)](modifysubscriptions%28saving_deleting_%29.md): Modifies the specified subscriptions and returns the results to an awaiting caller.
- [modifySubscriptions(saving:deleting:completionHandler:)](modifysubscriptions%28saving_deleting_completionhandler_%29.md): Modifies the specified subscriptions and delivers the results to a completion handler.
- [save(\_:completionHandler:)](save%28__completionhandler_%29-9pona.md): Saves a specific subscription.
- [delete(withSubscriptionID:completionHandler:)](delete%28withsubscriptionid_completionhandler_%29.md): Deletes a specific subscription and delivers the deleted subscription’s identifier to a completion handler.
