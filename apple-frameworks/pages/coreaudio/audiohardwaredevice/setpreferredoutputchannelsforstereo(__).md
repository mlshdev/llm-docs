> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwaredevice/setpreferredoutputchannelsforstereo(_:)

# setPreferredOutputChannelsForStereo(\_:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 15.0+

Set the preferredOutputChannelsForStereo property.

## Declaration

```swift
func setPreferredOutputChannelsForStereo(_ channels: [UInt32]) throws
```

## Parameters

- `channels`: An array of two UInt32s, the first for the left channel, the second for the right channel, that indicate the channel numbers to use for stereo output IO on the device.

<a id="discussion"></a>

## Discussion

There are no restrictions on the channel numbers that can be used.
