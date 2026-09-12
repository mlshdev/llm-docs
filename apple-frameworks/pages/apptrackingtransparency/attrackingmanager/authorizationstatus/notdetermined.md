> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apptrackingtransparency/attrackingmanager/authorizationstatus/notdetermined](https://developer.apple.com/documentation/apptrackingtransparency/attrackingmanager/authorizationstatus/notdetermined)

# ATTrackingManager.AuthorizationStatus.notDetermined (Swift)

**Framework:** App Tracking Transparency  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The value that returns when the app can’t determine the user’s authorization status for access to app-related data for tracking the user or the device.

## Declaration

```swift
case notDetermined
```

<a id="discussion"></a>

## Discussion

> **Note**

> If you call `ATTrackingManager.trackingAuthorizationStatus` in macOS, the result is always `ATTrackingManager.AuthorizationStatus.notDetermined`.

## See Also

### Cases

- [ATTrackingManager.AuthorizationStatus.authorized](authorized.md): The value that returns if the user authorizes access to app-related data for tracking the user or the device.
- [ATTrackingManager.AuthorizationStatus.denied](denied.md): The value that returns if the user denies authorization to access app-related data for tracking the user or the device.
- [ATTrackingManager.AuthorizationStatus.restricted](restricted.md): The value that returns if authorization to access app-related data for tracking the user or the device has a restricted status.

# ATTrackingManagerAuthorizationStatusNotDetermined (Objective-C)

**Framework:** App Tracking Transparency  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The value that returns when the app can’t determine the user’s authorization status for access to app-related data for tracking the user or the device.

## Declaration

```objectivec
ATTrackingManagerAuthorizationStatusNotDetermined
```

<a id="discussion"></a>

## Discussion

> **Note**

> If you call `ATTrackingManager.trackingAuthorizationStatus` in macOS, the result is always `ATTrackingManager.AuthorizationStatus.notDetermined`.

## See Also

### Cases

- [ATTrackingManagerAuthorizationStatusAuthorized](authorized.md): The value that returns if the user authorizes access to app-related data for tracking the user or the device.
- [ATTrackingManagerAuthorizationStatusDenied](denied.md): The value that returns if the user denies authorization to access app-related data for tracking the user or the device.
- [ATTrackingManagerAuthorizationStatusRestricted](restricted.md): The value that returns if authorization to access app-related data for tracking the user or the device has a restricted status.
