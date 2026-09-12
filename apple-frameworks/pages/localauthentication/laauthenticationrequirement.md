> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laauthenticationrequirement](https://developer.apple.com/documentation/localauthentication/laauthenticationrequirement)

# LAAuthenticationRequirement (Swift)

**Framework:** Local Authentication  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A set of requirements that protect a right.

## Declaration

```swift
class LAAuthenticationRequirement
```

## Topics

### Specifying authentication requirements

- [default](laauthenticationrequirement/default.md): The requirement that requires user authentication.
- [biometry](laauthenticationrequirement/biometry.md): The requirement that requires biometric authentication.
- [biometryCurrentSet](laauthenticationrequirement/biometrycurrentset.md): The requirement that requires user authentication with the current set of biometrics.
- [biometry(fallback:)](laauthenticationrequirement/biometry%28fallback_%29.md): Creates a requirement that requires biometric authentication or a fallback requirement that you specify.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Requirements

- [LABiometryFallbackRequirement](labiometryfallbackrequirement.md): A set of requirements to fall back on if biometrics aren’t present.

# LAAuthenticationRequirement (Objective-C)

**Framework:** Local Authentication  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A set of requirements that protect a right.

## Declaration

```objectivec
@interface LAAuthenticationRequirement : NSObject
```

## Topics

### Specifying authentication requirements

- [defaultRequirement](laauthenticationrequirement/default.md): The requirement that requires user authentication.
- [biometryRequirement](laauthenticationrequirement/biometry.md): The requirement that requires biometric authentication.
- [biometryCurrentSetRequirement](laauthenticationrequirement/biometrycurrentset.md): The requirement that requires user authentication with the current set of biometrics.
- [biometryRequirementWithFallback:](laauthenticationrequirement/biometry%28fallback_%29.md): Creates a requirement that requires biometric authentication or a fallback requirement that you specify.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Requirements

- [LABiometryFallbackRequirement](labiometryfallbackrequirement.md): A set of requirements to fall back on if biometrics aren’t present.
