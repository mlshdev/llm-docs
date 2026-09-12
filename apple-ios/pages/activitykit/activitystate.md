> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/activitystate](https://developer.apple.com/documentation/activitykit/activitystate)

# ActivityState

**Framework:** ActivityKit  
**Kind:** Enumeration  
**Availability:** iOS 16.1+ · iPadOS 16.1+

The enum that describes the state of a Live Activity in its life cycle.

## Declaration

```swift
enum ActivityState
```

## Mentioned In

- [Displaying live data with Live Activities](displaying-live-data-with-live-activities.md)

## Topics

### Live Activity states

- [ActivityState.active](activitystate/active.md): The Live Activity is active, visible, and can receive content updates.
- [ActivityState.dismissed](activitystate/dismissed.md): The Live Activity ended and is no longer visible because a person or the system removed it.
- [ActivityState.pending](activitystate/pending.md): The Live Activity is scheduled to start at a specified date but hasn’t started yet.
- [ActivityState.stale](activitystate/stale.md): The Live Activity content is out of date and needs an update.
- [ActivityState.ended](activitystate/ended.md): The Live Activity is visible, but a person, the app, or the system ended it, and it won’t update its content anymore.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Observing the Live Activity life cycle

- [activityState](activity/activitystate.md): The current state of a Live Activity in its life cycle.
- [activityStateUpdates](activity/activitystateupdates-swift.property.md): An asynchronous sequence you use to observe activity state changes.
- [Activity.ActivityStateUpdates](activity/activitystateupdates-swift.struct.md): Conforms when `Attributes` conforms to `ActivityAttributes`. A structure that offers functionality to observe state changes of a Live Activity.
