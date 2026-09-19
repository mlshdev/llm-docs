> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/localauthentication/labiometryfallbackrequirement/default

# default (Swift)

**Framework:** Local Authentication  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The default biometric fallback requirement.

## Declaration

```swift
class var `default`: LABiometryFallbackRequirement { get }
```

## See Also

### Specifying biometric fallback requirements

- [devicePasscode](devicepasscode.md): The fallback requirement that requires entering the device passcode.

# defaultRequirement (Objective-C)

**Framework:** Local Authentication  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The default biometric fallback requirement.

## Declaration

```objectivec
@property (class, readonly) LABiometryFallbackRequirement * defaultRequirement;
```

## See Also

### Specifying biometric fallback requirements

- [devicePasscodeRequirement](devicepasscode.md): The fallback requirement that requires entering the device passcode.
