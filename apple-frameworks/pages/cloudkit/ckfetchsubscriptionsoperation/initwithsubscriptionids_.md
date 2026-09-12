> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchsubscriptionsoperation/initwithsubscriptionids:](https://developer.apple.com/documentation/cloudkit/ckfetchsubscriptionsoperation/initwithsubscriptionids:)

# initWithSubscriptionIDs:

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 6.0+

Creates an operation for fetching the specified subscriptions.

## Declaration

```objectivec
- (instancetype) initWithSubscriptionIDs:(NSArray<NSString *> *) subscriptionIDs;
```

## Parameters

- `subscriptionIDs`: An array of strings where each one is an ID of a subscription that you want to retrieve. This parameter sets the [subscriptionIDs](subscriptionids-714ct.md) property’s value. If you specify `nil`, you must set the `subscriptionIDs` property before you execute the operation.

<a id="discussion"></a>

## Discussion

After creating the operation, assign a block to the [fetchSubscriptionCompletionBlock](fetchsubscriptioncompletionblock-207ep.md) property to process the results.

## See Also

### Creating a Fetch Subscriptions Operation

- [init](init%28%29.md): Creates an empty fetch subscriptions operation.
