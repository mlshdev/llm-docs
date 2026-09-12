> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/activity/pushtostarttokenupdates](https://developer.apple.com/documentation/activitykit/activity/pushtostarttokenupdates)

# pushToStartTokenUpdates

**Framework:** ActivityKit  
**Kind:** Type Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+

An asynchronous sequence you use to observe changes to the token for starting a Live Activity with an ActivityKit push notification.

## Declaration

```swift
static var pushToStartTokenUpdates: Activity<Attributes>.PushTokenUpdates { get }
```

## Mentioned In

- [Starting and updating Live Activities with ActivityKit push notifications](../starting-and-updating-live-activities-with-activitykit-push-notifications.md)

<a id="discussion"></a>

## Discussion

Adopt push notifications to not only update ongoing Live Activities, but also to start a new Live Activity. For additional information, see [Starting and updating Live Activities with ActivityKit push notifications](../starting-and-updating-live-activities-with-activitykit-push-notifications.md).

## See Also

### Using ActivityKit push notifications

- [pushToken](pushtoken.md): The token you use to send ActivityKit push notifications to a Live Activity.
- [pushTokenUpdates](pushtokenupdates-swift.property.md): An asynchronous sequence you use to observe changes to the push token of a Live Activity.
- [Activity.PushTokenUpdates](pushtokenupdates-swift.struct.md): Conforms when `Attributes` conforms to `ActivityAttributes`. A structure that offers functionality to observe changes to the push token of a Live Activity.
- [pushToStartToken](pushtostarttoken.md): The token you use to start a Live Activity with an ActivityKit push notification.
