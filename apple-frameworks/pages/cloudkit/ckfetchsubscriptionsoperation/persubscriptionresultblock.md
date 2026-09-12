> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchsubscriptionsoperation/persubscriptionresultblock](https://developer.apple.com/documentation/cloudkit/ckfetchsubscriptionsoperation/persubscriptionresultblock)

# perSubscriptionResultBlock

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

The closure to execute when a subscription becomes available.

## Declaration

```swift
var perSubscriptionResultBlock: ((CKSubscription.ID, Result<CKSubscription, any Error>) -> Void)? { get set }
```

<a id="discussion"></a>

## Discussion

This property is a closure that returns no value and has the following parameters:

- The ID of the subscription.
- A [Result](https://developer.apple.com/documentation/swift/result) that contains either a retrieved subscription, or an error that describes why CloudKit can’t retrieve the subscription.

The fetch operation executes this closure once for each subscription ID in the [subscriptionIDs](subscriptionids-17f4q.md) property. Each time the closure executes, it executes serially with respect to the other closures of the operation.

If you intend to use this closure to process results, set it before you execute the operation or submit the operation to a queue.
