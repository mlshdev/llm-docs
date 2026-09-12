> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/intendedspatialaudioexperience-1bd87](https://developer.apple.com/documentation/avfoundation/avplayer/intendedspatialaudioexperience-1bd87)

# intendedSpatialAudioExperience

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** visionOS 26.0+

The player’s intended Spatial Audio experience.

## Declaration

```swift
nonisolated var intendedSpatialAudioExperience: any SpatialAudioExperience { get set }
```

<a id="discussion"></a>

## Discussion

If unspecified, the property value defaults to [CAAutomaticSpatialAudio](../../audiotoolbox/caautomaticspatialaudio.md).

## See Also

### Configuring audio behavior

- [volume](volume.md): The audio playback volume for the player.
- [isMuted](ismuted.md): A Boolean value that indicates whether the audio output of the player is muted.
- [allowedAudioSpatializationFormats](../avplayeritem/allowedaudiospatializationformats.md): The source audio channel layouts the player item supports for spatialization.
- [isAudioSpatializationAllowed](../avplayeritem/isaudiospatializationallowed.md): Deprecated. A Boolean value that indicates whether the player item allows spatialized audio playback.
- [audioOutputSuppressedDueToNonMixableAudioRoute](audiooutputsuppressedduetononmixableaudioroute.md): Whether the player’s audio output is suppressed due to being on a non-mixable audio route.
