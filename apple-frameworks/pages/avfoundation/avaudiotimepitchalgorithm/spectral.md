> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avaudiotimepitchalgorithm/spectral](https://developer.apple.com/documentation/avfoundation/avaudiotimepitchalgorithm/spectral)

# spectral (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A highest-quality time pitch algorithm that’s suitable for music.

## Declaration

```swift
static let spectral: AVAudioTimePitchAlgorithm
```

<a id="Discussion"></a>

## Discussion

This is the most computationally intensive, and uses a variable rate from `1/32` to `32`.

## See Also

### Constants

- [timeDomain](timedomain.md): A modest quality time pitch algorithm that’s suitable for voice.
- [varispeed](varispeed.md): A high-quality time pitch algorithm that doesn’t perform pitch correction.
- [lowQualityZeroLatency](lowqualityzerolatency.md): Deprecated. A low-quality and very low computationally intensive pitch algorithm.

# AVAudioTimePitchAlgorithmSpectral (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A highest-quality time pitch algorithm that’s suitable for music.

## Declaration

```objectivec
extern AVAudioTimePitchAlgorithm const AVAudioTimePitchAlgorithmSpectral;
```

<a id="Discussion"></a>

## Discussion

This is the most computationally intensive, and uses a variable rate from `1/32` to `32`.

## See Also

### Constants

- [AVAudioTimePitchAlgorithmTimeDomain](timedomain.md): A modest quality time pitch algorithm that’s suitable for voice.
- [AVAudioTimePitchAlgorithmVarispeed](varispeed.md): A high-quality time pitch algorithm that doesn’t perform pitch correction.
- [AVAudioTimePitchAlgorithmLowQualityZeroLatency](lowqualityzerolatency.md): Deprecated. A low-quality and very low computationally intensive pitch algorithm.
