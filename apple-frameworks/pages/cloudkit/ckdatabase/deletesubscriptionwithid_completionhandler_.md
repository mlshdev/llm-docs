> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/deletesubscriptionwithid:completionhandler:](https://developer.apple.com/documentation/cloudkit/ckdatabase/deletesubscriptionwithid:completionhandler:)

# deleteSubscriptionWithID:completionHandler:

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Deletes a specific subscription and delivers the deleted subscription’s identifier to a completion handler.

## Declaration

```objectivec
- (void) deleteSubscriptionWithID:(CKSubscriptionID) subscriptionID completionHandler:(void (^)(CKSubscriptionID subscriptionID, NSError *error)) completionHandler;
```

## Parameters

- `subscriptionID`: The identifier of the subscription to delete.
- `completionHandler`: The block to execute after CloudKit deletes the subscription.

<a id="discussion"></a>

## Discussion

The completion handler takes the following parameters:

- **`subscriptionID`**: The identifier of the deleted subscription, or `nil` if there’s an error.
- **`error`**: An error if a problem occurs, or `nil` if CloudKit successfully deletes the subscription.

For information on a more configurable way to delete subscriptions, see [CKModifySubscriptionsOperation](../ckmodifysubscriptionsoperation.md).

## See Also

### Modifying Subscriptions

- [saveSubscription:completionHandler:](save%28__completionhandler_%29-9pona.md): Saves a specific subscription.
