> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avaudiotimepitchalgorithm/timedomain](https://developer.apple.com/documentation/avfoundation/avaudiotimepitchalgorithm/timedomain)

# timeDomain (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A modest quality time pitch algorithm that’s suitable for voice.

## Declaration

```swift
static let timeDomain: AVAudioTimePitchAlgorithm
```

<a id="Discussion"></a>

## Discussion

This is less computationally intensive than [spectral](spectral.md), and uses a variable rate from `1/32` to `32`.

## See Also

### Constants

- [varispeed](varispeed.md): A high-quality time pitch algorithm that doesn’t perform pitch correction.
- [spectral](spectral.md): A highest-quality time pitch algorithm that’s suitable for music.
- [lowQualityZeroLatency](lowqualityzerolatency.md): Deprecated. A low-quality and very low computationally intensive pitch algorithm.

# AVAudioTimePitchAlgorithmTimeDomain (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A modest quality time pitch algorithm that’s suitable for voice.

## Declaration

```objectivec
extern AVAudioTimePitchAlgorithm const AVAudioTimePitchAlgorithmTimeDomain;
```

<a id="Discussion"></a>

## Discussion

This is less computationally intensive than [AVAudioTimePitchAlgorithmSpectral](spectral.md), and uses a variable rate from `1/32` to `32`.

## See Also

### Constants

- [AVAudioTimePitchAlgorithmVarispeed](varispeed.md): A high-quality time pitch algorithm that doesn’t perform pitch correction.
- [AVAudioTimePitchAlgorithmSpectral](spectral.md): A highest-quality time pitch algorithm that’s suitable for music.
- [AVAudioTimePitchAlgorithmLowQualityZeroLatency](lowqualityzerolatency.md): Deprecated. A low-quality and very low computationally intensive pitch algorithm.
