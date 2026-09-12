> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/activity/pushtokenupdates-swift.property](https://developer.apple.com/documentation/activitykit/activity/pushtokenupdates-swift.property)

# pushTokenUpdates

**Framework:** ActivityKit  
**Kind:** Instance Property  
**Availability:** iOS 16.1+ · iPadOS 16.1+

An asynchronous sequence you use to observe changes to the push token of a Live Activity.

## Declaration

```swift
var pushTokenUpdates: Activity<Attributes>.PushTokenUpdates { get }
```

## Mentioned In

- [Displaying live data with Live Activities](../displaying-live-data-with-live-activities.md)
- [Starting and updating Live Activities with ActivityKit push notifications](../starting-and-updating-live-activities-with-activitykit-push-notifications.md)

## See Also

### Using ActivityKit push notifications

- [pushToken](pushtoken.md): The token you use to send ActivityKit push notifications to a Live Activity.
- [Activity.PushTokenUpdates](pushtokenupdates-swift.struct.md): Conforms when `Attributes` conforms to `ActivityAttributes`. A structure that offers functionality to observe changes to the push token of a Live Activity.
- [pushToStartToken](pushtostarttoken.md): The token you use to start a Live Activity with an ActivityKit push notification.
- [pushToStartTokenUpdates](pushtostarttokenupdates.md): An asynchronous sequence you use to observe changes to the token for starting a Live Activity with an ActivityKit push notification.
