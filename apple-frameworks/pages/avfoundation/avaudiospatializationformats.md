> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avaudiospatializationformats](https://developer.apple.com/documentation/avfoundation/avaudiospatializationformats)

# AVAudioSpatializationFormats (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that defines the spatialization formats that a player item supports.

## Declaration

```swift
struct AVAudioSpatializationFormats
```

## Topics

### Spatialization formats

- [monoAndStereo](avaudiospatializationformats/monoandstereo.md): A value that indicates the player item only supports mono and stereo layouts for audio spatialization.
- [multichannel](avaudiospatializationformats/multichannel.md): A value that indicates the player item only supports multichannel layouts for audio spatialization.
- [monoStereoAndMultichannel](avaudiospatializationformats/monostereoandmultichannel.md): A value that indicates the player item supports mono, stereo, and multichannel layouts for audio spatialization.

### Initializers

- [init(rawValue:)](avaudiospatializationformats/init%28rawvalue_%29.md): Initializes a format with a string value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Configuring audio

- [audioMix](avplayeritem/audiomix.md): The audio mix parameters to be applied during playback.
- [audioTimePitchAlgorithm](avplayeritem/audiotimepitchalgorithm.md): The processing algorithm used to manage audio pitch for scaled audio edits.
- [allowedAudioSpatializationFormats](avplayeritem/allowedaudiospatializationformats.md): The source audio channel layouts the player item supports for spatialization.
- [isAudioSpatializationAllowed](avplayeritem/isaudiospatializationallowed.md): Deprecated. A Boolean value that indicates whether the player item allows spatialized audio playback.

# AVAudioSpatializationFormats (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that defines the spatialization formats that a player item supports.

## Declaration

```objectivec
enum AVAudioSpatializationFormats : NSUInteger;
```

## Topics

### Spatialization formats

- [AVAudioSpatializationFormatMonoAndStereo](avaudiospatializationformats/monoandstereo.md): A value that indicates the player item only supports mono and stereo layouts for audio spatialization.
- [AVAudioSpatializationFormatMultichannel](avaudiospatializationformats/multichannel.md): A value that indicates the player item only supports multichannel layouts for audio spatialization.
- [AVAudioSpatializationFormatMonoStereoAndMultichannel](avaudiospatializationformats/monostereoandmultichannel.md): A value that indicates the player item supports mono, stereo, and multichannel layouts for audio spatialization.
- [AVAudioSpatializationFormatNone](avaudiospatializationformats/avaudiospatializationformatnone.md): A value that indicates the player item doesn’t support audio spatialization.

## See Also

### Configuring audio

- [audioMix](avplayeritem/audiomix.md): The audio mix parameters to be applied during playback.
- [audioTimePitchAlgorithm](avplayeritem/audiotimepitchalgorithm.md): The processing algorithm used to manage audio pitch for scaled audio edits.
- [allowedAudioSpatializationFormats](avplayeritem/allowedaudiospatializationformats.md): The source audio channel layouts the player item supports for spatialization.
- [audioSpatializationAllowed](avplayeritem/isaudiospatializationallowed.md): Deprecated. A Boolean value that indicates whether the player item allows spatialized audio playback.
