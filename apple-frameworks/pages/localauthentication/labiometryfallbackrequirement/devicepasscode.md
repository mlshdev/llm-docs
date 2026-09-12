> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/labiometryfallbackrequirement/devicepasscode](https://developer.apple.com/documentation/localauthentication/labiometryfallbackrequirement/devicepasscode)

# devicePasscode (Swift)

**Framework:** Local Authentication  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The fallback requirement that requires entering the device passcode.

## Declaration

```swift
class var devicePasscode: LABiometryFallbackRequirement { get }
```

## See Also

### Specifying biometric fallback requirements

- [default](default.md): The default biometric fallback requirement.

# devicePasscodeRequirement (Objective-C)

**Framework:** Local Authentication  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The fallback requirement that requires entering the device passcode.

## Declaration

```objectivec
@property (class, readonly) LABiometryFallbackRequirement * devicePasscodeRequirement;
```

## See Also

### Specifying biometric fallback requirements

- [defaultRequirement](default.md): The default biometric fallback requirement.
