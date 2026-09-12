> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmidiplayer/play(_:)](https://developer.apple.com/documentation/avfaudio/avmidiplayer/play(_:))

# play(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Plays the MIDI sequence.

## Declaration

```swift
func play(_ completionHandler: (@Sendable () -> Void)? = nil)
```

```swift
func play() async
```

## Parameters

- `completionHandler`: A closure the system calls when playback completes.

## Topics

### Closures

- [AVMIDIPlayerCompletionHandler](../avmidiplayercompletionhandler.md): A callback the system invokes when MIDI playback completes.

## See Also

### Controlling playback

- [prepareToPlay()](preparetoplay%28%29.md): Prepares the player to play the sequence by prerolling all events.
- [AVMIDIPlayerCompletionHandler](../avmidiplayercompletionhandler.md): A callback the system invokes when MIDI playback completes.
- [stop()](stop%28%29.md): Stops playing the sequence.
- [isPlaying](isplaying.md): A Boolean value that indicates whether the sequence is playing.

# play: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Plays the MIDI sequence.

## Declaration

```objectivec
- (void) play:(AVMIDIPlayerCompletionHandler) completionHandler;
```

## Parameters

- `completionHandler`: A closure the system calls when playback completes.

## Topics

### Closures

- [AVMIDIPlayerCompletionHandler](../avmidiplayercompletionhandler.md): A callback the system invokes when MIDI playback completes.

## See Also

### Controlling playback

- [prepareToPlay](preparetoplay%28%29.md): Prepares the player to play the sequence by prerolling all events.
- [AVMIDIPlayerCompletionHandler](../avmidiplayercompletionhandler.md): A callback the system invokes when MIDI playback completes.
- [stop](stop%28%29.md): Stops playing the sequence.
- [playing](isplaying.md): A Boolean value that indicates whether the sequence is playing.
