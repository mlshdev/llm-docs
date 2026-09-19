> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apptrackingtransparency/attrackingmanager/authorizationstatus/notdetermined

# ATTrackingManager.AuthorizationStatus.notDetermined (Swift)

**Framework:** App Tracking Transparency  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A value that indicates the person hasn’t responded to a tracking authorization request.

## Declaration

```swift
case notDetermined
```

<a id="discussion"></a>

## Discussion

> **Note**

> On macOS, [trackingAuthorizationStatus](../trackingauthorizationstatus.md) always returns this value.

## See Also

### Determining the status

- [ATTrackingManager.AuthorizationStatus.authorized](authorized.md): A value that indicates someone grants your app permission to access data your app can use to track a person or device.
- [ATTrackingManager.AuthorizationStatus.denied](denied.md): A value that indicates someone denies your app permission to access data your app can use to track a person or device.
- [ATTrackingManager.AuthorizationStatus.restricted](restricted.md): A value that indicates the system restricts tracking authorization.

# ATTrackingManagerAuthorizationStatusNotDetermined (Objective-C)

**Framework:** App Tracking Transparency  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A value that indicates the person hasn’t responded to a tracking authorization request.

## Declaration

```objectivec
ATTrackingManagerAuthorizationStatusNotDetermined
```

<a id="discussion"></a>

## Discussion

> **Note**

> On macOS, [trackingAuthorizationStatus](../trackingauthorizationstatus.md) always returns this value.

## See Also

### Determining the status

- [ATTrackingManagerAuthorizationStatusAuthorized](authorized.md): A value that indicates someone grants your app permission to access data your app can use to track a person or device.
- [ATTrackingManagerAuthorizationStatusDenied](denied.md): A value that indicates someone denies your app permission to access data your app can use to track a person or device.
- [ATTrackingManagerAuthorizationStatusRestricted](restricted.md): A value that indicates the system restricts tracking authorization.
