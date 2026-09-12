> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laauthenticationrequirement/default](https://developer.apple.com/documentation/localauthentication/laauthenticationrequirement/default)

# default (Swift)

**Framework:** Local Authentication  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The requirement that requires user authentication.

## Declaration

```swift
class var `default`: LAAuthenticationRequirement { get }
```

## See Also

### Specifying authentication requirements

- [biometry](biometry.md): The requirement that requires biometric authentication.
- [biometryCurrentSet](biometrycurrentset.md): The requirement that requires user authentication with the current set of biometrics.
- [biometry(fallback:)](biometry%28fallback_%29.md): Creates a requirement that requires biometric authentication or a fallback requirement that you specify.

# defaultRequirement (Objective-C)

**Framework:** Local Authentication  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The requirement that requires user authentication.

## Declaration

```objectivec
@property (class, readonly) LAAuthenticationRequirement * defaultRequirement;
```

## See Also

### Specifying authentication requirements

- [biometryRequirement](biometry.md): The requirement that requires biometric authentication.
- [biometryCurrentSetRequirement](biometrycurrentset.md): The requirement that requires user authentication with the current set of biometrics.
- [biometryRequirementWithFallback:](biometry%28fallback_%29.md): Creates a requirement that requires biometric authentication or a fallback requirement that you specify.
