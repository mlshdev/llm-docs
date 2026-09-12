> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmidiplayer/isplaying](https://developer.apple.com/documentation/avfaudio/avmidiplayer/isplaying)

# isPlaying (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the sequence is playing.

## Declaration

```swift
var isPlaying: Bool { get }
```

## See Also

### Controlling playback

- [prepareToPlay()](preparetoplay%28%29.md): Prepares the player to play the sequence by prerolling all events.
- [play(\_:)](play%28__%29.md): Plays the MIDI sequence.
- [AVMIDIPlayerCompletionHandler](../avmidiplayercompletionhandler.md): A callback the system invokes when MIDI playback completes.
- [stop()](stop%28%29.md): Stops playing the sequence.

# playing (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the sequence is playing.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isPlaying) BOOL playing;
```

## See Also

### Controlling playback

- [prepareToPlay](preparetoplay%28%29.md): Prepares the player to play the sequence by prerolling all events.
- [play:](play%28__%29.md): Plays the MIDI sequence.
- [AVMIDIPlayerCompletionHandler](../avmidiplayercompletionhandler.md): A callback the system invokes when MIDI playback completes.
- [stop](stop%28%29.md): Stops playing the sequence.
