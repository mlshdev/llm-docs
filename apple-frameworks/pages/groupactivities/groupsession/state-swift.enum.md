> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupsession/state-swift.enum](https://developer.apple.com/documentation/groupactivities/groupsession/state-swift.enum)

# GroupSession.State

**Framework:** Group Activities  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The possible states of a session.

## Declaration

```swift
enum State
```

## Topics

### Session states

- [GroupSession.State.waiting](state-swift.enum/waiting.md): An idle state that indicates the session is waiting for the app to join the activity.
- [GroupSession.State.joined](state-swift.enum/joined.md): An active state that indicates the session allows data synchronization between devices.
- [GroupSession.State.invalidated(reason:)](state-swift.enum/invalidated%28reason_%29.md): A state that indicates the session is no longer valid and can’t be used for shared activities.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the session details

- [state](state-swift.property.md): The current state of the session.
- [id](id.md): The unique identifier of the current session.
