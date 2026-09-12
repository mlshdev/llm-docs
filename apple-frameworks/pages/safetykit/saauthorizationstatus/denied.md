> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safetykit/saauthorizationstatus/denied](https://developer.apple.com/documentation/safetykit/saauthorizationstatus/denied)

# SAAuthorizationStatus.denied (Swift)

**Framework:** SafetyKit  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

The system denies the app from receiving Crash Detection events because another app has authorization.

## Declaration

```swift
case denied
```

## See Also

### Obtaining status

- [SAAuthorizationStatus.authorized](authorized.md): This is the designated app for receiving Crash Detection events.
- [SAAuthorizationStatus.notDetermined](notdetermined.md): There isn’t a designated app for receiving Crash Detection events.

# SAAuthorizationStatusDenied (Objective-C)

**Framework:** SafetyKit  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.1+ · macOS 13.0+ · watchOS 10.1+

The system denies the app from receiving Crash Detection events because another app has authorization.

## Declaration

```objectivec
SAAuthorizationStatusDenied
```

## See Also

### Obtaining status

- [SAAuthorizationStatusAuthorized](authorized.md): This is the designated app for receiving Crash Detection events.
- [SAAuthorizationStatusNotDetermined](notdetermined.md): There isn’t a designated app for receiving Crash Detection events.
