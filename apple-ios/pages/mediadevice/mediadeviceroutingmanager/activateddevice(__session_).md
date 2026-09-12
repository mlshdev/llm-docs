> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/mediadevice/mediadeviceroutingmanager/activateddevice(_:session:)](https://developer.apple.com/documentation/mediadevice/mediadeviceroutingmanager/activateddevice(_:session:))

# activatedDevice(\_:session:)

**Framework:** Media Device  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Notifies the system that a device has been successfully activated and is ready for use.

## Declaration

```swift
@MainActor final func activatedDevice(_ device: MediaOutputDevice, session: MediaOutputSession)
```

## Parameters

- `device`: The device that activation completed for.
- `session`: The session associated with the activation.

## Mentioned In

- [Creating a media device extension](../creating-a-media-device-extension.md)

<a id="discussion"></a>

## Discussion

Call this function when activation has completed for a device.
