> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/labiometryfallbackrequirement](https://developer.apple.com/documentation/localauthentication/labiometryfallbackrequirement)

# LABiometryFallbackRequirement (Swift)

**Framework:** Local Authentication  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A set of requirements to fall back on if biometrics aren’t present.

## Declaration

```swift
class LABiometryFallbackRequirement
```

## Topics

### Specifying biometric fallback requirements

- [default](labiometryfallbackrequirement/default.md): The default biometric fallback requirement.
- [devicePasscode](labiometryfallbackrequirement/devicepasscode.md): The fallback requirement that requires entering the device passcode.

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

- [LAAuthenticationRequirement](laauthenticationrequirement.md): A set of requirements that protect a right.

# LABiometryFallbackRequirement (Objective-C)

**Framework:** Local Authentication  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A set of requirements to fall back on if biometrics aren’t present.

## Declaration

```objectivec
@interface LABiometryFallbackRequirement : NSObject
```

## Topics

### Specifying biometric fallback requirements

- [defaultRequirement](labiometryfallbackrequirement/default.md): The default biometric fallback requirement.
- [devicePasscodeRequirement](labiometryfallbackrequirement/devicepasscode.md): The fallback requirement that requires entering the device passcode.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Requirements

- [LAAuthenticationRequirement](laauthenticationrequirement.md): A set of requirements that protect a right.
