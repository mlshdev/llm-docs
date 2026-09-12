> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avaudiotimepitchalgorithm/varispeed](https://developer.apple.com/documentation/avfoundation/avaudiotimepitchalgorithm/varispeed)

# varispeed (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A high-quality time pitch algorithm that doesn’t perform pitch correction.

## Declaration

```swift
static let varispeed: AVAudioTimePitchAlgorithm
```

<a id="Discussion"></a>

## Discussion

The pitch varies with the rate, and supports variable rates from `1/32` to `32`.

## See Also

### Constants

- [timeDomain](timedomain.md): A modest quality time pitch algorithm that’s suitable for voice.
- [spectral](spectral.md): A highest-quality time pitch algorithm that’s suitable for music.
- [lowQualityZeroLatency](lowqualityzerolatency.md): Deprecated. A low-quality and very low computationally intensive pitch algorithm.

# AVAudioTimePitchAlgorithmVarispeed (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A high-quality time pitch algorithm that doesn’t perform pitch correction.

## Declaration

```objectivec
extern AVAudioTimePitchAlgorithm const AVAudioTimePitchAlgorithmVarispeed;
```

<a id="Discussion"></a>

## Discussion

The pitch varies with the rate, and supports variable rates from `1/32` to `32`.

## See Also

### Constants

- [AVAudioTimePitchAlgorithmTimeDomain](timedomain.md): A modest quality time pitch algorithm that’s suitable for voice.
- [AVAudioTimePitchAlgorithmSpectral](spectral.md): A highest-quality time pitch algorithm that’s suitable for music.
- [AVAudioTimePitchAlgorithmLowQualityZeroLatency](lowqualityzerolatency.md): Deprecated. A low-quality and very low computationally intensive pitch algorithm.
