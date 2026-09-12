> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/isaudiospatializationallowed](https://developer.apple.com/documentation/avfoundation/avplayeritem/isaudiospatializationallowed)

# isAudioSpatializationAllowed (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.15+ (deprecated in 15.0)

A Boolean value that indicates whether the player item allows spatialized audio playback.

> Use [allowedAudioSpatializationFormats](allowedaudiospatializationformats.md) instead.

## Declaration

```swift
var isAudioSpatializationAllowed: Bool { get set }
```

## See Also

### Configuring audio behavior

- [volume](../avplayer/volume.md): The audio playback volume for the player.
- [isMuted](../avplayer/ismuted.md): A Boolean value that indicates whether the audio output of the player is muted.
- [allowedAudioSpatializationFormats](allowedaudiospatializationformats.md): The source audio channel layouts the player item supports for spatialization.
- [audioOutputSuppressedDueToNonMixableAudioRoute](../avplayer/audiooutputsuppressedduetononmixableaudioroute.md): Whether the player’s audio output is suppressed due to being on a non-mixable audio route.
- [intendedSpatialAudioExperience](../avplayer/intendedspatialaudioexperience-1bd87.md): The player’s intended Spatial Audio experience.

# audioSpatializationAllowed (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.15+ (deprecated in 15.0)

A Boolean value that indicates whether the player item allows spatialized audio playback.

> Use [allowedAudioSpatializationFormats](allowedaudiospatializationformats.md) instead.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isAudioSpatializationAllowed) BOOL audioSpatializationAllowed;
```

## See Also

### Configuring audio behavior

- [volume](../avplayer/volume.md): The audio playback volume for the player.
- [muted](../avplayer/ismuted.md): A Boolean value that indicates whether the audio output of the player is muted.
- [allowedAudioSpatializationFormats](allowedaudiospatializationformats.md): The source audio channel layouts the player item supports for spatialization.
- [audioOutputSuppressedDueToNonMixableAudioRoute](../avplayer/audiooutputsuppressedduetononmixableaudioroute.md): Whether the player’s audio output is suppressed due to being on a non-mixable audio route.
- [intendedSpatialAudioExperience](../avplayer/intendedspatialaudioexperience-3uy8g.md): The AVPlayer’s intended spatial audio experience.
