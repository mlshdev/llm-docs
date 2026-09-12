> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchsubscriptionsoperation/fetchallsubscriptionsoperation()](https://developer.apple.com/documentation/cloudkit/ckfetchsubscriptionsoperation/fetchallsubscriptionsoperation())

# fetchAllSubscriptionsOperation() (Swift)

**Framework:** CloudKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 6.0+

Returns an operation that fetches all of the user’s subscriptions.

## Declaration

```swift
class func fetchAllSubscriptionsOperation() -> Self
```

<a id="discussion"></a>

## Discussion

After creating the operation, set the [fetchSubscriptionCompletionBlock](fetchsubscriptioncompletionblock-207ep.md) property to process the results.

# fetchAllSubscriptionsOperation (Objective-C)

**Framework:** CloudKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 6.0+

Returns an operation that fetches all of the user’s subscriptions.

## Declaration

```objectivec
+ (instancetype) fetchAllSubscriptionsOperation;
```

<a id="discussion"></a>

## Discussion

After creating the operation, set the [fetchSubscriptionCompletionBlock](fetchsubscriptioncompletionblock-207ep.md) property to process the results.
