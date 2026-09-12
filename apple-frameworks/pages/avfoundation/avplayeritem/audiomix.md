> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/audiomix](https://developer.apple.com/documentation/avfoundation/avplayeritem/audiomix)

# audioMix (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The audio mix parameters to be applied during playback.

## Declaration

```swift
@NSCopying var audioMix: AVAudioMix? { get set }
```

<a id="Discussion"></a>

## Discussion

An audio mix can only be used with file-based media and is not supported for use with media served using HTTP Live Streaming.

## See Also

### Configuring audio

- [audioTimePitchAlgorithm](audiotimepitchalgorithm.md): The processing algorithm used to manage audio pitch for scaled audio edits.
- [allowedAudioSpatializationFormats](allowedaudiospatializationformats.md): The source audio channel layouts the player item supports for spatialization.
- [AVAudioSpatializationFormats](../avaudiospatializationformats.md): A structure that defines the spatialization formats that a player item supports.
- [isAudioSpatializationAllowed](isaudiospatializationallowed.md): Deprecated. A Boolean value that indicates whether the player item allows spatialized audio playback.

# audioMix (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The audio mix parameters to be applied during playback.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) AVAudioMix * audioMix;
```

<a id="Discussion"></a>

## Discussion

An audio mix can only be used with file-based media and is not supported for use with media served using HTTP Live Streaming.

## See Also

### Configuring audio

- [audioTimePitchAlgorithm](audiotimepitchalgorithm.md): The processing algorithm used to manage audio pitch for scaled audio edits.
- [allowedAudioSpatializationFormats](allowedaudiospatializationformats.md): The source audio channel layouts the player item supports for spatialization.
- [AVAudioSpatializationFormats](../avaudiospatializationformats.md): A structure that defines the spatialization formats that a player item supports.
- [audioSpatializationAllowed](isaudiospatializationallowed.md): Deprecated. A Boolean value that indicates whether the player item allows spatialized audio playback.
