> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/mediadevice/mediadeviceroutingmanager/lostdevice(_:)](https://developer.apple.com/documentation/mediadevice/mediadeviceroutingmanager/lostdevice(_:))

# lostDevice(\_:)

**Framework:** Media Device  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Removes a device from the system’s device lists so users can no longer select it.

## Declaration

```swift
@MainActor final func lostDevice(_ device: MediaOutputDevice)
```

## Parameters

- `device`: The device that is no longer available.

## Mentioned In

- [Creating a media device extension](../creating-a-media-device-extension.md)

<a id="discussion"></a>

## Discussion

Call this function when a previously discovered [MediaOutputDevice](../mediaoutputdevice.md) can no longer be found.
