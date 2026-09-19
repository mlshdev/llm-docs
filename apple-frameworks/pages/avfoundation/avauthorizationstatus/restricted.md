> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avauthorizationstatus/restricted

# AVAuthorizationStatus.restricted (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · macOS 10.14+ · tvOS 17.0+ · visionOS 1.0+

A status that indicates the app isn’t permitted to use media capture devices.

## Declaration

```swift
case restricted
```

<a id="Discussion"></a>

## Discussion

This status occurs when a user can’t change the authorization status, possibly due to the system imposing restrictions like parental controls.

## See Also

### Status values

- [AVAuthorizationStatus.notDetermined](notdetermined.md): A status that indicates the user hasn’t yet granted or denied authorization.
- [AVAuthorizationStatus.denied](denied.md): A status that indicates the user has explicitly denied an app permission to capture media.
- [AVAuthorizationStatus.authorized](authorized.md): A status that indicates the user has explicitly granted an app permission to capture media.

# AVAuthorizationStatusRestricted (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · macOS 10.14+ · tvOS 17.0+ · visionOS 1.0+

A status that indicates the app isn’t permitted to use media capture devices.

## Declaration

```objectivec
AVAuthorizationStatusRestricted
```

<a id="Discussion"></a>

## Discussion

This status occurs when a user can’t change the authorization status, possibly due to the system imposing restrictions like parental controls.

## See Also

### Status values

- [AVAuthorizationStatusNotDetermined](notdetermined.md): A status that indicates the user hasn’t yet granted or denied authorization.
- [AVAuthorizationStatusDenied](denied.md): A status that indicates the user has explicitly denied an app permission to capture media.
- [AVAuthorizationStatusAuthorized](authorized.md): A status that indicates the user has explicitly granted an app permission to capture media.
