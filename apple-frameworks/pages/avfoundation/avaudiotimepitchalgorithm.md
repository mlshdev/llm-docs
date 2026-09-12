> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avaudiotimepitchalgorithm](https://developer.apple.com/documentation/avfoundation/avaudiotimepitchalgorithm)

# AVAudioTimePitchAlgorithm (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An algorithm used to set the audio pitch as the rate changes.

## Declaration

```swift
struct AVAudioTimePitchAlgorithm
```

## Topics

### Type properties

- [lowQualityZeroLatency](avaudiotimepitchalgorithm/lowqualityzerolatency.md): Deprecated. A low-quality and very low computationally intensive pitch algorithm.
- [spectral](avaudiotimepitchalgorithm/spectral.md): A highest-quality time pitch algorithm that’s suitable for music.
- [timeDomain](avaudiotimepitchalgorithm/timedomain.md): A modest quality time pitch algorithm that’s suitable for voice.
- [varispeed](avaudiotimepitchalgorithm/varispeed.md): A high-quality time pitch algorithm that doesn’t perform pitch correction.

### Initializers

- [init(rawValue:)](avaudiotimepitchalgorithm/init%28rawvalue_%29.md): Creates a new time pitch algorithm with a string.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the time pitch algorithm setting

- [audioTimePitchAlgorithm](avaudiomixinputparameters/audiotimepitchalgorithm.md): The processing algorithm used to manage audio pitch for scaled audio edits.

# AVAudioTimePitchAlgorithm (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An algorithm used to set the audio pitch as the rate changes.

## Declaration

```objectivec
typedef NSString * AVAudioTimePitchAlgorithm;
```

## Topics

### Type properties

- [AVAudioTimePitchAlgorithmLowQualityZeroLatency](avaudiotimepitchalgorithm/lowqualityzerolatency.md): Deprecated. A low-quality and very low computationally intensive pitch algorithm.
- [AVAudioTimePitchAlgorithmSpectral](avaudiotimepitchalgorithm/spectral.md): A highest-quality time pitch algorithm that’s suitable for music.
- [AVAudioTimePitchAlgorithmTimeDomain](avaudiotimepitchalgorithm/timedomain.md): A modest quality time pitch algorithm that’s suitable for voice.
- [AVAudioTimePitchAlgorithmVarispeed](avaudiotimepitchalgorithm/varispeed.md): A high-quality time pitch algorithm that doesn’t perform pitch correction.

## See Also

### Getting the time pitch algorithm setting

- [audioTimePitchAlgorithm](avaudiomixinputparameters/audiotimepitchalgorithm.md): The processing algorithm used to manage audio pitch for scaled audio edits.
