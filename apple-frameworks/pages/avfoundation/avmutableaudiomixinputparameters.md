> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutableaudiomixinputparameters](https://developer.apple.com/documentation/avfoundation/avmutableaudiomixinputparameters)

# AVMutableAudioMixInputParameters (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The parameters you use when adding an audio track to a mix.

## Declaration

```swift
class AVMutableAudioMixInputParameters
```

## Topics

### Creating input parameters

- [init(track:)](avmutableaudiomixinputparameters/init%28track_%29.md): Creates a mutable input parameters object for a given track.

### Managing the track ID

- [trackID](avmutableaudiomixinputparameters/trackid.md): The identifier of the audio track to which the parameters should be applied.

### Setting the volume

- [setVolume(\_:at:)](avmutableaudiomixinputparameters/setvolume%28__at_%29.md): Sets the value of the audio volume starting at the specified time.
- [setVolumeRamp(fromStartVolume:toEndVolume:timeRange:)](avmutableaudiomixinputparameters/setvolumeramp%28fromstartvolume_toendvolume_timerange_%29.md): Sets a volume ramp to apply during a specified time range.

### Getting an audio tap

- [audioTapProcessor](avmutableaudiomixinputparameters/audiotapprocessor.md): The audio processing tap associated with the track.

### Time pitch settings

- [audioTimePitchAlgorithm](avmutableaudiomixinputparameters/audiotimepitchalgorithm.md): The processing algorithm used to manage audio pitch for scaled audio edits.
- [AVAudioTimePitchAlgorithm](avaudiotimepitchalgorithm.md): An algorithm used to set the audio pitch as the rate changes.

## Relationships

### Inherits From

- [AVAudioMixInputParameters](avaudiomixinputparameters.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Mixing

- [AVAudioMix](avaudiomix.md): An object that manages the input parameters for mixing audio tracks.
- [AVAudioMixInputParameters](avaudiomixinputparameters.md): An object that represents the parameters that you apply when adding an audio track to a mix.
- [AVAudioMixInputParametersTrackID](avaudiomixinputparameterstrackid.md): Special value for the trackID property of AVAudioMixInputParameters.
- [AVMutableAudioMix](avmutableaudiomix.md): An object that manages the input parameters for mixing audio tracks.

# AVMutableAudioMixInputParameters (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The parameters you use when adding an audio track to a mix.

## Declaration

```objectivec
@interface AVMutableAudioMixInputParameters : AVAudioMixInputParameters
```

## Topics

### Creating input parameters

- [audioMixInputParameters](avmutableaudiomixinputparameters/audiomixinputparameters.md): Creates a mutable input parameters object.
- [audioMixInputParametersWithTrack:](avmutableaudiomixinputparameters/init%28track_%29.md): Creates a mutable input parameters object for a given track.

### Managing the track ID

- [trackID](avmutableaudiomixinputparameters/trackid.md): The identifier of the audio track to which the parameters should be applied.

### Setting the volume

- [setVolume:atTime:](avmutableaudiomixinputparameters/setvolume%28__at_%29.md): Sets the value of the audio volume starting at the specified time.
- [setVolumeRampFromStartVolume:toEndVolume:timeRange:](avmutableaudiomixinputparameters/setvolumeramp%28fromstartvolume_toendvolume_timerange_%29.md): Sets a volume ramp to apply during a specified time range.

### Getting an audio tap

- [audioTapProcessor](avmutableaudiomixinputparameters/audiotapprocessor.md): The audio processing tap associated with the track.

### Time pitch settings

- [audioTimePitchAlgorithm](avmutableaudiomixinputparameters/audiotimepitchalgorithm.md): The processing algorithm used to manage audio pitch for scaled audio edits.
- [AVAudioTimePitchAlgorithm](avaudiotimepitchalgorithm.md): An algorithm used to set the audio pitch as the rate changes.

## Relationships

### Inherits From

- [AVAudioMixInputParameters](avaudiomixinputparameters.md)

## See Also

### Mixing

- [AVAudioMix](avaudiomix.md): An object that manages the input parameters for mixing audio tracks.
- [AVAudioMixInputParameters](avaudiomixinputparameters.md): An object that represents the parameters that you apply when adding an audio track to a mix.
- [AVAudioMixInputParametersTrackID](avaudiomixinputparameterstrackid.md): Special value for the trackID property of AVAudioMixInputParameters.
- [AVMutableAudioMix](avmutableaudiomix.md): An object that manages the input parameters for mixing audio tracks.
