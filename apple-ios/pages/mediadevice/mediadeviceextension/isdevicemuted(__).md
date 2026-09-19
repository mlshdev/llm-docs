> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediadevice/mediadeviceextension/isdevicemuted(_:)

# isDeviceMuted(\_:)

**Framework:** Media Device  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Gets the current mute state for the specified device.

## Declaration

```swift
@MainActor func isDeviceMuted(_ device: MediaOutputDevice) -> Bool
```

## Parameters

- `device`: The device for which to check the mute state.

<a id="return-value"></a>

## Return Value

`true` if the device is muted, `false` otherwise.

<a id="discussion"></a>

## Discussion

Called when a device reports `true` for [canMute](../mediaoutputdevice/canmute.md).

<a id="Grouping"></a>

## Grouping

For a group of devices, all devices in the group must report `true` for [canMute](../mediaoutputdevice/canmute.md).
