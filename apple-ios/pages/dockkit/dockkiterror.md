> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockkiterror](https://developer.apple.com/documentation/dockkit/dockkiterror)

# DockKitError

**Framework:** DockKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

A list of errors that DockKit sends.

## Declaration

```swift
enum DockKitError
```

## Topics

### Getting errors

- [DockKitError.invalidParameter](dockkiterror/invalidparameter.md): The supplied parameter is invalid.
- [DockKitError.notConnected](dockkiterror/notconnected.md): The dock accessory isn’t connected to a device.
- [DockKitError.notSupported](dockkiterror/notsupported.md): The method isn’t supported on a specific platform.
- [DockKitError.notSupportedByDevice](dockkiterror/notsupportedbydevice.md): The device doesn’t support the requested operation.

### Enumeration Cases

- [DockKitError.cameraTCCMissing](dockkiterror/cameratccmissing.md): The camera terms and conditions are missing.
- [DockKitError.frameRateTooHigh](dockkiterror/frameratetoohigh.md): The call rate for the method is too frequent.
- [DockKitError.frameRateTooLow](dockkiterror/frameratetoolow.md): The frame rate is too low to track an object.
- [DockKitError.noSubjectFound](dockkiterror/nosubjectfound.md): There is no subject in the video frame.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [LocalizedError](https://developer.apple.com/documentation/foundation/localizederror)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Controlling the dock accessory

- [Controlling a DockKit accessory using your camera app](controlling-a-dockkit-accessory-using-your-camera-app.md): Follow subjects in real time using an iPhone that you mount on a DockKit accessory.
- [DockAccessoryManager](dockaccessorymanager.md): Observe the state of dock accessories and enable or disable system tracking.
- [DockAccessory](dockaccessory.md): Obtain accessory information and control tracking behavior.
