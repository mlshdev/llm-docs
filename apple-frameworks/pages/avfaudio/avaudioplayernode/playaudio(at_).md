> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayernode/playaudio(at:)](https://developer.apple.com/documentation/avfaudio/avaudioplayernode/playaudio(at:))

# playAudio(at:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```swift
func playAudio(at when: AVAudioTime?) throws
```

## Parameters

- `when`: The node time at which to start or resume playback. nil signifies “now”.

<a id="discussion"></a>

## Discussion

Start or resume playback at a specific time.

This node is initially paused. Requests to play buffers or file segments are enqueued, and any necessary decoding begins immediately. Playback does not begin, however, until the player has started playing, via this method.

Note that providing an AVAudioTime which is past (before lastRenderTime) will cause the player to begin playback immediately.

E.g. To start a player X seconds in future:

## See Also

### Controlling Playback

- [prepare(withFrameCount:)](prepare%28withframecount_%29.md): Prepares the file regions or buffers you schedule for playback.
- [playAudio()](playaudio%28%29.md)
- [play()](play%28%29.md): Deprecated. Starts or resumes playback immediately.
- [play(at:)](play%28at_%29.md): Deprecated. Starts or resumes playback at a time you specify.
- [isPlaying](isplaying.md): A Boolean value that indicates whether the player is playing.
- [pause()](pause%28%29.md): Pauses the node’s playback.
- [stop()](stop%28%29.md): Clears all of the node’s events you schedule and stops playback.

# playAtTime:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```objectivec
- (BOOL) playAtTime:(AVAudioTime *) when error:(NSError **) outError;
```

## Parameters

- `when`: The node time at which to start or resume playback. nil signifies “now”.
- `outError`: On exit, if an error occurs, a description of the error.

<a id="return-value"></a>

## Return Value

YES for success

<a id="discussion"></a>

## Discussion

Start or resume playback at a specific time.

This node is initially paused. Requests to play buffers or file segments are enqueued, and any necessary decoding begins immediately. Playback does not begin, however, until the player has started playing, via this method.

Note that providing an AVAudioTime which is past (before lastRenderTime) will cause the player to begin playback immediately.

E.g. To start a player X seconds in future:

## See Also

### Controlling Playback

- [prepareWithFrameCount:](prepare%28withframecount_%29.md): Prepares the file regions or buffers you schedule for playback.
- [playAndReturnError:](playaudio%28%29.md)
- [play](play%28%29.md): Deprecated. Starts or resumes playback immediately.
- [playAtTime:](play%28at_%29.md): Deprecated. Starts or resumes playback at a time you specify.
- [playing](isplaying.md): A Boolean value that indicates whether the player is playing.
- [pause](pause%28%29.md): Pauses the node’s playback.
- [stop](stop%28%29.md): Clears all of the node’s events you schedule and stops playback.
