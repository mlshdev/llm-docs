> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayernode/prepare(withframecount:)](https://developer.apple.com/documentation/avfaudio/avaudioplayernode/prepare(withframecount:))

# prepare(withFrameCount:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Prepares the file regions or buffers you schedule for playback.

## Declaration

```swift
func prepare(withFrameCount frameCount: AVAudioFrameCount)
```

## Parameters

- `frameCount`: The number of sample frames of data to prepare.

## See Also

### Controlling Playback

- [playAudio()](playaudio%28%29.md)
- [playAudio(at:)](playaudio%28at_%29.md)
- [play()](play%28%29.md): Deprecated. Starts or resumes playback immediately.
- [play(at:)](play%28at_%29.md): Deprecated. Starts or resumes playback at a time you specify.
- [isPlaying](isplaying.md): A Boolean value that indicates whether the player is playing.
- [pause()](pause%28%29.md): Pauses the node’s playback.
- [stop()](stop%28%29.md): Clears all of the node’s events you schedule and stops playback.

# prepareWithFrameCount: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Prepares the file regions or buffers you schedule for playback.

## Declaration

```objectivec
- (void) prepareWithFrameCount:(AVAudioFrameCount) frameCount;
```

## Parameters

- `frameCount`: The number of sample frames of data to prepare.

## See Also

### Controlling Playback

- [playAndReturnError:](playaudio%28%29.md)
- [playAtTime:error:](playaudio%28at_%29.md)
- [play](play%28%29.md): Deprecated. Starts or resumes playback immediately.
- [playAtTime:](play%28at_%29.md): Deprecated. Starts or resumes playback at a time you specify.
- [playing](isplaying.md): A Boolean value that indicates whether the player is playing.
- [pause](pause%28%29.md): Pauses the node’s playback.
- [stop](stop%28%29.md): Clears all of the node’s events you schedule and stops playback.
