> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/ismuted](https://developer.apple.com/documentation/avfoundation/avplayer/ismuted)

# isMuted (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A Boolean value that indicates whether the audio output of the player is muted.

## Declaration

```swift
nonisolated var isMuted: Bool { get set }
```

## See Also

### Configuring audio behavior

- [volume](volume.md): The audio playback volume for the player.
- [allowedAudioSpatializationFormats](../avplayeritem/allowedaudiospatializationformats.md): The source audio channel layouts the player item supports for spatialization.
- [isAudioSpatializationAllowed](../avplayeritem/isaudiospatializationallowed.md): Deprecated. A Boolean value that indicates whether the player item allows spatialized audio playback.
- [audioOutputSuppressedDueToNonMixableAudioRoute](audiooutputsuppressedduetononmixableaudioroute.md): Whether the player’s audio output is suppressed due to being on a non-mixable audio route.
- [intendedSpatialAudioExperience](intendedspatialaudioexperience-1bd87.md): The player’s intended Spatial Audio experience.

# muted (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A Boolean value that indicates whether the audio output of the player is muted.

## Declaration

```objectivec
@property (getter=isMuted) BOOL muted;
```

## See Also

### Configuring audio behavior

- [volume](volume.md): The audio playback volume for the player.
- [allowedAudioSpatializationFormats](../avplayeritem/allowedaudiospatializationformats.md): The source audio channel layouts the player item supports for spatialization.
- [audioSpatializationAllowed](../avplayeritem/isaudiospatializationallowed.md): Deprecated. A Boolean value that indicates whether the player item allows spatialized audio playback.
- [audioOutputSuppressedDueToNonMixableAudioRoute](audiooutputsuppressedduetononmixableaudioroute.md): Whether the player’s audio output is suppressed due to being on a non-mixable audio route.
- [intendedSpatialAudioExperience](intendedspatialaudioexperience-3uy8g.md): The AVPlayer’s intended spatial audio experience.
