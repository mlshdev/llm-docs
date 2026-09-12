> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/mediadevice/mediaoutputdevice/cangroupwithcurrentlyactivateddevices](https://developer.apple.com/documentation/mediadevice/mediaoutputdevice/cangroupwithcurrentlyactivateddevices)

# canGroupWithCurrentlyActivatedDevices

**Framework:** Media Device  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Indicates whether this device can be grouped with devices that are currently activated.

## Declaration

```swift
let canGroupWithCurrentlyActivatedDevices: Bool
```

<a id="discussion"></a>

## Discussion

When `true`, this device supports being added to a group with other devices via [activateDevice(\_:session:for:)](../mediadeviceextension/activatedevice%28__session_for_%29.md)

When `false`, the device must be activated independently and cannot join ongoing playback sessions on other devices.
