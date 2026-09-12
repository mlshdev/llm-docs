> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/activity/activitystateupdates-swift.property](https://developer.apple.com/documentation/activitykit/activity/activitystateupdates-swift.property)

# activityStateUpdates

**Framework:** ActivityKit  
**Kind:** Instance Property  
**Availability:** iOS 16.1+ · iPadOS 16.1+

An asynchronous sequence you use to observe activity state changes.

## Declaration

```swift
var activityStateUpdates: Activity<Attributes>.ActivityStateUpdates { get }
```

## Mentioned In

- [Displaying live data with Live Activities](../displaying-live-data-with-live-activities.md)
- [Starting and updating Live Activities with ActivityKit push notifications](../starting-and-updating-live-activities-with-activitykit-push-notifications.md)

## See Also

### Observing the Live Activity life cycle

- [activityState](activitystate.md): The current state of a Live Activity in its life cycle.
- [ActivityState](../activitystate.md): The enum that describes the state of a Live Activity in its life cycle.
- [Activity.ActivityStateUpdates](activitystateupdates-swift.struct.md): Conforms when `Attributes` conforms to `ActivityAttributes`. A structure that offers functionality to observe state changes of a Live Activity.
