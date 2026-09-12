> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwaresystem/shouldmixstereotomono](https://developer.apple.com/documentation/coreaudio/audiohardwaresystem/shouldmixstereotomono)

# shouldMixStereoToMono

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

A Bool where a value of true indicates that devices should mix stereo signals down to mono.

## Declaration

```swift
var shouldMixStereoToMono: Bool { get throws }
```

<a id="discussion"></a>

## Discussion

The two channels on the device that comprise the stereo signal are defined on the AudioHardwareDevice by preferredChannelsForStereo.
