> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmidiplayercompletionhandler](https://developer.apple.com/documentation/avfaudio/avmidiplayercompletionhandler)

# AVMIDIPlayerCompletionHandler (Swift)

**Framework:** AVFAudio  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A callback the system invokes when MIDI playback completes.

## Declaration

```swift
typealias AVMIDIPlayerCompletionHandler = () -> Void
```

## See Also

### Controlling playback

- [prepareToPlay()](avmidiplayer/preparetoplay%28%29.md): Prepares the player to play the sequence by prerolling all events.
- [play(\_:)](avmidiplayer/play%28__%29.md): Plays the MIDI sequence.
- [stop()](avmidiplayer/stop%28%29.md): Stops playing the sequence.
- [isPlaying](avmidiplayer/isplaying.md): A Boolean value that indicates whether the sequence is playing.

# AVMIDIPlayerCompletionHandler (Objective-C)

**Framework:** AVFAudio  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A callback the system invokes when MIDI playback completes.

## Declaration

```objectivec
typedef void (^)(void) AVMIDIPlayerCompletionHandler;
```

## See Also

### Controlling playback

- [prepareToPlay](avmidiplayer/preparetoplay%28%29.md): Prepares the player to play the sequence by prerolling all events.
- [play:](avmidiplayer/play%28__%29.md): Plays the MIDI sequence.
- [stop](avmidiplayer/stop%28%29.md): Stops playing the sequence.
- [playing](avmidiplayer/isplaying.md): A Boolean value that indicates whether the sequence is playing.
