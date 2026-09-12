> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/save(_:completionhandler:)-9pona](https://developer.apple.com/documentation/cloudkit/ckdatabase/save(_:completionhandler:)-9pona)

# save(\_:completionHandler:) (Swift)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Saves a specific subscription.

## Declaration

```swift
func save(_ subscription: CKSubscription, completionHandler: @escaping @Sendable (CKSubscription?, (any Error)?) -> Void)
```

## Parameters

- `subscription`: The subscription to save.
- `completionHandler`: The closure to execute after CloudKit saves the subscription.

<a id="discussion"></a>

## Discussion

The completion handler takes the following parameters:

- The saved subscription (as it appears on the server), or `nil` if there’s an error.
- An error if a problem occurs, or `nil` if CloudKit successfully saves the subscription.

For information on a more convenient way to save subscriptions, see [modifySubscriptions(saving:deleting:)](modifysubscriptions%28saving_deleting_%29.md).

## See Also

### Modifying Subscriptions

- [modifySubscriptions(saving:deleting:)](modifysubscriptions%28saving_deleting_%29.md): Modifies the specified subscriptions and returns the results to an awaiting caller.
- [modifySubscriptions(saving:deleting:completionHandler:)](modifysubscriptions%28saving_deleting_completionhandler_%29.md): Modifies the specified subscriptions and delivers the results to a completion handler.
- [deleteSubscription(withID:)](deletesubscription%28withid_%29.md): Deletes a specific subscription and returns the deleted subscription’s identifier to an awaiting caller.
- [delete(withSubscriptionID:completionHandler:)](delete%28withsubscriptionid_completionhandler_%29.md): Deletes a specific subscription and delivers the deleted subscription’s identifier to a completion handler.

# saveSubscription:completionHandler: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Saves a specific subscription.

## Declaration

```objectivec
- (void) saveSubscription:(CKSubscription *) subscription completionHandler:(void (^)(CKSubscription *subscription, NSError *error)) completionHandler;
```

## Parameters

- `subscription`: The subscription to save.
- `completionHandler`: The closure to execute after CloudKit saves the subscription.

<a id="discussion"></a>

## Discussion

The completion handler takes the following parameters:

- The saved subscription (as it appears on the server), or `nil` if there’s an error.
- An error if a problem occurs, or `nil` if CloudKit successfully saves the subscription.

For information on a more convenient way to save subscriptions, see [modifySubscriptions(saving:deleting:)](modifysubscriptions%28saving_deleting_%29.md).

## See Also

### Modifying Subscriptions

- [deleteSubscriptionWithID:completionHandler:](deletesubscriptionwithid_completionhandler_.md): Deletes a specific subscription and delivers the deleted subscription’s identifier to a completion handler.
