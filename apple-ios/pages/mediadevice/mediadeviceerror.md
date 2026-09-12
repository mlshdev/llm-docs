> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/mediadevice/mediadeviceerror](https://developer.apple.com/documentation/mediadevice/mediadeviceerror)

# MediaDeviceError

**Framework:** Media Device  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

An error returned by MediaDeviceExtension operations.

## Declaration

```swift
struct MediaDeviceError
```

## Topics

### Initializers

- [init(\_:)](mediadeviceerror/init%28__%29.md): Creates an error with the specified error code.

### Instance Properties

- [code](mediadeviceerror/code-swift.property.md): The error code for this error.
- [errorDescription](mediadeviceerror/errordescription.md): A localized description of the error.
- [failureReason](mediadeviceerror/failurereason.md): A localized explanation of the reason for the error.
- [helpAnchor](mediadeviceerror/helpanchor.md): A localized help anchor for the error.
- [recoverySuggestion](mediadeviceerror/recoverysuggestion.md): A localized suggestion for how to recover from the error.

### Enumerations

- [MediaDeviceError.Code](mediadeviceerror/code-swift.enum.md): Error codes for media device operations.

## Relationships

### Conforms To

- [Error](https://developer.apple.com/documentation/swift/error)
- [LocalizedError](https://developer.apple.com/documentation/foundation/localizederror)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Session and system communication

- [MediaOutputSession](mediaoutputsession.md): Represents a media output session for playing content on a remote device.
- [MediaDeviceRoutingManager](mediadeviceroutingmanager.md): An object used by a [MediaDeviceExtension](mediadeviceextension.md) to report device discovery, state changes, and playback events back to the system.
- [RealtimeSampleHandling](realtimesamplehandling.md): A protocol that extends a media device extension to support realtime sample delivery.
