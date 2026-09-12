> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayer/pause()](https://developer.apple.com/documentation/avfaudio/avaudioplayer/pause())

# pause() (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 2.2+ · iPadOS 2.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Pauses audio playback.

## Declaration

```swift
func pause()
```

<a id="Discussion"></a>

## Discussion

Unlike calling [stop()](stop%28%29.md), pausing playback doesn’t deallocate hardware resources. It leaves the audio ready to resume playback from where it stops.

## See Also

### Controlling playback

- [prepareToPlay()](preparetoplay%28%29.md): Prepares the player for audio playback.
- [play()](play%28%29.md): Plays audio asynchronously.
- [play(atTime:)](play%28attime_%29.md): Plays audio asynchronously, starting at a specified point in the audio output device’s timeline.
- [stop()](stop%28%29.md): Stops playback and undoes the setup the system requires for playback.
- [isPlaying](isplaying.md): A Boolean value that indicates whether the player is currently playing audio.

# pause (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 2.2+ · iPadOS 2.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Pauses audio playback.

## Declaration

```objectivec
- (void) pause;
```

<a id="Discussion"></a>

## Discussion

Unlike calling [stop](stop%28%29.md), pausing playback doesn’t deallocate hardware resources. It leaves the audio ready to resume playback from where it stops.

## See Also

### Controlling playback

- [prepareToPlay](preparetoplay%28%29.md): Prepares the player for audio playback.
- [play](play%28%29.md): Plays audio asynchronously.
- [playAtTime:](play%28attime_%29.md): Plays audio asynchronously, starting at a specified point in the audio output device’s timeline.
- [stop](stop%28%29.md): Stops playback and undoes the setup the system requires for playback.
- [playing](isplaying.md): A Boolean value that indicates whether the player is currently playing audio.
