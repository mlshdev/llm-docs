> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/mediadevice/mediadeviceextension/deactivatedevice(_:session:)](https://developer.apple.com/documentation/mediadevice/mediadeviceextension/deactivatedevice(_:session:))

# deactivateDevice(\_:session:)

**Framework:** Media Device  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Called when the user deactivates a device via a user interface.

## Declaration

```swift
@MainActor func deactivateDevice(_ device: MediaOutputDevice, session: MediaOutputSession)
```

## Parameters

- `device`: The device to deactivate.
- `session`: The session associated with the deactivation.

## Mentioned In

- [Creating a media device extension](../creating-a-media-device-extension.md)

<a id="Grouping"></a>

## Grouping

The device should be removed from its modifiable group. [updateDevices(\_:)](../mediadeviceroutingmanager/updatedevices%28__%29.md) should be called to update the state of group information.
