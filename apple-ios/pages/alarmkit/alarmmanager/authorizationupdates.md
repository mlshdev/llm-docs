> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/alarmkit/alarmmanager/authorizationupdates

# authorizationUpdates

**Framework:** AlarmKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An asynchronous sequence that emits events when authorization to use alarms changes.

## Declaration

```swift
var authorizationUpdates: some AsyncSequence<AlarmManager.AuthorizationState, Never> { get }
```

## See Also

### Checking authorization status

- [AlarmManager.AlarmAuthorizationStateUpdates](alarmauthorizationstateupdates.md): An asynchronous sequence that publishes a new value when authorization for the alarms and timers system changes.
- [AlarmManager.AuthorizationState](authorizationstate-swift.enum.md): An enumeration describing all authorization states for the client process.
- [authorizationState](authorizationstate-swift.property.md): Returns the current authorization state for this client.
