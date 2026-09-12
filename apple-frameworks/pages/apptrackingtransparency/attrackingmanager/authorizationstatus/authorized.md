> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apptrackingtransparency/attrackingmanager/authorizationstatus/authorized](https://developer.apple.com/documentation/apptrackingtransparency/attrackingmanager/authorizationstatus/authorized)

# ATTrackingManager.AuthorizationStatus.authorized (Swift)

**Framework:** App Tracking Transparency  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The value that returns if the user authorizes access to app-related data for tracking the user or the device.

## Declaration

```swift
case authorized
```

<a id="discussion"></a>

## Discussion

This setting allows users to opt in or out of allowing apps to request user consent to access app-related data for tracking the user or the device. End users can revoke permission at any time through the Allow Apps to Request to Track privacy setting on the device.

## See Also

### Cases

- [ATTrackingManager.AuthorizationStatus.denied](denied.md): The value that returns if the user denies authorization to access app-related data for tracking the user or the device.
- [ATTrackingManager.AuthorizationStatus.notDetermined](notdetermined.md): The value that returns when the app can’t determine the user’s authorization status for access to app-related data for tracking the user or the device.
- [ATTrackingManager.AuthorizationStatus.restricted](restricted.md): The value that returns if authorization to access app-related data for tracking the user or the device has a restricted status.

# ATTrackingManagerAuthorizationStatusAuthorized (Objective-C)

**Framework:** App Tracking Transparency  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The value that returns if the user authorizes access to app-related data for tracking the user or the device.

## Declaration

```objectivec
ATTrackingManagerAuthorizationStatusAuthorized
```

<a id="discussion"></a>

## Discussion

This setting allows users to opt in or out of allowing apps to request user consent to access app-related data for tracking the user or the device. End users can revoke permission at any time through the Allow Apps to Request to Track privacy setting on the device.

## See Also

### Cases

- [ATTrackingManagerAuthorizationStatusDenied](denied.md): The value that returns if the user denies authorization to access app-related data for tracking the user or the device.
- [ATTrackingManagerAuthorizationStatusNotDetermined](notdetermined.md): The value that returns when the app can’t determine the user’s authorization status for access to app-related data for tracking the user or the device.
- [ATTrackingManagerAuthorizationStatusRestricted](restricted.md): The value that returns if authorization to access app-related data for tracking the user or the device has a restricted status.
