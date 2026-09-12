> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/seek(to:)-87h2r](https://developer.apple.com/documentation/avfoundation/avplayer/seek(to:)-87h2r)

# seek(to:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Requests that the player seek to a specified time.

## Declaration

```swift
nonisolated func seek(to time: CMTime)
```

## Parameters

- `time`: The time to which to seek.

## Mentioned In

- [Controlling the transport behavior of a player](../controlling-the-transport-behavior-of-a-player.md)
- [Presenting chapter markers](../presenting-chapter-markers.md)

<a id="Discussion"></a>

## Discussion

The time to which the player seeks may differ from the specified requested time for efficiency. For sample accurate seeking see [seek(to:toleranceBefore:toleranceAfter:)](seek%28to_tolerancebefore_toleranceafter_%29.md).

## See Also

### Seeking through media

- [seek(to:completionHandler:)](seek%28to_completionhandler_%29-75bls.md): Requests that the player seek to a specified time, and to notify you when the seek is complete.
- [seek(to:toleranceBefore:toleranceAfter:)](seek%28to_tolerancebefore_toleranceafter_%29.md): Requests that the player seek to a specified time with the amount of accuracy specified by the time tolerance values.
- [seek(to:toleranceBefore:toleranceAfter:completionHandler:)](seek%28to_tolerancebefore_toleranceafter_completionhandler_%29.md): Requests that the player seek to a specified time with the amount of accuracy specified by the time tolerance values, and to notify you when the seek is complete.
- [seek(to:)](seek%28to_%29-9h9qr.md): Requests that the player seek to a specified date.
- [seek(to:completionHandler:)](seek%28to_completionhandler_%29-wr1l.md): Requests that the player seek to a specified date, and to notify you when the seek is complete.

# seekToTime: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Requests that the player seek to a specified time.

## Declaration

```objectivec
- (void) seekToTime:(CMTime) time;
```

## Parameters

- `time`: The time to which to seek.

## Mentioned In

- [Controlling the transport behavior of a player](../controlling-the-transport-behavior-of-a-player.md)
- [Presenting chapter markers](../presenting-chapter-markers.md)

<a id="Discussion"></a>

## Discussion

The time to which the player seeks may differ from the specified requested time for efficiency. For sample accurate seeking see [seekToTime:toleranceBefore:toleranceAfter:](seek%28to_tolerancebefore_toleranceafter_%29.md).

## See Also

### Seeking through media

- [seekToTime:completionHandler:](seek%28to_completionhandler_%29-75bls.md): Requests that the player seek to a specified time, and to notify you when the seek is complete.
- [seekToTime:toleranceBefore:toleranceAfter:](seek%28to_tolerancebefore_toleranceafter_%29.md): Requests that the player seek to a specified time with the amount of accuracy specified by the time tolerance values.
- [seekToTime:toleranceBefore:toleranceAfter:completionHandler:](seek%28to_tolerancebefore_toleranceafter_completionhandler_%29.md): Requests that the player seek to a specified time with the amount of accuracy specified by the time tolerance values, and to notify you when the seek is complete.
- [seekToDate:](seek%28to_%29-9h9qr.md): Requests that the player seek to a specified date.
- [seekToDate:completionHandler:](seek%28to_completionhandler_%29-wr1l.md): Requests that the player seek to a specified date, and to notify you when the seek is complete.
