> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/seek(to:)-9h9qr](https://developer.apple.com/documentation/avfoundation/avplayer/seek(to:)-9h9qr)

# seek(to:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Requests that the player seek to a specified date.

## Declaration

```swift
nonisolated func seek(to date: Date)
```

## Parameters

- `date`: The time to which to seek.

<a id="Discussion"></a>

## Discussion

The time to which the player seeks may differ from the specified `date` for efficiency. For sample accurate seeking see [seek(to:toleranceBefore:toleranceAfter:)](seek%28to_tolerancebefore_toleranceafter_%29.md).

## See Also

### Seeking through media

- [seek(to:)](seek%28to_%29-87h2r.md): Requests that the player seek to a specified time.
- [seek(to:completionHandler:)](seek%28to_completionhandler_%29-75bls.md): Requests that the player seek to a specified time, and to notify you when the seek is complete.
- [seek(to:toleranceBefore:toleranceAfter:)](seek%28to_tolerancebefore_toleranceafter_%29.md): Requests that the player seek to a specified time with the amount of accuracy specified by the time tolerance values.
- [seek(to:toleranceBefore:toleranceAfter:completionHandler:)](seek%28to_tolerancebefore_toleranceafter_completionhandler_%29.md): Requests that the player seek to a specified time with the amount of accuracy specified by the time tolerance values, and to notify you when the seek is complete.
- [seek(to:completionHandler:)](seek%28to_completionhandler_%29-wr1l.md): Requests that the player seek to a specified date, and to notify you when the seek is complete.

# seekToDate: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Requests that the player seek to a specified date.

## Declaration

```objectivec
- (void) seekToDate:(NSDate *) date;
```

## Parameters

- `date`: The time to which to seek.

<a id="Discussion"></a>

## Discussion

The time to which the player seeks may differ from the specified `date` for efficiency. For sample accurate seeking see [seekToTime:toleranceBefore:toleranceAfter:](seek%28to_tolerancebefore_toleranceafter_%29.md).

## See Also

### Seeking through media

- [seekToTime:](seek%28to_%29-87h2r.md): Requests that the player seek to a specified time.
- [seekToTime:completionHandler:](seek%28to_completionhandler_%29-75bls.md): Requests that the player seek to a specified time, and to notify you when the seek is complete.
- [seekToTime:toleranceBefore:toleranceAfter:](seek%28to_tolerancebefore_toleranceafter_%29.md): Requests that the player seek to a specified time with the amount of accuracy specified by the time tolerance values.
- [seekToTime:toleranceBefore:toleranceAfter:completionHandler:](seek%28to_tolerancebefore_toleranceafter_completionhandler_%29.md): Requests that the player seek to a specified time with the amount of accuracy specified by the time tolerance values, and to notify you when the seek is complete.
- [seekToDate:completionHandler:](seek%28to_completionhandler_%29-wr1l.md): Requests that the player seek to a specified date, and to notify you when the seek is complete.
