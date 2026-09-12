> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupsession/state-swift.enum/invalidated(reason:)](https://developer.apple.com/documentation/groupactivities/groupsession/state-swift.enum/invalidated(reason:))

# GroupSession.State.invalidated(reason:)

**Framework:** Group Activities  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A state that indicates the session is no longer valid and can’t be used for shared activities.

## Declaration

```swift
case invalidated(reason: any Error)
```

## Mentioned In

- [Joining and managing a shared activity](../../joining-and-managing-a-shared-activity.md)

<a id="discussion"></a>

## Discussion

The session transitions to this state when an error occurs, when the FaceTime call ends, or when your app calls the [leave()](../leave%28%29.md) method. When a session is in this state, don’t attempt to join, leave, or end the session again. Instead, release resources related to the session, including the session object itself.

## See Also

### Session states

- [GroupSession.State.waiting](waiting.md): An idle state that indicates the session is waiting for the app to join the activity.
- [GroupSession.State.joined](joined.md): An active state that indicates the session allows data synchronization between devices.
