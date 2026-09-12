> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnaudiosource/volume](https://developer.apple.com/documentation/scenekit/scnaudiosource/volume)

# volume (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The default playback volume for the audio source.

## Declaration

```swift
var volume: Float { get set }
```

<a id="Discussion"></a>

## Discussion

This property determines the default volume for when a source begins playing. To vary the volume during playback through an [SCNAudioPlayer](../scnaudioplayer.md) object, use the player’s [audioNode](../scnaudioplayer/audionode.md) property to access real-time audio controls.

## See Also

### Setting Default Playback Parameters

- [rate](rate.md): The default playback rate for the audio source.
- [reverbBlend](reverbblend.md): The default blend of blend of unmodified and reverb-processed (also called dry and wet) audio for playback of the audio source.
- [loops](loops.md): A Boolean value that determines whether the audio source should play repeatedly.
- [shouldStream](shouldstream.md): A Boolean value that determines whether the audio source should stream content from its source URL when playing.

# volume (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The default playback volume for the audio source.

## Declaration

```objectivec
@property (nonatomic) float volume;
```

<a id="Discussion"></a>

## Discussion

This property determines the default volume for when a source begins playing. To vary the volume during playback through an [SCNAudioPlayer](../scnaudioplayer.md) object, use the player’s [audioNode](../scnaudioplayer/audionode.md) property to access real-time audio controls.

## See Also

### Setting Default Playback Parameters

- [rate](rate.md): The default playback rate for the audio source.
- [reverbBlend](reverbblend.md): The default blend of blend of unmodified and reverb-processed (also called dry and wet) audio for playback of the audio source.
- [loops](loops.md): A Boolean value that determines whether the audio source should play repeatedly.
- [shouldStream](shouldstream.md): A Boolean value that determines whether the audio source should stream content from its source URL when playing.
