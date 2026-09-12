> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayer/stop()](https://developer.apple.com/documentation/avfaudio/avaudioplayer/stop())

# stop() (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 2.2+ · iPadOS 2.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Stops playback and undoes the setup the system requires for playback.

## Declaration

```swift
func stop()
```

<a id="Discussion"></a>

## Discussion

Calling this method undoes the resource allocation the system performs in [prepareToPlay()](preparetoplay%28%29.md) or [play()](play%28%29.md). It doesn’t reset the player’s [currentTime](currenttime.md) value to `0`, so playback resumes from where it stops.

## See Also

### Controlling playback

- [prepareToPlay()](preparetoplay%28%29.md): Prepares the player for audio playback.
- [play()](play%28%29.md): Plays audio asynchronously.
- [play(atTime:)](play%28attime_%29.md): Plays audio asynchronously, starting at a specified point in the audio output device’s timeline.
- [pause()](pause%28%29.md): Pauses audio playback.
- [isPlaying](isplaying.md): A Boolean value that indicates whether the player is currently playing audio.

# stop (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 2.2+ · iPadOS 2.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Stops playback and undoes the setup the system requires for playback.

## Declaration

```objectivec
- (void) stop;
```

<a id="Discussion"></a>

## Discussion

Calling this method undoes the resource allocation the system performs in [prepareToPlay](preparetoplay%28%29.md) or [play](play%28%29.md). It doesn’t reset the player’s [currentTime](currenttime.md) value to `0`, so playback resumes from where it stops.

## See Also

### Controlling playback

- [prepareToPlay](preparetoplay%28%29.md): Prepares the player for audio playback.
- [play](play%28%29.md): Plays audio asynchronously.
- [playAtTime:](play%28attime_%29.md): Plays audio asynchronously, starting at a specified point in the audio output device’s timeline.
- [pause](pause%28%29.md): Pauses audio playback.
- [playing](isplaying.md): A Boolean value that indicates whether the player is currently playing audio.
