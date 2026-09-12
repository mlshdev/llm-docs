> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckmodifysubscriptionsoperation/subscriptionidstodelete-3534e](https://developer.apple.com/documentation/cloudkit/ckmodifysubscriptionsoperation/subscriptionidstodelete-3534e)

# subscriptionIDsToDelete

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS · watchOS 6.0+ · Swift 4.2+

The IDs of the subscriptions that you want to delete.

## Declaration

```swift
var subscriptionIDsToDelete: [CKSubscription.ID]? { get set }
```

<a id="discussion"></a>

## Discussion

This property contains the IDs of the subscriptions that you want to delete. Its initial value is the array that you pass to the [init(subscriptionsToSave:subscriptionIDsToDelete:)](init%28subscriptionstosave_subscriptionidstodelete_%29.md) method. Modify this property as necessary before you execute the operation or submit it to a queue.

## See Also

### Configuring the Modify Subscriptions Operation

- [subscriptionsToSave](subscriptionstosave.md): The subscriptions to save to the database.
