> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayer/volume](https://developer.apple.com/documentation/avfaudio/avaudioplayer/volume)

# volume (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 2.2+ · iPadOS 2.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The audio player’s volume relative to other audio output.

## Declaration

```swift
var volume: Float { get set }
```

<a id="Discussion"></a>

## Discussion

This property supports values ranging from `0.0` for silence to `1.0` for full volume.

## See Also

### Configuring playback settings

- [setVolume(\_:fadeDuration:)](setvolume%28__fadeduration_%29.md): Changes the audio player’s volume over a duration of time.
- [pan](pan.md): The audio player’s stereo pan position.
- [enableRate](enablerate.md): A Boolean value that indicates whether you can adjust the playback rate of the audio player.
- [rate](rate.md): The audio player’s playback rate.
- [numberOfLoops](numberofloops.md): The number of times the audio repeats playback.

# volume (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 2.2+ · iPadOS 2.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The audio player’s volume relative to other audio output.

## Declaration

```objectivec
@property float volume;
```

<a id="Discussion"></a>

## Discussion

This property supports values ranging from `0.0` for silence to `1.0` for full volume.

## See Also

### Configuring playback settings

- [setVolume:fadeDuration:](setvolume%28__fadeduration_%29.md): Changes the audio player’s volume over a duration of time.
- [pan](pan.md): The audio player’s stereo pan position.
- [enableRate](enablerate.md): A Boolean value that indicates whether you can adjust the playback rate of the audio player.
- [rate](rate.md): The audio player’s playback rate.
- [numberOfLoops](numberofloops.md): The number of times the audio repeats playback.
