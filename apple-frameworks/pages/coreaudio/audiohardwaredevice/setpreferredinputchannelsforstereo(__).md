> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwaredevice/setpreferredinputchannelsforstereo(_:)](https://developer.apple.com/documentation/coreaudio/audiohardwaredevice/setpreferredinputchannelsforstereo(_:))

# setPreferredInputChannelsForStereo(\_:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 15.0+

Set the preferredInputChannelsForStereo property.

## Declaration

```swift
func setPreferredInputChannelsForStereo(_ channels: [UInt32]) throws
```

## Parameters

- `channels`: An array of two UInt32s, the first for the left channel, the second for the right channel, that indicate the channel numbers to use for stereo input IO on the device.

<a id="discussion"></a>

## Discussion

There are no restrictions on the channel numbers that can be used.
