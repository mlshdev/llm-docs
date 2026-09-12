> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laauthenticationrequirement/biometrycurrentset](https://developer.apple.com/documentation/localauthentication/laauthenticationrequirement/biometrycurrentset)

# biometryCurrentSet (Swift)

**Framework:** Local Authentication  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The requirement that requires user authentication with the current set of biometrics.

## Declaration

```swift
class var biometryCurrentSet: LAAuthenticationRequirement { get }
```

<a id="Discussion"></a>

## Discussion

Authorizations with this requirement fail when:

- Biometrics aren’t available on the current device.
- There aren’t any enrolled biometrics on the current device.
- There’s a change in enrolled biometrics on the current device. For example, adding a new finger to Touch ID changes the set of enrolled biometrics.

## See Also

### Specifying authentication requirements

- [default](default.md): The requirement that requires user authentication.
- [biometry](biometry.md): The requirement that requires biometric authentication.
- [biometry(fallback:)](biometry%28fallback_%29.md): Creates a requirement that requires biometric authentication or a fallback requirement that you specify.

# biometryCurrentSetRequirement (Objective-C)

**Framework:** Local Authentication  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The requirement that requires user authentication with the current set of biometrics.

## Declaration

```objectivec
@property (class, readonly) LAAuthenticationRequirement * biometryCurrentSetRequirement;
```

<a id="Discussion"></a>

## Discussion

Authorizations with this requirement fail when:

- Biometrics aren’t available on the current device.
- There aren’t any enrolled biometrics on the current device.
- There’s a change in enrolled biometrics on the current device. For example, adding a new finger to Touch ID changes the set of enrolled biometrics.

## See Also

### Specifying authentication requirements

- [defaultRequirement](default.md): The requirement that requires user authentication.
- [biometryRequirement](biometry.md): The requirement that requires biometric authentication.
- [biometryRequirementWithFallback:](biometry%28fallback_%29.md): Creates a requirement that requires biometric authentication or a fallback requirement that you specify.
