> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/isplaybackbufferfull](https://developer.apple.com/documentation/avfoundation/avplayeritem/isplaybackbufferfull)

# isPlaybackBufferFull (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that indicates whether the internal media buffer is full and that further I/O is suspended.

## Declaration

```swift
nonisolated var isPlaybackBufferFull: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Despite the playback buffer reaching capacity there might not exist sufficient statistical data to support a [isPlaybackLikelyToKeepUp](isplaybacklikelytokeepup.md) prediction of [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Determining buffering status

- [isPlaybackLikelyToKeepUp](isplaybacklikelytokeepup.md): A Boolean value that indicates whether the item will likely play through without stalling.
- [isPlaybackBufferEmpty](isplaybackbufferempty.md): A Boolean value that indicates whether playback has consumed all buffered media and that playback will stall or end.

# playbackBufferFull (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that indicates whether the internal media buffer is full and that further I/O is suspended.

## Declaration

```objectivec
@property (readonly, getter=isPlaybackBufferFull) BOOL playbackBufferFull;
```

<a id="Discussion"></a>

## Discussion

Despite the playback buffer reaching capacity there might not exist sufficient statistical data to support a [playbackLikelyToKeepUp](isplaybacklikelytokeepup.md) prediction of [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Determining buffering status

- [playbackLikelyToKeepUp](isplaybacklikelytokeepup.md): A Boolean value that indicates whether the item will likely play through without stalling.
- [playbackBufferEmpty](isplaybackbufferempty.md): A Boolean value that indicates whether playback has consumed all buffered media and that playback will stall or end.
