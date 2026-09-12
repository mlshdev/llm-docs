> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/mediadevice/mediadeviceroutingmanager/updatedevices(_:)](https://developer.apple.com/documentation/mediadevice/mediadeviceroutingmanager/updatedevices(_:))

# updateDevices(\_:)

**Framework:** Media Device  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Notifies the system that one or more devices have changed state, so their information can be refreshed in device lists.

## Declaration

```swift
@MainActor final func updateDevices(_ devices: [MediaOutputDevice])
```

## Parameters

- `devices`: The devices whose state has been updated.

## Mentioned In

- [Creating a media device extension](../creating-a-media-device-extension.md)

<a id="discussion"></a>

## Discussion

Call this function when [MediaOutputDevice](../mediaoutputdevice.md) instances have had their state updated. This may be called after an activate or deactivate call to reflect updated grouping information.
