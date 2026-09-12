> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayer/play()](https://developer.apple.com/documentation/avfaudio/avaudioplayer/play())

# play() (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 2.2+ · iPadOS 2.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Plays audio asynchronously.

## Declaration

```swift
func play() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if playback starts successfully; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Calling this method implicitly calls [prepareToPlay()](preparetoplay%28%29.md) if the audio player is unprepared for playback.

## See Also

### Controlling playback

- [prepareToPlay()](preparetoplay%28%29.md): Prepares the player for audio playback.
- [play(atTime:)](play%28attime_%29.md): Plays audio asynchronously, starting at a specified point in the audio output device’s timeline.
- [pause()](pause%28%29.md): Pauses audio playback.
- [stop()](stop%28%29.md): Stops playback and undoes the setup the system requires for playback.
- [isPlaying](isplaying.md): A Boolean value that indicates whether the player is currently playing audio.

# play (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 2.2+ · iPadOS 2.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Plays audio asynchronously.

## Declaration

```objectivec
- (BOOL) play;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if playback starts successfully; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Calling this method implicitly calls [prepareToPlay](preparetoplay%28%29.md) if the audio player is unprepared for playback.

## See Also

### Controlling playback

- [prepareToPlay](preparetoplay%28%29.md): Prepares the player for audio playback.
- [playAtTime:](play%28attime_%29.md): Plays audio asynchronously, starting at a specified point in the audio output device’s timeline.
- [pause](pause%28%29.md): Pauses audio playback.
- [stop](stop%28%29.md): Stops playback and undoes the setup the system requires for playback.
- [playing](isplaying.md): A Boolean value that indicates whether the player is currently playing audio.
