> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediadevice/mediaoutputdevice/canmute

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
