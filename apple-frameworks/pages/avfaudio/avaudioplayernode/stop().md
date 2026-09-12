> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayernode/stop()](https://developer.apple.com/documentation/avfaudio/avaudioplayernode/stop())

# stop() (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Clears all of the node’s events you schedule and stops playback.

## Declaration

```swift
func stop()
```

<a id="Discussion"></a>

## Discussion

Clears all events you schedule, including any events in the middle of playing. It resets the node’s sample time to `0`, and doesn’t proceed until the node starts again through [play()](play%28%29.md) or [play(at:)](play%28at_%29.md).

Pausing or stopping all of the players you connect to an engine doesn’t pause or stop the engine or the underlying hardware. You must explicitly pause or stop the engine for the hardware to stop. When your app doesn’t need to play audio, pause or stop the engine to minimize power consumption.

## See Also

### Controlling Playback

- [prepare(withFrameCount:)](prepare%28withframecount_%29.md): Prepares the file regions or buffers you schedule for playback.
- [playAudio()](playaudio%28%29.md)
- [playAudio(at:)](playaudio%28at_%29.md)
- [play()](play%28%29.md): Deprecated. Starts or resumes playback immediately.
- [play(at:)](play%28at_%29.md): Deprecated. Starts or resumes playback at a time you specify.
- [isPlaying](isplaying.md): A Boolean value that indicates whether the player is playing.
- [pause()](pause%28%29.md): Pauses the node’s playback.

# stop (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Clears all of the node’s events you schedule and stops playback.

## Declaration

```objectivec
- (void) stop;
```

<a id="Discussion"></a>

## Discussion

Clears all events you schedule, including any events in the middle of playing. It resets the node’s sample time to `0`, and doesn’t proceed until the node starts again through [play](play%28%29.md) or [playAtTime:](play%28at_%29.md).

Pausing or stopping all of the players you connect to an engine doesn’t pause or stop the engine or the underlying hardware. You must explicitly pause or stop the engine for the hardware to stop. When your app doesn’t need to play audio, pause or stop the engine to minimize power consumption.

## See Also

### Controlling Playback

- [prepareWithFrameCount:](prepare%28withframecount_%29.md): Prepares the file regions or buffers you schedule for playback.
- [playAndReturnError:](playaudio%28%29.md)
- [playAtTime:error:](playaudio%28at_%29.md)
- [play](play%28%29.md): Deprecated. Starts or resumes playback immediately.
- [playAtTime:](play%28at_%29.md): Deprecated. Starts or resumes playback at a time you specify.
- [playing](isplaying.md): A Boolean value that indicates whether the player is playing.
- [pause](pause%28%29.md): Pauses the node’s playback.
