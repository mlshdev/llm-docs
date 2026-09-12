> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/isplaybacklikelytokeepup](https://developer.apple.com/documentation/avfoundation/avplayeritem/isplaybacklikelytokeepup)

# isPlaybackLikelyToKeepUp (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that indicates whether the item will likely play through without stalling.

## Declaration

```swift
nonisolated var isPlaybackLikelyToKeepUp: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property communicates a prediction of playability. Factors considered in this prediction include I/O throughput and media decode performance. It is possible for `playbackLikelyToKeepUp` to indicate [false](https://developer.apple.com/documentation/swift/false) while the property [isPlaybackBufferFull](isplaybackbufferfull.md) indicates [true](https://developer.apple.com/documentation/swift/true). In this event the playback buffer has reached capacity but there isn’t the statistical data to support a prediction that playback is likely to keep up in the future. It is up to you to decide whether to continue media playback.

## See Also

### Determining buffering status

- [isPlaybackBufferFull](isplaybackbufferfull.md): A Boolean value that indicates whether the internal media buffer is full and that further I/O is suspended.
- [isPlaybackBufferEmpty](isplaybackbufferempty.md): A Boolean value that indicates whether playback has consumed all buffered media and that playback will stall or end.

# playbackLikelyToKeepUp (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that indicates whether the item will likely play through without stalling.

## Declaration

```objectivec
@property (readonly, getter=isPlaybackLikelyToKeepUp) BOOL playbackLikelyToKeepUp;
```

<a id="Discussion"></a>

## Discussion

This property communicates a prediction of playability. Factors considered in this prediction include I/O throughput and media decode performance. It is possible for `playbackLikelyToKeepUp` to indicate [false](https://developer.apple.com/documentation/swift/false) while the property [playbackBufferFull](isplaybackbufferfull.md) indicates [true](https://developer.apple.com/documentation/swift/true). In this event the playback buffer has reached capacity but there isn’t the statistical data to support a prediction that playback is likely to keep up in the future. It is up to you to decide whether to continue media playback.

## See Also

### Determining buffering status

- [playbackBufferFull](isplaybackbufferfull.md): A Boolean value that indicates whether the internal media buffer is full and that further I/O is suspended.
- [playbackBufferEmpty](isplaybackbufferempty.md): A Boolean value that indicates whether playback has consumed all buffered media and that playback will stall or end.
