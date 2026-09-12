> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckmodifysubscriptionsoperation/persubscriptiondeleteblock-5ke2l](https://developer.apple.com/documentation/cloudkit/ckmodifysubscriptionsoperation/persubscriptiondeleteblock-5ke2l)

# perSubscriptionDeleteBlock

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

The closure to execute when CloudKit deletes a subscription.

## Declaration

```swift
var perSubscriptionDeleteBlock: ((CKSubscription.ID, Result<Void, any Error>) -> Void)? { get set }
```

<a id="discussion"></a>

## Discussion

This property is a closure that returns no value and has the following parameters:

- The ID of the subscription that CloudKit deletes.
- A [Result](https://developer.apple.com/documentation/swift/result) that contains either

  - A successful `Result`
  - An error that provides information about a failure deleting the subscription.

The closure executes once for each subscription in the [subscriptionIDsToDelete](subscriptionidstodelete-3534e.md) property. Each time the closure executes, it executes serially with respect to the other subscription completion blocks of the operation.

If you intend to use this closure to process results, set it before you execute the operation or submit the operation to a queue.
