> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/volume](https://developer.apple.com/documentation/avfoundation/avplayer/volume)

# volume (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The audio playback volume for the player.

## Declaration

```swift
nonisolated var volume: Float { get set }
```

<a id="Discussion"></a>

## Discussion

A value of `0.0` indicates silence; a value of `1.0` (the default) indicates full audio volume for the player instance.

This property is used to control the player audio volume relative to the system volume. There is no programmatic way to control the system volume in iOS, but you can use the MediaPlayer framework’s [MPVolumeView](../../mediaplayer/mpvolumeview.md) class to present a standard user interface for controlling system volume.

## See Also

### Configuring audio behavior

- [isMuted](ismuted.md): A Boolean value that indicates whether the audio output of the player is muted.
- [allowedAudioSpatializationFormats](../avplayeritem/allowedaudiospatializationformats.md): The source audio channel layouts the player item supports for spatialization.
- [isAudioSpatializationAllowed](../avplayeritem/isaudiospatializationallowed.md): Deprecated. A Boolean value that indicates whether the player item allows spatialized audio playback.
- [audioOutputSuppressedDueToNonMixableAudioRoute](audiooutputsuppressedduetononmixableaudioroute.md): Whether the player’s audio output is suppressed due to being on a non-mixable audio route.
- [intendedSpatialAudioExperience](intendedspatialaudioexperience-1bd87.md): The player’s intended Spatial Audio experience.

# volume (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The audio playback volume for the player.

## Declaration

```objectivec
@property float volume;
```

<a id="Discussion"></a>

## Discussion

A value of `0.0` indicates silence; a value of `1.0` (the default) indicates full audio volume for the player instance.

This property is used to control the player audio volume relative to the system volume. There is no programmatic way to control the system volume in iOS, but you can use the MediaPlayer framework’s [MPVolumeView](../../mediaplayer/mpvolumeview.md) class to present a standard user interface for controlling system volume.

## See Also

### Configuring audio behavior

- [muted](ismuted.md): A Boolean value that indicates whether the audio output of the player is muted.
- [allowedAudioSpatializationFormats](../avplayeritem/allowedaudiospatializationformats.md): The source audio channel layouts the player item supports for spatialization.
- [audioSpatializationAllowed](../avplayeritem/isaudiospatializationallowed.md): Deprecated. A Boolean value that indicates whether the player item allows spatialized audio playback.
- [audioOutputSuppressedDueToNonMixableAudioRoute](audiooutputsuppressedduetononmixableaudioroute.md): Whether the player’s audio output is suppressed due to being on a non-mixable audio route.
- [intendedSpatialAudioExperience](intendedspatialaudioexperience-3uy8g.md): The AVPlayer’s intended spatial audio experience.
