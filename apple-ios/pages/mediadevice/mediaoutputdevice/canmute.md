> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/mediadevice/mediaoutputdevice/canmute](https://developer.apple.com/documentation/mediadevice/mediaoutputdevice/canmute)

# canMute

**Framework:** Media Device  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Indicates whether the device supports muting audio output.

## Declaration

```swift
let canMute: Bool
```

<a id="discussion"></a>

## Discussion

When `true`, the device supports mute/unmute functionality, allowing users to temporarily silence audio without changing the volume level. When `false`, mute controls should not be presented in the user interface for this device.
