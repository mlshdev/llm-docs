> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/isplaybackbufferempty](https://developer.apple.com/documentation/avfoundation/avplayeritem/isplaybackbufferempty)

# isPlaybackBufferEmpty (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that indicates whether playback has consumed all buffered media and that playback will stall or end.

## Declaration

```swift
nonisolated var isPlaybackBufferEmpty: Bool { get }
```

## See Also

### Determining buffering status

- [isPlaybackLikelyToKeepUp](isplaybacklikelytokeepup.md): A Boolean value that indicates whether the item will likely play through without stalling.
- [isPlaybackBufferFull](isplaybackbufferfull.md): A Boolean value that indicates whether the internal media buffer is full and that further I/O is suspended.

# playbackBufferEmpty (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that indicates whether playback has consumed all buffered media and that playback will stall or end.

## Declaration

```objectivec
@property (readonly, getter=isPlaybackBufferEmpty) BOOL playbackBufferEmpty;
```

## See Also

### Determining buffering status

- [playbackLikelyToKeepUp](isplaybacklikelytokeepup.md): A Boolean value that indicates whether the item will likely play through without stalling.
- [playbackBufferFull](isplaybackbufferfull.md): A Boolean value that indicates whether the internal media buffer is full and that further I/O is suspended.
