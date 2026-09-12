> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayer/rate](https://developer.apple.com/documentation/avfaudio/avaudioplayer/rate)

# rate (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The audio player’s playback rate.

## Declaration

```swift
var rate: Float { get set }
```

<a id="Discussion"></a>

## Discussion

To set an audio player’s playback rate, you must first enable the rate adjustment by setting its [enableRate](enablerate.md) property to [true](https://developer.apple.com/documentation/swift/true).

The default value of this property is `1.0`, which indicates that audio playback occurs at standard speed. This property supports values in the range of `0.5` for half-speed playback to `2.0` for double-speed playback.

> **Note**

>  Adjusting the audio’s playback rate doesn’t alter its pitch.

## See Also

### Configuring playback settings

- [volume](volume.md): The audio player’s volume relative to other audio output.
- [setVolume(\_:fadeDuration:)](setvolume%28__fadeduration_%29.md): Changes the audio player’s volume over a duration of time.
- [pan](pan.md): The audio player’s stereo pan position.
- [enableRate](enablerate.md): A Boolean value that indicates whether you can adjust the playback rate of the audio player.
- [numberOfLoops](numberofloops.md): The number of times the audio repeats playback.

# rate (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The audio player’s playback rate.

## Declaration

```objectivec
@property float rate;
```

<a id="Discussion"></a>

## Discussion

To set an audio player’s playback rate, you must first enable the rate adjustment by setting its [enableRate](enablerate.md) property to [true](https://developer.apple.com/documentation/swift/true).

The default value of this property is `1.0`, which indicates that audio playback occurs at standard speed. This property supports values in the range of `0.5` for half-speed playback to `2.0` for double-speed playback.

> **Note**

>  Adjusting the audio’s playback rate doesn’t alter its pitch.

## See Also

### Configuring playback settings

- [volume](volume.md): The audio player’s volume relative to other audio output.
- [setVolume:fadeDuration:](setvolume%28__fadeduration_%29.md): Changes the audio player’s volume over a duration of time.
- [pan](pan.md): The audio player’s stereo pan position.
- [enableRate](enablerate.md): A Boolean value that indicates whether you can adjust the playback rate of the audio player.
- [numberOfLoops](numberofloops.md): The number of times the audio repeats playback.
