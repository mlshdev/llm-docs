> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchsubscriptionsoperation/init(subscriptionids:)](https://developer.apple.com/documentation/cloudkit/ckfetchsubscriptionsoperation/init(subscriptionids:))

# init(subscriptionIDs:)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS · watchOS 6.0+ · Swift 4.2+

Creates an operation for fetching the specified subscriptions.

## Declaration

```swift
convenience init(subscriptionIDs: [CKSubscription.ID])
```

## Parameters

- `subscriptionIDs`: An array of strings where each one is an ID of a subscription that you want to retrieve. This parameter sets the [subscriptionIDs](subscriptionids-714ct.md) property’s value. If you specify `nil`, you must set the `subscriptionIDs` property before you execute the operation.

<a id="discussion"></a>

## Discussion

After creating the operation, assign a closure to the [fetchSubscriptionCompletionBlock](fetchsubscriptioncompletionblock-207ep.md) property to process the results.

## See Also

### Creating a Fetch Subscriptions Operation

- [init()](init%28%29.md): Creates an empty fetch subscriptions operation.
