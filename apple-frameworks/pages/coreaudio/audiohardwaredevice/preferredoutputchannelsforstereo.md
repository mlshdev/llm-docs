> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwaredevice/preferredoutputchannelsforstereo](https://developer.apple.com/documentation/coreaudio/audiohardwaredevice/preferredoutputchannelsforstereo)

# preferredOutputChannelsForStereo

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

An array of two UInt32s, the first for the left channel, the second for the right channel, that indicate the channel numbers to use for stereo output IO on the device.

## Declaration

```swift
var preferredOutputChannelsForStereo: [UInt32] { get throws }
```
