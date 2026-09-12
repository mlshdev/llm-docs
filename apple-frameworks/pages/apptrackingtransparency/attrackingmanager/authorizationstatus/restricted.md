> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apptrackingtransparency/attrackingmanager/authorizationstatus/restricted](https://developer.apple.com/documentation/apptrackingtransparency/attrackingmanager/authorizationstatus/restricted)

# ATTrackingManager.AuthorizationStatus.restricted (Swift)

**Framework:** App Tracking Transparency  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The value that returns if authorization to access app-related data for tracking the user or the device has a restricted status.

## Declaration

```swift
case restricted
```

<a id="discussion"></a>

## Discussion

A restricted condition means the device does not prompt for tracking authorization when [requestTrackingAuthorization(completionHandler:)](../requesttrackingauthorization%28completionhandler_%29.md) is called, nor is it displayed when the [NSUserTrackingUsageDescription](../../../bundleresources/information-property-list/nsusertrackingusagedescription.md) is triggered. Also, on restricted devices, the Allow Apps To Request To Track setting is disabled and cannot be changed. This setting allows users to opt in or out of allowing apps to request user consent to access app-related data that can be used for tracking the user or the device.

## See Also

### Cases

- [ATTrackingManager.AuthorizationStatus.authorized](authorized.md): The value that returns if the user authorizes access to app-related data for tracking the user or the device.
- [ATTrackingManager.AuthorizationStatus.denied](denied.md): The value that returns if the user denies authorization to access app-related data for tracking the user or the device.
- [ATTrackingManager.AuthorizationStatus.notDetermined](notdetermined.md): The value that returns when the app can’t determine the user’s authorization status for access to app-related data for tracking the user or the device.

# ATTrackingManagerAuthorizationStatusRestricted (Objective-C)

**Framework:** App Tracking Transparency  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The value that returns if authorization to access app-related data for tracking the user or the device has a restricted status.

## Declaration

```objectivec
ATTrackingManagerAuthorizationStatusRestricted
```

<a id="discussion"></a>

## Discussion

A restricted condition means the device does not prompt for tracking authorization when [requestTrackingAuthorizationWithCompletionHandler:](../requesttrackingauthorization%28completionhandler_%29.md) is called, nor is it displayed when the [NSUserTrackingUsageDescription](../../../bundleresources/information-property-list/nsusertrackingusagedescription.md) is triggered. Also, on restricted devices, the Allow Apps To Request To Track setting is disabled and cannot be changed. This setting allows users to opt in or out of allowing apps to request user consent to access app-related data that can be used for tracking the user or the device.

## See Also

### Cases

- [ATTrackingManagerAuthorizationStatusAuthorized](authorized.md): The value that returns if the user authorizes access to app-related data for tracking the user or the device.
- [ATTrackingManagerAuthorizationStatusDenied](denied.md): The value that returns if the user denies authorization to access app-related data for tracking the user or the device.
- [ATTrackingManagerAuthorizationStatusNotDetermined](notdetermined.md): The value that returns when the app can’t determine the user’s authorization status for access to app-related data for tracking the user or the device.
