> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayernode/playaudio()](https://developer.apple.com/documentation/avfaudio/avaudioplayernode/playaudio())

# playAudio() (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```swift
func playAudio() throws
```

<a id="discussion"></a>

## Discussion

Start or resume playback immediately.

equivalent to playAtTime:nil error:&error

## See Also

### Controlling Playback

- [prepare(withFrameCount:)](prepare%28withframecount_%29.md): Prepares the file regions or buffers you schedule for playback.
- [playAudio(at:)](playaudio%28at_%29.md)
- [play()](play%28%29.md): Deprecated. Starts or resumes playback immediately.
- [play(at:)](play%28at_%29.md): Deprecated. Starts or resumes playback at a time you specify.
- [isPlaying](isplaying.md): A Boolean value that indicates whether the player is playing.
- [pause()](pause%28%29.md): Pauses the node’s playback.
- [stop()](stop%28%29.md): Clears all of the node’s events you schedule and stops playback.

# playAndReturnError: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```objectivec
- (BOOL) playAndReturnError:(NSError **) outError;
```

## Parameters

- `outError`: On exit, if an error occurs, a description of the error.

<a id="return-value"></a>

## Return Value

YES for success

<a id="discussion"></a>

## Discussion

Start or resume playback immediately.

equivalent to playAtTime:nil error:&error

## See Also

### Controlling Playback

- [prepareWithFrameCount:](prepare%28withframecount_%29.md): Prepares the file regions or buffers you schedule for playback.
- [playAtTime:error:](playaudio%28at_%29.md)
- [play](play%28%29.md): Deprecated. Starts or resumes playback immediately.
- [playAtTime:](play%28at_%29.md): Deprecated. Starts or resumes playback at a time you specify.
- [playing](isplaying.md): A Boolean value that indicates whether the player is playing.
- [pause](pause%28%29.md): Pauses the node’s playback.
- [stop](stop%28%29.md): Clears all of the node’s events you schedule and stops playback.
