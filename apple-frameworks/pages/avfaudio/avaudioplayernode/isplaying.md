> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayernode/isplaying](https://developer.apple.com/documentation/avfaudio/avaudioplayernode/isplaying)

# isPlaying (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the player is playing.

## Declaration

```swift
var isPlaying: Bool { get }
```

## See Also

### Controlling Playback

- [prepare(withFrameCount:)](prepare%28withframecount_%29.md): Prepares the file regions or buffers you schedule for playback.
- [playAudio()](playaudio%28%29.md)
- [playAudio(at:)](playaudio%28at_%29.md)
- [play()](play%28%29.md): Deprecated. Starts or resumes playback immediately.
- [play(at:)](play%28at_%29.md): Deprecated. Starts or resumes playback at a time you specify.
- [pause()](pause%28%29.md): Pauses the node’s playback.
- [stop()](stop%28%29.md): Clears all of the node’s events you schedule and stops playback.

# playing (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the player is playing.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isPlaying) BOOL playing;
```

## See Also

### Controlling Playback

- [prepareWithFrameCount:](prepare%28withframecount_%29.md): Prepares the file regions or buffers you schedule for playback.
- [playAndReturnError:](playaudio%28%29.md)
- [playAtTime:error:](playaudio%28at_%29.md)
- [play](play%28%29.md): Deprecated. Starts or resumes playback immediately.
- [playAtTime:](play%28at_%29.md): Deprecated. Starts or resumes playback at a time you specify.
- [pause](pause%28%29.md): Pauses the node’s playback.
- [stop](stop%28%29.md): Clears all of the node’s events you schedule and stops playback.
