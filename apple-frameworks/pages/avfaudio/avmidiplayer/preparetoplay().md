> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmidiplayer/preparetoplay()](https://developer.apple.com/documentation/avfaudio/avmidiplayer/preparetoplay())

# prepareToPlay() (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Prepares the player to play the sequence by prerolling all events.

## Declaration

```swift
func prepareToPlay()
```

<a id="Discussion"></a>

## Discussion

The system automatically calls this method on playback, but calling it in advance minimizes the delay between calling [play(\_:)](play%28__%29.md) and the start of sound output.

## See Also

### Controlling playback

- [play(\_:)](play%28__%29.md): Plays the MIDI sequence.
- [AVMIDIPlayerCompletionHandler](../avmidiplayercompletionhandler.md): A callback the system invokes when MIDI playback completes.
- [stop()](stop%28%29.md): Stops playing the sequence.
- [isPlaying](isplaying.md): A Boolean value that indicates whether the sequence is playing.

# prepareToPlay (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Prepares the player to play the sequence by prerolling all events.

## Declaration

```objectivec
- (void) prepareToPlay;
```

<a id="Discussion"></a>

## Discussion

The system automatically calls this method on playback, but calling it in advance minimizes the delay between calling [play:](play%28__%29.md) and the start of sound output.

## See Also

### Controlling playback

- [play:](play%28__%29.md): Plays the MIDI sequence.
- [AVMIDIPlayerCompletionHandler](../avmidiplayercompletionhandler.md): A callback the system invokes when MIDI playback completes.
- [stop](stop%28%29.md): Stops playing the sequence.
- [playing](isplaying.md): A Boolean value that indicates whether the sequence is playing.
