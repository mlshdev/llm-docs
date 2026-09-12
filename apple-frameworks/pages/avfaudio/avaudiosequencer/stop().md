> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosequencer/stop()](https://developer.apple.com/documentation/avfaudio/avaudiosequencer/stop())

# stop() (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Stops the sequencer’s player.

## Declaration

```swift
func stop()
```

<a id="Discussion"></a>

## Discussion

Stopping the player leaves it in an unprerolled state, but stores the playback position so that a subsequent call to [start()](start%28%29.md) resumes where it stops. This action doesn’t stop an audio engine you associate with it.

## See Also

### Operating an Audio Sequencer

- [prepareToPlay()](preparetoplay%28%29.md): Gets ready to play the sequence by prerolling all events.
- [start()](start%28%29.md): Starts the sequencer’s player.

# stop (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Stops the sequencer’s player.

## Declaration

```objectivec
- (void) stop;
```

<a id="Discussion"></a>

## Discussion

Stopping the player leaves it in an unprerolled state, but stores the playback position so that a subsequent call to [startAndReturnError:](start%28%29.md) resumes where it stops. This action doesn’t stop an audio engine you associate with it.

## See Also

### Operating an Audio Sequencer

- [prepareToPlay](preparetoplay%28%29.md): Gets ready to play the sequence by prerolling all events.
- [startAndReturnError:](start%28%29.md): Starts the sequencer’s player.
