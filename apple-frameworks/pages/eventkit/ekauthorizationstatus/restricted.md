> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekauthorizationstatus/restricted](https://developer.apple.com/documentation/eventkit/ekauthorizationstatus/restricted)

# EKAuthorizationStatus.restricted (Swift)

**Framework:** EventKit  
**Kind:** Case  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+ · watchOS 2.0+

The app isn’t authorized to access the service.

## Declaration

```swift
case restricted
```

<a id="Discussion"></a>

## Discussion

The person can’t change your app’s authorization status, possibly due to active restrictions such as parental controls being in place.

## See Also

### Status

- [EKAuthorizationStatus.fullAccess](fullaccess.md): The app has both read and write access to the requested entity type.
- [EKAuthorizationStatus.writeOnly](writeonly.md): The app has write-only access to the requested entity type.
- [EKAuthorizationStatus.denied](denied.md): The person explicitly denied access to the service for the app.
- [EKAuthorizationStatus.notDetermined](notdetermined.md): The person hasn’t chosen whether the app may access the service.

# EKAuthorizationStatusRestricted (Objective-C)

**Framework:** EventKit  
**Kind:** Enumeration Case  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+ · watchOS 2.0+

The app isn’t authorized to access the service.

## Declaration

```objectivec
EKAuthorizationStatusRestricted
```

<a id="Discussion"></a>

## Discussion

The person can’t change your app’s authorization status, possibly due to active restrictions such as parental controls being in place.

## See Also

### Status

- [EKAuthorizationStatusFullAccess](fullaccess.md): The app has both read and write access to the requested entity type.
- [EKAuthorizationStatusWriteOnly](writeonly.md): The app has write-only access to the requested entity type.
- [EKAuthorizationStatusDenied](denied.md): The person explicitly denied access to the service for the app.
- [EKAuthorizationStatusNotDetermined](notdetermined.md): The person hasn’t chosen whether the app may access the service.
