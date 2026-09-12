> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laauthenticationrequirement/biometry(fallback:)](https://developer.apple.com/documentation/localauthentication/laauthenticationrequirement/biometry(fallback:))

# biometry(fallback:) (Swift)

**Framework:** Local Authentication  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates a requirement that requires biometric authentication or a fallback requirement that you specify.

## Declaration

```swift
class func biometry(fallback: LABiometryFallbackRequirement) -> Self
```

## Parameters

- `fallback`: A requirement to use a fallback if biometric authentication fails or is unavailable, or if the user prefers not to use biometric authentication.

<a id="return-value"></a>

## Return Value

Returns a requirement that requires biometric authentication or a fallback requirement that you specify.

## See Also

### Specifying authentication requirements

- [default](default.md): The requirement that requires user authentication.
- [biometry](biometry.md): The requirement that requires biometric authentication.
- [biometryCurrentSet](biometrycurrentset.md): The requirement that requires user authentication with the current set of biometrics.

# biometryRequirementWithFallback: (Objective-C)

**Framework:** Local Authentication  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates a requirement that requires biometric authentication or a fallback requirement that you specify.

## Declaration

```objectivec
+ (instancetype) biometryRequirementWithFallback:(LABiometryFallbackRequirement *) fallback;
```

## Parameters

- `fallback`: A requirement to use a fallback if biometric authentication fails or is unavailable, or if the user prefers not to use biometric authentication.

<a id="return-value"></a>

## Return Value

Returns a requirement that requires biometric authentication or a fallback requirement that you specify.

## See Also

### Specifying authentication requirements

- [defaultRequirement](default.md): The requirement that requires user authentication.
- [biometryRequirement](biometry.md): The requirement that requires biometric authentication.
- [biometryCurrentSetRequirement](biometrycurrentset.md): The requirement that requires user authentication with the current set of biometrics.
