> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarmmanager/authorizationstate-swift.enum](https://developer.apple.com/documentation/alarmkit/alarmmanager/authorizationstate-swift.enum)

# AlarmManager.AuthorizationState

**Framework:** AlarmKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An enumeration describing all authorization states for the client process.

## Declaration

```swift
enum AuthorizationState
```

## Topics

### Describing an authorization state

- [AlarmManager.AuthorizationState.authorized](authorizationstate-swift.enum/authorized.md): The person authorized the client to use alarms and timers.
- [AlarmManager.AuthorizationState.denied](authorizationstate-swift.enum/denied.md): The client previously requested authorization from the person, but they declined.
- [AlarmManager.AuthorizationState.notDetermined](authorizationstate-swift.enum/notdetermined.md): The client hasn’t requested authorization from a person.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Checking authorization status

- [AlarmManager.AlarmAuthorizationStateUpdates](alarmauthorizationstateupdates.md): An asynchronous sequence that publishes a new value when authorization for the alarms and timers system changes.
- [authorizationUpdates](authorizationupdates.md): An asynchronous sequence that emits events when authorization to use alarms changes.
- [authorizationState](authorizationstate-swift.property.md): Returns the current authorization state for this client.
