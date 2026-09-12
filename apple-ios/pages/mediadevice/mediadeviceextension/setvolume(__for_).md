> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/mediadevice/mediadeviceextension/setvolume(_:for:)](https://developer.apple.com/documentation/mediadevice/mediadeviceextension/setvolume(_:for:))

# setVolume(\_:for:)

**Framework:** Media Device  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Sets the volume level for the specified device.

## Declaration

```swift
@MainActor func setVolume(_ volume: Float, for device: MediaOutputDevice)
```

## Parameters

- `volume`: The volume level to set in the range 0.0 to 1.0.
- `device`: The device for which to set the volume.

## Mentioned In

- [Creating a media device extension](../creating-a-media-device-extension.md)

<a id="discussion"></a>

## Discussion

For a group of devices, individual device volume changes should influence the group volume.

Called when a device supports [MediaOutputDevice.VolumeControl.absolute](../mediaoutputdevice/volumecontrol-swift.enum/absolute.md).

<a id="Grouping"></a>

## Grouping

For a group of devices, all devices in the group must support [MediaOutputDevice.VolumeControl.absolute](../mediaoutputdevice/volumecontrol-swift.enum/absolute.md).
