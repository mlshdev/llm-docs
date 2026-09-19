> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediadevice/mediadeviceextension/volume(for:)

# volume(for:)

**Framework:** Media Device  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Gets the current volume level for the specified device.

## Declaration

```swift
@MainActor func volume(for device: MediaOutputDevice) -> Float
```

## Parameters

- `device`: The device for which to get the volume.

<a id="return-value"></a>

## Return Value

The current volume level in the range 0.0 to 1.0.

## Mentioned In

- [Creating a media device extension](../creating-a-media-device-extension.md)

<a id="discussion"></a>

## Discussion

Called when a device supports [MediaOutputDevice.VolumeControl.absolute](../mediaoutputdevice/volumecontrol-swift.enum/absolute.md).

<a id="Grouping"></a>

## Grouping

For a group of devices, all devices in the group must support [MediaOutputDevice.VolumeControl.absolute](../mediaoutputdevice/volumecontrol-swift.enum/absolute.md).
