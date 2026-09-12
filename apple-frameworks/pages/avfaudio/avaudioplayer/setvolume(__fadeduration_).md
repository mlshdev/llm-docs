> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayer/setvolume(_:fadeduration:)](https://developer.apple.com/documentation/avfaudio/avaudioplayer/setvolume(_:fadeduration:))

# setVolume(\_:fadeDuration:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Changes the audio player’s volume over a duration of time.

## Declaration

```swift
func setVolume(_ volume: Float, fadeDuration duration: TimeInterval)
```

## Parameters

- `volume`: The target volume.
- `duration`: The duration, in seconds, over which to fade the volume.

## See Also

### Configuring playback settings

- [volume](volume.md): The audio player’s volume relative to other audio output.
- [pan](pan.md): The audio player’s stereo pan position.
- [enableRate](enablerate.md): A Boolean value that indicates whether you can adjust the playback rate of the audio player.
- [rate](rate.md): The audio player’s playback rate.
- [numberOfLoops](numberofloops.md): The number of times the audio repeats playback.

# setVolume:fadeDuration: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Changes the audio player’s volume over a duration of time.

## Declaration

```objectivec
- (void) setVolume:(float) volume fadeDuration:(NSTimeInterval) duration;
```

## Parameters

- `volume`: The target volume.
- `duration`: The duration, in seconds, over which to fade the volume.

## See Also

### Configuring playback settings

- [volume](volume.md): The audio player’s volume relative to other audio output.
- [pan](pan.md): The audio player’s stereo pan position.
- [enableRate](enablerate.md): A Boolean value that indicates whether you can adjust the playback rate of the audio player.
- [rate](rate.md): The audio player’s playback rate.
- [numberOfLoops](numberofloops.md): The number of times the audio repeats playback.
