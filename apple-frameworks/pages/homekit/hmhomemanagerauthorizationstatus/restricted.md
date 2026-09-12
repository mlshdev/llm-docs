> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhomemanagerauthorizationstatus/restricted](https://developer.apple.com/documentation/homekit/hmhomemanagerauthorizationstatus/restricted)

# restricted (Swift)

**Framework:** HomeKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The app doesn’t have access to home data.

## Declaration

```swift
static var restricted: HMHomeManagerAuthorizationStatus { get }
```

## See Also

### Recognizing Status Values

- [determined](determined.md): The user has set the app’s level of access to home data.
- [authorized](authorized.md): The app has access to home data.

# HMHomeManagerAuthorizationStatusRestricted (Objective-C)

**Framework:** HomeKit  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The app doesn’t have access to home data.

## Declaration

```objectivec
HMHomeManagerAuthorizationStatusRestricted
```

## See Also

### Recognizing Status Values

- [HMHomeManagerAuthorizationStatusDetermined](determined.md): The user has set the app’s level of access to home data.
- [HMHomeManagerAuthorizationStatusAuthorized](authorized.md): The app has access to home data.
