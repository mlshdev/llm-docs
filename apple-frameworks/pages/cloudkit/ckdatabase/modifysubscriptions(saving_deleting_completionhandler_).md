> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/modifysubscriptions(saving:deleting:completionhandler:)](https://developer.apple.com/documentation/cloudkit/ckdatabase/modifysubscriptions(saving:deleting:completionhandler:))

# modifySubscriptions(saving:deleting:completionHandler:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Modifies the specified subscriptions and delivers the results to a completion handler.

## Declaration

```swift
@preconcurrency func modifySubscriptions(saving subscriptionsToSave: [CKSubscription], deleting subscriptionIDsToDelete: [CKSubscription.ID], completionHandler: @escaping @Sendable (Result<(saveResults: [CKSubscription.ID : Result<CKSubscription, any Error>], deleteResults: [CKSubscription.ID : Result<Void, any Error>]), any Error>) -> Void)
```

## Parameters

- `subscriptionsToSave`: The subscriptions to save.
- `subscriptionIDsToDelete`: The identifiers of the subscriptions to permanently delete.
- `completionHandler`: The closure to execute after CloudKit processes the changes.

<a id="discussion"></a>

## Discussion

The completion handler takes a single [Result](https://developer.apple.com/documentation/swift/result) parameter that contains either a tuple, or an error if the request fails. For example, when the network is unavailable or the device doesn’t have an active iCloud account.

When present, the tuple contains the following named elements:

- **`saveResults`**: A dictionary of saved subscriptions. The dictionary uses the identifiers of the subscriptions you specify in `subscriptionsToSave` as its keys. The value of each key is a [Result](https://developer.apple.com/documentation/swift/result) that contains either the corresponding modified subscription (as it appears on the server), or an error that describes why CloudKit can’t modify that subscription.
- **`deleteResults`**: A dictionary of deleted subscriptions. The dictionary uses the identifiers you specify in `subscriptionIDsToDelete` as its keys. The value of each key is a [Result](https://developer.apple.com/documentation/swift/result) that contains either [Void](https://developer.apple.com/documentation/swift/void) to indicate a successful deletion, or an error that describes why CloudKit can’t delete that subscription.

For information on a more configurable way to modify subscriptions, see [CKModifySubscriptionsOperation](../ckmodifysubscriptionsoperation.md).

## See Also

### Modifying Subscriptions

- [modifySubscriptions(saving:deleting:)](modifysubscriptions%28saving_deleting_%29.md): Modifies the specified subscriptions and returns the results to an awaiting caller.
- [save(\_:completionHandler:)](save%28__completionhandler_%29-9pona.md): Saves a specific subscription.
- [deleteSubscription(withID:)](deletesubscription%28withid_%29.md): Deletes a specific subscription and returns the deleted subscription’s identifier to an awaiting caller.
- [delete(withSubscriptionID:completionHandler:)](delete%28withsubscriptionid_completionhandler_%29.md): Deletes a specific subscription and delivers the deleted subscription’s identifier to a completion handler.
