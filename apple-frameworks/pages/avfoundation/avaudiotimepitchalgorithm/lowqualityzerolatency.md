> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avaudiotimepitchalgorithm/lowqualityzerolatency](https://developer.apple.com/documentation/avfoundation/avaudiotimepitchalgorithm/lowqualityzerolatency)

# lowQualityZeroLatency (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ (deprecated in 15.0) · iPadOS 7.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 15.0) · watchOS 1.0+ (deprecated in 8.0)

A low-quality and very low computationally intensive pitch algorithm.

> Use [timeDomain](timedomain.md) instead.

## Declaration

```swift
static let lowQualityZeroLatency: AVAudioTimePitchAlgorithm
```

<a id="Discussion"></a>

## Discussion

This algorithm is suitable for brief fast-forward and rewind effects, as well as low-quality voice. The rate snaps to `{0.5, 0.666667, 0.8, 1.0, 1.25, 1.5, 2.0}`.

## See Also

### Constants

- [timeDomain](timedomain.md): A modest quality time pitch algorithm that’s suitable for voice.
- [varispeed](varispeed.md): A high-quality time pitch algorithm that doesn’t perform pitch correction.
- [spectral](spectral.md): A highest-quality time pitch algorithm that’s suitable for music.

# AVAudioTimePitchAlgorithmLowQualityZeroLatency (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ (deprecated in 15.0) · iPadOS 7.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 15.0) · watchOS 1.0+ (deprecated in 8.0)

A low-quality and very low computationally intensive pitch algorithm.

> Use [AVAudioTimePitchAlgorithmTimeDomain](timedomain.md) instead.

## Declaration

```objectivec
extern AVAudioTimePitchAlgorithm const AVAudioTimePitchAlgorithmLowQualityZeroLatency;
```

<a id="Discussion"></a>

## Discussion

This algorithm is suitable for brief fast-forward and rewind effects, as well as low-quality voice. The rate snaps to `{0.5, 0.666667, 0.8, 1.0, 1.25, 1.5, 2.0}`.

## See Also

### Constants

- [AVAudioTimePitchAlgorithmTimeDomain](timedomain.md): A modest quality time pitch algorithm that’s suitable for voice.
- [AVAudioTimePitchAlgorithmVarispeed](varispeed.md): A high-quality time pitch algorithm that doesn’t perform pitch correction.
- [AVAudioTimePitchAlgorithmSpectral](spectral.md): A highest-quality time pitch algorithm that’s suitable for music.
