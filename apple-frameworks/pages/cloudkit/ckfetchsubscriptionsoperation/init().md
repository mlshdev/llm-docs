> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchsubscriptionsoperation/init()](https://developer.apple.com/documentation/cloudkit/ckfetchsubscriptionsoperation/init())

# init() (Swift)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 6.0+

Creates an empty fetch subscriptions operation.

## Declaration

```swift
init()
```

<a id="discussion"></a>

## Discussion

You must set the [subscriptionIDs](subscriptionids-714ct.md) property before you execute the operation.

## See Also

### Creating a Fetch Subscriptions Operation

- [init(subscriptionIDs:)](init%28subscriptionids_%29.md): Creates an operation for fetching the specified subscriptions.

# init (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 6.0+

Creates an empty fetch subscriptions operation.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="discussion"></a>

## Discussion

You must set the [subscriptionIDs](subscriptionids-714ct.md) property before you execute the operation.

## See Also

### Creating a Fetch Subscriptions Operation

- [initWithSubscriptionIDs:](initwithsubscriptionids_.md): Creates an operation for fetching the specified subscriptions.
