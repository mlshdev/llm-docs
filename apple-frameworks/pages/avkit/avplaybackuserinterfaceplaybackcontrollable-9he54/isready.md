> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplaybackuserinterfaceplaybackcontrollable-9he54/isready](https://developer.apple.com/documentation/avkit/avplaybackuserinterfaceplaybackcontrollable-9he54/isready)

# isReady

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Indicates whether the media source is ready to begin playback.

## Declaration

```swift
@MainActor var isReady: Bool { get }
```

<a id="discussion"></a>

## Discussion

This property should transition from `false` to `true` once the source has loaded enough data to start playback, and should not revert. Use [isBuffering](isbuffering.md) to track temporary stalls that may occur after this point.
