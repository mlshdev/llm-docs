> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckmodifysubscriptionsoperation/initwithsubscriptionstosave:subscriptionidstodelete:](https://developer.apple.com/documentation/cloudkit/ckmodifysubscriptionsoperation/initwithsubscriptionstosave:subscriptionidstodelete:)

# initWithSubscriptionsToSave:subscriptionIDsToDelete:

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 6.0+

Creates an operation for saving and deleting the specified subscriptions.

## Declaration

```objectivec
- (instancetype) initWithSubscriptionsToSave:(NSArray<CKSubscription *> *) subscriptionsToSave subscriptionIDsToDelete:(NSArray<NSString *> *) subscriptionIDsToDelete;
```

## Parameters

- `subscriptionsToSave`: The subscriptions to save or update. You can specify `nil` for this parameter.
- `subscriptionIDsToDelete`: The IDs of the subscriptions to delete. You can specify `nil` for this parameter.

<a id="discussion"></a>

## Discussion

The subscriptions that you want to save or delete must reside in the same container. CloudKit creates a subscription if you save one that doesn’t already exist. CloudKit returns an error if you try to delete a subscription that doesn’t exist.

## See Also

### Creating a Modify Subscriptions Operation

- [init](init%28%29.md): Creates an empty modify subscriptions operation.
