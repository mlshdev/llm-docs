> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/alarmkit/alarmmanager/authorizationstate-swift.enum/authorized

# AlarmManager.AuthorizationState.authorized

**Framework:** AlarmKit  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The person authorized the client to use alarms and timers.

## Declaration

```swift
case authorized
```

## See Also

### Describing an authorization state

- [AlarmManager.AuthorizationState.denied](denied.md): The client previously requested authorization from the person, but they declined.
- [AlarmManager.AuthorizationState.notDetermined](notdetermined.md): The client hasn’t requested authorization from a person.
