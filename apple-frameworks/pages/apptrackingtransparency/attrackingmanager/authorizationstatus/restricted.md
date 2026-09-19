> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apptrackingtransparency/attrackingmanager/authorizationstatus/restricted

# ATTrackingManager.AuthorizationStatus.restricted (Swift)

**Framework:** App Tracking Transparency  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A value that indicates the system restricts tracking authorization.

## Declaration

```swift
case restricted
```

<a id="discussion"></a>

## Discussion

When the system restricts tracking for the device:

- Tracking request methods (for example, [requestTrackingAuthorization(completionHandler:)](../requesttrackingauthorization%28completionhandler_%29.md)) run their completion handlers immediately, without prompting the person.
- The system disables “Allow Apps to Request to Track” (called “Allow Apps to Request to Link Your Activity Across Companies” in the European Union) in Settings \> Privacy & Security \> Tracking.

## See Also

### Determining the status

- [ATTrackingManager.AuthorizationStatus.authorized](authorized.md): A value that indicates someone grants your app permission to access data your app can use to track a person or device.
- [ATTrackingManager.AuthorizationStatus.denied](denied.md): A value that indicates someone denies your app permission to access data your app can use to track a person or device.
- [ATTrackingManager.AuthorizationStatus.notDetermined](notdetermined.md): A value that indicates the person hasn’t responded to a tracking authorization request.

# ATTrackingManagerAuthorizationStatusRestricted (Objective-C)

**Framework:** App Tracking Transparency  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A value that indicates the system restricts tracking authorization.

## Declaration

```objectivec
ATTrackingManagerAuthorizationStatusRestricted
```

<a id="discussion"></a>

## Discussion

When the system restricts tracking for the device:

- Tracking request methods (for example, [requestTrackingAuthorizationWithCompletionHandler:](../requesttrackingauthorization%28completionhandler_%29.md)) run their completion handlers immediately, without prompting the person.
- The system disables “Allow Apps to Request to Track” (called “Allow Apps to Request to Link Your Activity Across Companies” in the European Union) in Settings \> Privacy & Security \> Tracking.

## See Also

### Determining the status

- [ATTrackingManagerAuthorizationStatusAuthorized](authorized.md): A value that indicates someone grants your app permission to access data your app can use to track a person or device.
- [ATTrackingManagerAuthorizationStatusDenied](denied.md): A value that indicates someone denies your app permission to access data your app can use to track a person or device.
- [ATTrackingManagerAuthorizationStatusNotDetermined](notdetermined.md): A value that indicates the person hasn’t responded to a tracking authorization request.
