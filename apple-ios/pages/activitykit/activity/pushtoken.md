> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/activity/pushtoken](https://developer.apple.com/documentation/activitykit/activity/pushtoken)

# pushToken

**Framework:** ActivityKit  
**Kind:** Instance Property  
**Availability:** iOS 16.1+ · iPadOS 16.1+

The token you use to send ActivityKit push notifications to a Live Activity.

## Declaration

```swift
var pushToken: Data? { get }
```

## Mentioned In

- [Starting and updating Live Activities with ActivityKit push notifications](../starting-and-updating-live-activities-with-activitykit-push-notifications.md)

<a id="discussion"></a>

## Discussion

The push token for a Live Activity may change over time. Use the [pushTokenUpdates](pushtokenupdates-swift.property.md) asynchronous sequence to receive the updated push token. When you receive an updated push token, make sure to send it to your server and invalidate the outdated token.

## See Also

### Using ActivityKit push notifications

- [pushTokenUpdates](pushtokenupdates-swift.property.md): An asynchronous sequence you use to observe changes to the push token of a Live Activity.
- [Activity.PushTokenUpdates](pushtokenupdates-swift.struct.md): Conforms when `Attributes` conforms to `ActivityAttributes`. A structure that offers functionality to observe changes to the push token of a Live Activity.
- [pushToStartToken](pushtostarttoken.md): The token you use to start a Live Activity with an ActivityKit push notification.
- [pushToStartTokenUpdates](pushtostarttokenupdates.md): An asynchronous sequence you use to observe changes to the token for starting a Live Activity with an ActivityKit push notification.
