> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarmmanager/authorizationstate-swift.property](https://developer.apple.com/documentation/alarmkit/alarmmanager/authorizationstate-swift.property)

# authorizationState

**Framework:** AlarmKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Returns the current authorization state for this client.

## Declaration

```swift
var authorizationState: AlarmManager.AuthorizationState { get }
```

## See Also

### Checking authorization status

- [AlarmManager.AlarmAuthorizationStateUpdates](alarmauthorizationstateupdates.md): An asynchronous sequence that publishes a new value when authorization for the alarms and timers system changes.
- [authorizationUpdates](authorizationupdates.md): An asynchronous sequence that emits events when authorization to use alarms changes.
- [AlarmManager.AuthorizationState](authorizationstate-swift.enum.md): An enumeration describing all authorization states for the client process.
