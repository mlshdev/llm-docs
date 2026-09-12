> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchsubscriptionsoperation/fetchsubscriptionsresultblock](https://developer.apple.com/documentation/cloudkit/ckfetchsubscriptionsoperation/fetchsubscriptionsresultblock)

# fetchSubscriptionsResultBlock

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

The closure to execute after CloudKit retrieves all of the subscriptions.

## Declaration

```swift
var fetchSubscriptionsResultBlock: ((Result<Void, any Error>) -> Void)? { get set }
```

<a id="discussion"></a>

## Discussion

This property is a closure that returns no value and has the following parameter:

- A [Result](https://developer.apple.com/documentation/swift/result) that contains either:

  - A successful `Result`, or
  - An error that contains information about a problem encountered retrieving the subscriptions.

The fetch operation executes this closure only once. The closure executes before the operation’s completion closure. The closure executes serially with respect to the other closures of the operation.

If you intend to use this closure to process results, set it before you execute the operation or submit the operation to a queue.
