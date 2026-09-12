> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckmodifysubscriptionsoperation/modifysubscriptionscompletionblock-3v0cp](https://developer.apple.com/documentation/cloudkit/ckmodifysubscriptionsoperation/modifysubscriptionscompletionblock-3v0cp)

# modifySubscriptionsCompletionBlock

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 6.0+

The block to execute after the operation modifies the subscriptions.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^modifySubscriptionsCompletionBlock)(NSArray<CKSubscription *> *savedSubscriptions, NSArray<NSString *> *deletedSubscriptionIDs, NSError *operationError);
```

<a id="discussion"></a>

## Discussion

The block returns no value and takes the following parameters:

- **`savedSubscriptions`**: The subscriptions to save.
- **`deletedSubscriptionIDs`**: The IDs of the subscriptions to delete.
- **`operationError`**: An error that contains information about a problem, or `nil` if CloudKit successfully modifies the subscriptions.

The operation executes this block only once, and it’s your only opportunity to process the results. The block executes on a background queue, so any tasks that require access to the main queue must dispatch accordingly.

The block reports an error of type [CKErrorPartialFailure](../ckerror/code/partialfailure.md) when it can’t modify some of the subscriptions. The [userInfo](../../foundation/nserror/userinfo.md) dictionary of the error contains a [CKPartialErrorsByItemIDKey](../ckpartialerrorsbyitemidkey.md) key that has a dictionary as its value. The keys of the dictionary are the IDs of the subscriptions that CloudKit can’t modify, and the corresponding values are errors that contain information about the failures.

Set this property’s value before you execute the operation or submit it to a queue.
