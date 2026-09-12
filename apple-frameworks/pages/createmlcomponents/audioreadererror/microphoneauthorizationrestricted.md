> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/audioreadererror/microphoneauthorizationrestricted](https://developer.apple.com/documentation/createmlcomponents/audioreadererror/microphoneauthorizationrestricted)

# AudioReaderError.microphoneAuthorizationRestricted

**Framework:** Create ML Components  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An error that indicates that the microphone authorization status is restricted. The user is not allowed to access audio capture devices.

## Declaration

```swift
case microphoneAuthorizationRestricted
```

## See Also

### Analyzing the error

- [AudioReaderError.microphoneAuthorizationDenied](microphoneauthorizationdenied.md): An error that indicates that the microphone authorization status is denied. The user has explicitly denied permission for audio capture.
- [AudioReaderError.sourceDeviceNotAvailable](sourcedevicenotavailable.md): An error that indicates that no source devices are available.
