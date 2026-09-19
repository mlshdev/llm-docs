> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/audioreadererror/sourcedevicenotavailable

# AudioReaderError.sourceDeviceNotAvailable

**Framework:** Create ML Components  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An error that indicates that no source devices are available.

## Declaration

```swift
case sourceDeviceNotAvailable
```

## See Also

### Analyzing the error

- [AudioReaderError.microphoneAuthorizationDenied](microphoneauthorizationdenied.md): An error that indicates that the microphone authorization status is denied. The user has explicitly denied permission for audio capture.
- [AudioReaderError.microphoneAuthorizationRestricted](microphoneauthorizationrestricted.md): An error that indicates that the microphone authorization status is restricted. The user is not allowed to access audio capture devices.
