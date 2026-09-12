> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplaybackuserinterfaceplaybackcontrollable-9he54/isbuffering](https://developer.apple.com/documentation/avkit/avplaybackuserinterfaceplaybackcontrollable-9he54/isbuffering)

# isBuffering

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Indicates whether the media source is currently stalled waiting for data.

## Declaration

```swift
@MainActor var isBuffering: Bool { get }
```

<a id="discussion"></a>

## Discussion

Returns `true` when the source cannot immediately sustain continuous playback. This may occur both before [isReady](isready.md) becomes `true` during initial loading, and after [isReady](isready.md) is `true` during mid-playback stalls. When `true`, [isPlaying](isplaying.md) may still be `true`, indicating that playback should resume automatically once sufficient data is available.
