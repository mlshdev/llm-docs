> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/activity/pushtostarttoken](https://developer.apple.com/documentation/activitykit/activity/pushtostarttoken)

# pushToStartToken

**Framework:** ActivityKit  
**Kind:** Type Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+

The token you use to start a Live Activity with an ActivityKit push notification.

## Declaration

```swift
static var pushToStartToken: Data? { get }
```

<a id="discussion"></a>

## Discussion

The push token for a Live Activity may change over time. Use the [pushToStartTokenUpdates](pushtostarttokenupdates.md) asynchronous sequence to receive an updated push-to-start token. When you receive an updated push token, make sure to send it to your server and invalidate the outdated token.

## See Also

### Using ActivityKit push notifications

- [pushToken](pushtoken.md): The token you use to send ActivityKit push notifications to a Live Activity.
- [pushTokenUpdates](pushtokenupdates-swift.property.md): An asynchronous sequence you use to observe changes to the push token of a Live Activity.
- [Activity.PushTokenUpdates](pushtokenupdates-swift.struct.md): Conforms when `Attributes` conforms to `ActivityAttributes`. A structure that offers functionality to observe changes to the push token of a Live Activity.
- [pushToStartTokenUpdates](pushtostarttokenupdates.md): An asynchronous sequence you use to observe changes to the token for starting a Live Activity with an ActivityKit push notification.
