> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwaredevice/preferredinputchannelsforstereo

# preferredInputChannelsForStereo

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

An array of two UInt32s, the first for the left channel, the second for the right channel, that indicate the channel numbers to use for stereo input IO on the device.

## Declaration

```swift
var preferredInputChannelsForStereo: [UInt32] { get throws }
```
