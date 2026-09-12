> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/intendedspatialaudioexperience-3uy8g](https://developer.apple.com/documentation/avfoundation/avplayer/intendedspatialaudioexperience-3uy8g)

# intendedSpatialAudioExperience

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** visionOS 26.0+

The AVPlayer’s intended spatial audio experience.

## Declaration

```objectivec
@property (nonatomic, copy) CASpatialAudioExperience * intendedSpatialAudioExperience;
```

<a id="discussion"></a>

## Discussion

The default value of CAAutomaticSpatialAudio means the player uses its AVAudioSession’s intended spatial experience. If the anchoring strategy is impossible (e.g. it uses a destroyed UIScene’s identifier), the player follows a “front” anchoring strategy instead.

## See Also

### Configuring audio behavior

- [volume](volume.md): The audio playback volume for the player.
- [muted](ismuted.md): A Boolean value that indicates whether the audio output of the player is muted.
- [allowedAudioSpatializationFormats](../avplayeritem/allowedaudiospatializationformats.md): The source audio channel layouts the player item supports for spatialization.
- [audioSpatializationAllowed](../avplayeritem/isaudiospatializationallowed.md): Deprecated. A Boolean value that indicates whether the player item allows spatialized audio playback.
- [audioOutputSuppressedDueToNonMixableAudioRoute](audiooutputsuppressedduetononmixableaudioroute.md): Whether the player’s audio output is suppressed due to being on a non-mixable audio route.
