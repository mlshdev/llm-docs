> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayer/pan](https://developer.apple.com/documentation/avfaudio/avaudioplayer/pan)

# pan (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The audio player’s stereo pan position.

## Declaration

```swift
var pan: Float { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property value to position the audio in the stereo field. Use a value of `-1.0` to indicate full left, `1.0` for full right, and `0.0` for center.

## See Also

### Configuring playback settings

- [volume](volume.md): The audio player’s volume relative to other audio output.
- [setVolume(\_:fadeDuration:)](setvolume%28__fadeduration_%29.md): Changes the audio player’s volume over a duration of time.
- [enableRate](enablerate.md): A Boolean value that indicates whether you can adjust the playback rate of the audio player.
- [rate](rate.md): The audio player’s playback rate.
- [numberOfLoops](numberofloops.md): The number of times the audio repeats playback.

# pan (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The audio player’s stereo pan position.

## Declaration

```objectivec
@property float pan;
```

<a id="Discussion"></a>

## Discussion

Set this property value to position the audio in the stereo field. Use a value of `-1.0` to indicate full left, `1.0` for full right, and `0.0` for center.

## See Also

### Configuring playback settings

- [volume](volume.md): The audio player’s volume relative to other audio output.
- [setVolume:fadeDuration:](setvolume%28__fadeduration_%29.md): Changes the audio player’s volume over a duration of time.
- [enableRate](enablerate.md): A Boolean value that indicates whether you can adjust the playback rate of the audio player.
- [rate](rate.md): The audio player’s playback rate.
- [numberOfLoops](numberofloops.md): The number of times the audio repeats playback.
