> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhomemanagerauthorizationstatus/determined](https://developer.apple.com/documentation/homekit/hmhomemanagerauthorizationstatus/determined)

# determined (Swift)

**Framework:** HomeKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The user has set the app’s level of access to home data.

## Declaration

```swift
static var determined: HMHomeManagerAuthorizationStatus { get }
```

## See Also

### Recognizing Status Values

- [authorized](authorized.md): The app has access to home data.
- [restricted](restricted.md): The app doesn’t have access to home data.

# HMHomeManagerAuthorizationStatusDetermined (Objective-C)

**Framework:** HomeKit  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The user has set the app’s level of access to home data.

## Declaration

```objectivec
HMHomeManagerAuthorizationStatusDetermined
```

## See Also

### Recognizing Status Values

- [HMHomeManagerAuthorizationStatusAuthorized](authorized.md): The app has access to home data.
- [HMHomeManagerAuthorizationStatusRestricted](restricted.md): The app doesn’t have access to home data.
