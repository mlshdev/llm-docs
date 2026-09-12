> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchsubscriptionsoperation/subscriptionids-17f4q](https://developer.apple.com/documentation/cloudkit/ckfetchsubscriptionsoperation/subscriptionids-17f4q)

# subscriptionIDs

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS · watchOS 6.0+ · Swift 4.2+

The IDs of the subscriptions to fetch.

## Declaration

```swift
var subscriptionIDs: [CKSubscription.ID]? { get set }
```

<a id="discussion"></a>

## Discussion

Use this property to view or change the IDs of the subscriptions to fetch. Each element of the array is a string that represents the ID of a subscription. If you intend to modify this property’s value, do so before you execute the operation or submit it to a queue.

If you use the [fetchAllSubscriptionsOperation()](fetchallsubscriptionsoperation%28%29.md) method to create the operation, CloudKit ignores this property’s value and sets it to `nil`.
