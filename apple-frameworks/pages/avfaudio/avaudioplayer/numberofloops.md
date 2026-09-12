> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayer/numberofloops](https://developer.apple.com/documentation/avfaudio/avaudioplayer/numberofloops)

# numberOfLoops (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 2.2+ · iPadOS 2.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The number of times the audio repeats playback.

## Declaration

```swift
var numberOfLoops: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of `0` results in the sound playing once. Set a positive integer value to specify the number of times to repeat the sound. For example, a value of `1` plays the sound twice: the original sound and one repetition. Set a negative integer value to loop the sound continuously until you call the [stop()](stop%28%29.md) method.

## See Also

### Configuring playback settings

- [volume](volume.md): The audio player’s volume relative to other audio output.
- [setVolume(\_:fadeDuration:)](setvolume%28__fadeduration_%29.md): Changes the audio player’s volume over a duration of time.
- [pan](pan.md): The audio player’s stereo pan position.
- [enableRate](enablerate.md): A Boolean value that indicates whether you can adjust the playback rate of the audio player.
- [rate](rate.md): The audio player’s playback rate.

# numberOfLoops (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 2.2+ · iPadOS 2.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The number of times the audio repeats playback.

## Declaration

```objectivec
@property NSInteger numberOfLoops;
```

<a id="Discussion"></a>

## Discussion

The default value of `0` results in the sound playing once. Set a positive integer value to specify the number of times to repeat the sound. For example, a value of `1` plays the sound twice: the original sound and one repetition. Set a negative integer value to loop the sound continuously until you call the [stop](stop%28%29.md) method.

## See Also

### Configuring playback settings

- [volume](volume.md): The audio player’s volume relative to other audio output.
- [setVolume:fadeDuration:](setvolume%28__fadeduration_%29.md): Changes the audio player’s volume over a duration of time.
- [pan](pan.md): The audio player’s stereo pan position.
- [enableRate](enablerate.md): A Boolean value that indicates whether you can adjust the playback rate of the audio player.
- [rate](rate.md): The audio player’s playback rate.
