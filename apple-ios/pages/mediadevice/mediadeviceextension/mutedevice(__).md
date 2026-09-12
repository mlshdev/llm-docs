> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/mediadevice/mediadeviceextension/mutedevice(_:)](https://developer.apple.com/documentation/mediadevice/mediadeviceextension/mutedevice(_:))

# muteDevice(\_:)

**Framework:** Media Device  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Mutes the audio output for the specified device.

## Declaration

```swift
@MainActor func muteDevice(_ device: MediaOutputDevice)
```

## Parameters

- `device`: The device to mute.

<a id="discussion"></a>

## Discussion

Called when a device reports `true` for [canMute](../mediaoutputdevice/canmute.md).

<a id="Grouping"></a>

## Grouping

For a group of devices, individual device volume mute should influence the group mute. For a group of devices, all devices in the group must report `true` for [canMute](../mediaoutputdevice/canmute.md).
