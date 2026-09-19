> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediadevice/mediadeviceroutingmanager/founddevice(_:)

# foundDevice(\_:)

**Framework:** Media Device  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Notifies the system of a new media device, so it can be included in device lists for users to select.

## Declaration

```swift
@MainActor final func foundDevice(_ device: MediaOutputDevice)
```

## Parameters

- `device`: The device that was discovered.

## Mentioned In

- [Creating a media device extension](../creating-a-media-device-extension.md)

<a id="discussion"></a>

## Discussion

Call this function when a `MediaDeviceExtension` discovers a new device.
