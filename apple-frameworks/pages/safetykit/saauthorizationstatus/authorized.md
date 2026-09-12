> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safetykit/saauthorizationstatus/authorized](https://developer.apple.com/documentation/safetykit/saauthorizationstatus/authorized)

# SAAuthorizationStatus.authorized (Swift)

**Framework:** SafetyKit  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

This is the designated app for receiving Crash Detection events.

## Declaration

```swift
case authorized
```

## See Also

### Obtaining status

- [SAAuthorizationStatus.denied](denied.md): The system denies the app from receiving Crash Detection events because another app has authorization.
- [SAAuthorizationStatus.notDetermined](notdetermined.md): There isn’t a designated app for receiving Crash Detection events.

# SAAuthorizationStatusAuthorized (Objective-C)

**Framework:** SafetyKit  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.1+ · macOS 13.0+ · watchOS 10.1+

This is the designated app for receiving Crash Detection events.

## Declaration

```objectivec
SAAuthorizationStatusAuthorized
```

## See Also

### Obtaining status

- [SAAuthorizationStatusDenied](denied.md): The system denies the app from receiving Crash Detection events because another app has authorization.
- [SAAuthorizationStatusNotDetermined](notdetermined.md): There isn’t a designated app for receiving Crash Detection events.
