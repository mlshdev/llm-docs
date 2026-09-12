> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laauthenticationrequirement/biometry](https://developer.apple.com/documentation/localauthentication/laauthenticationrequirement/biometry)

# biometry (Swift)

**Framework:** Local Authentication  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The requirement that requires biometric authentication.

## Declaration

```swift
class var biometry: LAAuthenticationRequirement { get }
```

<a id="Discussion"></a>

## Discussion

Authorizations with this requirement fail when biometrics aren’t available on the current device or there aren’t any enrolled biometrics on the current device.

## See Also

### Specifying authentication requirements

- [default](default.md): The requirement that requires user authentication.
- [biometryCurrentSet](biometrycurrentset.md): The requirement that requires user authentication with the current set of biometrics.
- [biometry(fallback:)](biometry%28fallback_%29.md): Creates a requirement that requires biometric authentication or a fallback requirement that you specify.

# biometryRequirement (Objective-C)

**Framework:** Local Authentication  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The requirement that requires biometric authentication.

## Declaration

```objectivec
@property (class, readonly) LAAuthenticationRequirement * biometryRequirement;
```

<a id="Discussion"></a>

## Discussion

Authorizations with this requirement fail when biometrics aren’t available on the current device or there aren’t any enrolled biometrics on the current device.

## See Also

### Specifying authentication requirements

- [defaultRequirement](default.md): The requirement that requires user authentication.
- [biometryCurrentSetRequirement](biometrycurrentset.md): The requirement that requires user authentication with the current set of biometrics.
- [biometryRequirementWithFallback:](biometry%28fallback_%29.md): Creates a requirement that requires biometric authentication or a fallback requirement that you specify.
