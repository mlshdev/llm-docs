> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckmodifysubscriptionsoperation/subscriptionstosave](https://developer.apple.com/documentation/cloudkit/ckmodifysubscriptionsoperation/subscriptionstosave)

# subscriptionsToSave (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 6.0+

The subscriptions to save to the database.

## Declaration

```swift
var subscriptionsToSave: [CKSubscription]? { get set }
```

<a id="discussion"></a>

## Discussion

This property contains the subscriptions that you want to save. Its initial value is the array that you pass to the [init(subscriptionsToSave:subscriptionIDsToDelete:)](init%28subscriptionstosave_subscriptionidstodelete_%29.md) method. Modify this property as necessary before you execute the operation or submit it to a queue. After CloudKit saves the subscriptions, it begins generating push notifications according to their criteria.

## See Also

### Configuring the Modify Subscriptions Operation

- [subscriptionIDsToDelete](subscriptionidstodelete-3534e.md): The IDs of the subscriptions that you want to delete.

# subscriptionsToSave (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 6.0+

The subscriptions to save to the database.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<CKSubscription *> * subscriptionsToSave;
```

<a id="discussion"></a>

## Discussion

This property contains the subscriptions that you want to save. Its initial value is the array that you pass to the [init(subscriptionsToSave:subscriptionIDsToDelete:)](init%28subscriptionstosave_subscriptionidstodelete_%29.md) method. Modify this property as necessary before you execute the operation or submit it to a queue. After CloudKit saves the subscriptions, it begins generating push notifications according to their criteria.

## See Also

### Configuring the Modify Subscriptions Operation

- [subscriptionIDsToDelete](subscriptionidstodelete-14x82.md): The IDs of the subscriptions that you want to delete.
