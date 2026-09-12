> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayer/enablerate](https://developer.apple.com/documentation/avfaudio/avaudioplayer/enablerate)

# enableRate (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether you can adjust the playback rate of the audio player.

## Declaration

```swift
var enableRate: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

To enable modifying the player’s rate, set this property to [true](https://developer.apple.com/documentation/swift/true) after you create the player, but before you call [prepareToPlay()](preparetoplay%28%29.md).

## See Also

### Configuring playback settings

- [volume](volume.md): The audio player’s volume relative to other audio output.
- [setVolume(\_:fadeDuration:)](setvolume%28__fadeduration_%29.md): Changes the audio player’s volume over a duration of time.
- [pan](pan.md): The audio player’s stereo pan position.
- [rate](rate.md): The audio player’s playback rate.
- [numberOfLoops](numberofloops.md): The number of times the audio repeats playback.

# enableRate (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that indicates whether you can adjust the playback rate of the audio player.

## Declaration

```objectivec
@property BOOL enableRate;
```

<a id="Discussion"></a>

## Discussion

To enable modifying the player’s rate, set this property to [true](https://developer.apple.com/documentation/swift/true) after you create the player, but before you call [prepareToPlay](preparetoplay%28%29.md).

## See Also

### Configuring playback settings

- [volume](volume.md): The audio player’s volume relative to other audio output.
- [setVolume:fadeDuration:](setvolume%28__fadeduration_%29.md): Changes the audio player’s volume over a duration of time.
- [pan](pan.md): The audio player’s stereo pan position.
- [rate](rate.md): The audio player’s playback rate.
- [numberOfLoops](numberofloops.md): The number of times the audio repeats playback.
