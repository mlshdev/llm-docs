> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/allowedaudiospatializationformats](https://developer.apple.com/documentation/avfoundation/avplayeritem/allowedaudiospatializationformats)

# allowedAudioSpatializationFormats (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 15.0+ · visionOS 1.0+

The source audio channel layouts the player item supports for spatialization.

## Declaration

```swift
nonisolated var allowedAudioSpatializationFormats: AVAudioSpatializationFormats { get set }
```

<a id="Discussion"></a>

## Discussion

Spatialization uses psychoacoustic methods to create a more immersive audio experience when playing content on specialized headphones and speaker arrangements.

The default value for video content is [monoStereoAndMultichannel](../avaudiospatializationformats/monostereoandmultichannel.md), and [multichannel](../avaudiospatializationformats/multichannel.md) for audio-only content. Your app can set a preferred spatialization format, but a user can change the audio spatialization behavior in Control Center.

This property isn’t key-value observable.

> **Important**

>  It’s incorrect to render binaural recordings with spatialization. Content tagged with a binaural channel layout ignores this property value.

## See Also

### Configuring audio behavior

- [volume](../avplayer/volume.md): The audio playback volume for the player.
- [isMuted](../avplayer/ismuted.md): A Boolean value that indicates whether the audio output of the player is muted.
- [isAudioSpatializationAllowed](isaudiospatializationallowed.md): Deprecated. A Boolean value that indicates whether the player item allows spatialized audio playback.
- [audioOutputSuppressedDueToNonMixableAudioRoute](../avplayer/audiooutputsuppressedduetononmixableaudioroute.md): Whether the player’s audio output is suppressed due to being on a non-mixable audio route.
- [intendedSpatialAudioExperience](../avplayer/intendedspatialaudioexperience-1bd87.md): The player’s intended Spatial Audio experience.

# allowedAudioSpatializationFormats (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 15.0+ · visionOS 1.0+

The source audio channel layouts the player item supports for spatialization.

## Declaration

```objectivec
@property (nonatomic, assign) AVAudioSpatializationFormats allowedAudioSpatializationFormats;
```

<a id="Discussion"></a>

## Discussion

Spatialization uses psychoacoustic methods to create a more immersive audio experience when playing content on specialized headphones and speaker arrangements.

The default value for video content is [AVAudioSpatializationFormatMonoStereoAndMultichannel](../avaudiospatializationformats/monostereoandmultichannel.md), and [AVAudioSpatializationFormatMultichannel](../avaudiospatializationformats/multichannel.md) for audio-only content. Your app can set a preferred spatialization format, but a user can change the audio spatialization behavior in Control Center.

This property isn’t key-value observable.

> **Important**

>  It’s incorrect to render binaural recordings with spatialization. Content tagged with a binaural channel layout ignores this property value.

## See Also

### Configuring audio behavior

- [volume](../avplayer/volume.md): The audio playback volume for the player.
- [muted](../avplayer/ismuted.md): A Boolean value that indicates whether the audio output of the player is muted.
- [audioSpatializationAllowed](isaudiospatializationallowed.md): Deprecated. A Boolean value that indicates whether the player item allows spatialized audio playback.
- [audioOutputSuppressedDueToNonMixableAudioRoute](../avplayer/audiooutputsuppressedduetononmixableaudioroute.md): Whether the player’s audio output is suppressed due to being on a non-mixable audio route.
- [intendedSpatialAudioExperience](../avplayer/intendedspatialaudioexperience-3uy8g.md): The AVPlayer’s intended spatial audio experience.
