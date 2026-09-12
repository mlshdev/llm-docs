> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/mediadevice/mediadeviceextension/changevolume(by:for:)](https://developer.apple.com/documentation/mediadevice/mediadeviceextension/changevolume(by:for:))

# changeVolume(by:for:)

**Framework:** Media Device  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Changes the volume by a specified number of increments for the specified device.

## Declaration

```swift
@MainActor func changeVolume(by increments: Int, for device: MediaOutputDevice)
```

## Parameters

- `increments`: The number of volume increments to increase or decrease by.
- `device`: The device for which to change the volume.

## Mentioned In

- [Creating a media device extension](../creating-a-media-device-extension.md)

<a id="discussion"></a>

## Discussion

For a group of devices, individual device volume changes should influence the group volume.

Called when a device supports [MediaOutputDevice.VolumeControl.relative](../mediaoutputdevice/volumecontrol-swift.enum/relative.md).

<a id="Grouping"></a>

## Grouping

For a group of devices, all devices in the group must support [MediaOutputDevice.VolumeControl.relative](../mediaoutputdevice/volumecontrol-swift.enum/relative.md).
