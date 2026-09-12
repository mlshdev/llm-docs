> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avaudiomixinputparameterstrackid](https://developer.apple.com/documentation/avfoundation/avaudiomixinputparameterstrackid)

# AVAudioMixInputParametersTrackID (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Special value for the trackID property of AVAudioMixInputParameters.

## Declaration

```swift
enum AVAudioMixInputParametersTrackID
```

## Topics

### Creating a track identifier

- [init(rawValue:)](avaudiomixinputparameterstrackid/init%28rawvalue_%29.md)

### Track identifiers

- [AVAudioMixInputParametersTrackID.mixID](avaudiomixinputparameterstrackid/mixid.md): Indicates that the specified input parameters should be applied to the mix of all audio tracks rather than to a single specific audio track. This is particularly useful for setting up volume ramps or an audio tap for streaming playback.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Mixing

- [AVAudioMix](avaudiomix.md): An object that manages the input parameters for mixing audio tracks.
- [AVAudioMixInputParameters](avaudiomixinputparameters.md): An object that represents the parameters that you apply when adding an audio track to a mix.
- [AVMutableAudioMix](avmutableaudiomix.md): An object that manages the input parameters for mixing audio tracks.
- [AVMutableAudioMixInputParameters](avmutableaudiomixinputparameters.md): The parameters you use when adding an audio track to a mix.

# AVAudioMixInputParametersTrackID (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Special value for the trackID property of AVAudioMixInputParameters.

## Declaration

```objectivec
enum AVAudioMixInputParametersTrackID : CMPersistentTrackID;
```

## Topics

### Track identifiers

- [AVAudioMixInputParametersTrackMixID](avaudiomixinputparameterstrackid/mixid.md): Indicates that the specified input parameters should be applied to the mix of all audio tracks rather than to a single specific audio track. This is particularly useful for setting up volume ramps or an audio tap for streaming playback.

## See Also

### Mixing

- [AVAudioMix](avaudiomix.md): An object that manages the input parameters for mixing audio tracks.
- [AVAudioMixInputParameters](avaudiomixinputparameters.md): An object that represents the parameters that you apply when adding an audio track to a mix.
- [AVMutableAudioMix](avmutableaudiomix.md): An object that manages the input parameters for mixing audio tracks.
- [AVMutableAudioMixInputParameters](avmutableaudiomixinputparameters.md): The parameters you use when adding an audio track to a mix.
