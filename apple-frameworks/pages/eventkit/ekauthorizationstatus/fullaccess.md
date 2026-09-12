> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekauthorizationstatus/fullaccess](https://developer.apple.com/documentation/eventkit/ekauthorizationstatus/fullaccess)

# EKAuthorizationStatus.fullAccess (Swift)

**Framework:** EventKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+ · watchOS 10.0+

The app has both read and write access to the requested entity type.

## Declaration

```swift
case fullAccess
```

## See Also

### Status

- [EKAuthorizationStatus.writeOnly](writeonly.md): The app has write-only access to the requested entity type.
- [EKAuthorizationStatus.denied](denied.md): The person explicitly denied access to the service for the app.
- [EKAuthorizationStatus.notDetermined](notdetermined.md): The person hasn’t chosen whether the app may access the service.
- [EKAuthorizationStatus.restricted](restricted.md): The app isn’t authorized to access the service.

# EKAuthorizationStatusFullAccess (Objective-C)

**Framework:** EventKit  
**Kind:** Enumeration Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+ · watchOS 10.0+

The app has both read and write access to the requested entity type.

## Declaration

```objectivec
EKAuthorizationStatusFullAccess
```

## See Also

### Status

- [EKAuthorizationStatusWriteOnly](writeonly.md): The app has write-only access to the requested entity type.
- [EKAuthorizationStatusDenied](denied.md): The person explicitly denied access to the service for the app.
- [EKAuthorizationStatusNotDetermined](notdetermined.md): The person hasn’t chosen whether the app may access the service.
- [EKAuthorizationStatusRestricted](restricted.md): The app isn’t authorized to access the service.
