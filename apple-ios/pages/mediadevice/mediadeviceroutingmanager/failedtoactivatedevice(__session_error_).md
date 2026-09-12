> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/mediadevice/mediadeviceroutingmanager/failedtoactivatedevice(_:session:error:)](https://developer.apple.com/documentation/mediadevice/mediadeviceroutingmanager/failedtoactivatedevice(_:session:error:))

# failedToActivateDevice(\_:session:error:)

**Framework:** Media Device  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Reports a device activation failure to the system so it can inform the user and clean up the session.

## Declaration

```swift
@MainActor final func failedToActivateDevice(_ device: MediaOutputDevice, session: MediaOutputSession, error: MediaDeviceError)
```

## Parameters

- `device`: The device that activation failed for.
- `session`: The session associated with the activation.
- `error`: The error that occurred during activation.

## Mentioned In

- [Creating a media device extension](../creating-a-media-device-extension.md)

<a id="discussion"></a>

## Discussion

Call this function when activation has failed for a device.
