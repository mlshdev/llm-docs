> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/audiotimepitchalgorithm](https://developer.apple.com/documentation/avfoundation/avplayeritem/audiotimepitchalgorithm)

# audioTimePitchAlgorithm (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The processing algorithm used to manage audio pitch for scaled audio edits.

## Declaration

```swift
nonisolated var audioTimePitchAlgorithm: AVAudioTimePitchAlgorithm { get set }
```

<a id="Discussion"></a>

## Discussion

The supported constants are defined in Time Pitch Algorithm Settings.

An [invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) will be raised if this property is set to a value other than the defined constants.

## See Also

### Configuring audio

- [audioMix](audiomix.md): The audio mix parameters to be applied during playback.
- [allowedAudioSpatializationFormats](allowedaudiospatializationformats.md): The source audio channel layouts the player item supports for spatialization.
- [AVAudioSpatializationFormats](../avaudiospatializationformats.md): A structure that defines the spatialization formats that a player item supports.
- [isAudioSpatializationAllowed](isaudiospatializationallowed.md): Deprecated. A Boolean value that indicates whether the player item allows spatialized audio playback.

# audioTimePitchAlgorithm (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The processing algorithm used to manage audio pitch for scaled audio edits.

## Declaration

```objectivec
@property (copy) AVAudioTimePitchAlgorithm audioTimePitchAlgorithm;
```

<a id="Discussion"></a>

## Discussion

The supported constants are defined in Time Pitch Algorithm Settings.

An [NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) will be raised if this property is set to a value other than the defined constants.

## See Also

### Configuring audio

- [audioMix](audiomix.md): The audio mix parameters to be applied during playback.
- [allowedAudioSpatializationFormats](allowedaudiospatializationformats.md): The source audio channel layouts the player item supports for spatialization.
- [AVAudioSpatializationFormats](../avaudiospatializationformats.md): A structure that defines the spatialization formats that a player item supports.
- [audioSpatializationAllowed](isaudiospatializationallowed.md): Deprecated. A Boolean value that indicates whether the player item allows spatialized audio playback.
