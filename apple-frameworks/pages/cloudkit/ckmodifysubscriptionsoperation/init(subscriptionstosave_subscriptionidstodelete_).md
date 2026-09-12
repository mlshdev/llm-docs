> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckmodifysubscriptionsoperation/init(subscriptionstosave:subscriptionidstodelete:)](https://developer.apple.com/documentation/cloudkit/ckmodifysubscriptionsoperation/init(subscriptionstosave:subscriptionidstodelete:))

# init(subscriptionsToSave:subscriptionIDsToDelete:)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS · watchOS 6.0+ · Swift 4.2+

Creates an operation for saving and deleting the specified subscriptions.

## Declaration

```swift
convenience init(subscriptionsToSave: [CKSubscription]? = nil, subscriptionIDsToDelete: [CKSubscription.ID]? = nil)
```

## Parameters

- `subscriptionsToSave`: The subscriptions to save or update. You can specify `nil` for this parameter.
- `subscriptionIDsToDelete`: The IDs of the subscriptions to delete. You can specify `nil` for this parameter.

<a id="discussion"></a>

## Discussion

The subscriptions that you want to save or delete must reside in the same container. CloudKit creates a subscription if you save one that doesn’t already exist. CloudKit returns an error if you try to delete a subscription that doesn’t exist.

## See Also

### Creating a Modify Subscriptions Operation

- [init()](init%28%29.md): Creates an empty modify subscriptions operation.
