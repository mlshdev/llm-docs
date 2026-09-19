> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/homekit/hmhomemanagerauthorizationstatus/authorized

# authorized (Swift)

**Framework:** HomeKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The app has access to home data.

## Declaration

```swift
static var authorized: HMHomeManagerAuthorizationStatus { get }
```

## See Also

### Recognizing Status Values

- [determined](determined.md): The user has set the app’s level of access to home data.
- [restricted](restricted.md): The app doesn’t have access to home data.

# HMHomeManagerAuthorizationStatusAuthorized (Objective-C)

**Framework:** HomeKit  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The app has access to home data.

## Declaration

```objectivec
HMHomeManagerAuthorizationStatusAuthorized
```

## See Also

### Recognizing Status Values

- [HMHomeManagerAuthorizationStatusDetermined](determined.md): The user has set the app’s level of access to home data.
- [HMHomeManagerAuthorizationStatusRestricted](restricted.md): The app doesn’t have access to home data.
