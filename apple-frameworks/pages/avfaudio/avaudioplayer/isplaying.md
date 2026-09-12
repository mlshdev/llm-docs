> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayer/isplaying](https://developer.apple.com/documentation/avfaudio/avaudioplayer/isplaying)

# isPlaying (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 2.2+ · iPadOS 2.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that indicates whether the player is currently playing audio.

## Declaration

```swift
var isPlaying: Bool { get }
```

## See Also

### Controlling playback

- [prepareToPlay()](preparetoplay%28%29.md): Prepares the player for audio playback.
- [play()](play%28%29.md): Plays audio asynchronously.
- [play(atTime:)](play%28attime_%29.md): Plays audio asynchronously, starting at a specified point in the audio output device’s timeline.
- [pause()](pause%28%29.md): Pauses audio playback.
- [stop()](stop%28%29.md): Stops playback and undoes the setup the system requires for playback.

# playing (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 2.2+ · iPadOS 2.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that indicates whether the player is currently playing audio.

## Declaration

```objectivec
@property (readonly, getter=isPlaying) BOOL playing;
```

## See Also

### Controlling playback

- [prepareToPlay](preparetoplay%28%29.md): Prepares the player for audio playback.
- [play](play%28%29.md): Plays audio asynchronously.
- [playAtTime:](play%28attime_%29.md): Plays audio asynchronously, starting at a specified point in the audio output device’s timeline.
- [pause](pause%28%29.md): Pauses audio playback.
- [stop](stop%28%29.md): Stops playback and undoes the setup the system requires for playback.
