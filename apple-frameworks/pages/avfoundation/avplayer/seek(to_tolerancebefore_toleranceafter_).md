> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/seek(to:tolerancebefore:toleranceafter:)](https://developer.apple.com/documentation/avfoundation/avplayer/seek(to:tolerancebefore:toleranceafter:))

# seek(to:toleranceBefore:toleranceAfter:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Requests that the player seek to a specified time with the amount of accuracy specified by the time tolerance values.

## Declaration

```swift
nonisolated func seek(to time: CMTime, toleranceBefore: CMTime, toleranceAfter: CMTime)
```

## Parameters

- `time`: A time to seek to.
- `toleranceBefore`: A tolerance before the target time to allow.
- `toleranceAfter`: A tolerance after the target time to allow.

## Mentioned In

- [Controlling the transport behavior of a player](../controlling-the-transport-behavior-of-a-player.md)

<a id="Discussion"></a>

## Discussion

The player seeks within the range `[time-beforeTolerance, time+afterTolerance]`, and may differ from the specified time for efficiency. You can request sample accurate seeking by passing a time value of`kCMTimeZero` for both `toleranceBefore` and `toleranceAfter`. Sample accurate seeking may incur additional decoding delay which can impact seeking performance.

Passing `kCMTimePositiveInfinity` for both `toleranceBefore` and `toleranceAfter` is the same as messaging [seek(to:)](seek%28to_%29-87h2r.md) directly.

## See Also

### Seeking through media

- [seek(to:)](seek%28to_%29-87h2r.md): Requests that the player seek to a specified time.
- [seek(to:completionHandler:)](seek%28to_completionhandler_%29-75bls.md): Requests that the player seek to a specified time, and to notify you when the seek is complete.
- [seek(to:toleranceBefore:toleranceAfter:completionHandler:)](seek%28to_tolerancebefore_toleranceafter_completionhandler_%29.md): Requests that the player seek to a specified time with the amount of accuracy specified by the time tolerance values, and to notify you when the seek is complete.
- [seek(to:)](seek%28to_%29-9h9qr.md): Requests that the player seek to a specified date.
- [seek(to:completionHandler:)](seek%28to_completionhandler_%29-wr1l.md): Requests that the player seek to a specified date, and to notify you when the seek is complete.

# seekToTime:toleranceBefore:toleranceAfter: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Requests that the player seek to a specified time with the amount of accuracy specified by the time tolerance values.

## Declaration

```objectivec
- (void) seekToTime:(CMTime) time toleranceBefore:(CMTime) toleranceBefore toleranceAfter:(CMTime) toleranceAfter;
```

## Parameters

- `time`: A time to seek to.
- `toleranceBefore`: A tolerance before the target time to allow.
- `toleranceAfter`: A tolerance after the target time to allow.

## Mentioned In

- [Controlling the transport behavior of a player](../controlling-the-transport-behavior-of-a-player.md)

<a id="Discussion"></a>

## Discussion

The player seeks within the range `[time-beforeTolerance, time+afterTolerance]`, and may differ from the specified time for efficiency. You can request sample accurate seeking by passing a time value of`kCMTimeZero` for both `toleranceBefore` and `toleranceAfter`. Sample accurate seeking may incur additional decoding delay which can impact seeking performance.

Passing `kCMTimePositiveInfinity` for both `toleranceBefore` and `toleranceAfter` is the same as messaging [seekToTime:](seek%28to_%29-87h2r.md) directly.

## See Also

### Seeking through media

- [seekToTime:](seek%28to_%29-87h2r.md): Requests that the player seek to a specified time.
- [seekToTime:completionHandler:](seek%28to_completionhandler_%29-75bls.md): Requests that the player seek to a specified time, and to notify you when the seek is complete.
- [seekToTime:toleranceBefore:toleranceAfter:completionHandler:](seek%28to_tolerancebefore_toleranceafter_completionhandler_%29.md): Requests that the player seek to a specified time with the amount of accuracy specified by the time tolerance values, and to notify you when the seek is complete.
- [seekToDate:](seek%28to_%29-9h9qr.md): Requests that the player seek to a specified date.
- [seekToDate:completionHandler:](seek%28to_completionhandler_%29-wr1l.md): Requests that the player seek to a specified date, and to notify you when the seek is complete.
