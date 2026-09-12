> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/seek(to:tolerancebefore:toleranceafter:)](https://developer.apple.com/documentation/avfoundation/avplayeritem/seek(to:tolerancebefore:toleranceafter:))

# seek(to:toleranceBefore:toleranceAfter:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 11.0) · iPadOS 4.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0)

Sets the current playback time within a specified time bound.

> Use [seek(to:toleranceBefore:toleranceAfter:completionHandler:)](seek%28to_tolerancebefore_toleranceafter_completionhandler_%29.md) instead.

## Declaration

```swift
func seek(to time: CMTime, toleranceBefore: CMTime, toleranceAfter: CMTime)
```

## Parameters

- `time`: The time to which you would like to move the playback cursor.
- `toleranceBefore`: The tolerance allowed before `time`.
- `toleranceAfter`: The tolerance allowed after `time`.

<a id="Discussion"></a>

## Discussion

The time seeked to will be within the range `[time-beforeTolerance, time+afterTolerance]`, and may differ from the specified time for efficiency. If you pass `kCMTimeZero` for both `toleranceBefore` and `toleranceAfter` (to request sample accurate seeking), you may incur additional decoding delay that impacts seeking performance.

Passing `kCMTimePositiveInfinity` for both `toleranceBefore` and `toleranceAfter` is the same as messaging [seek(to:)](seek%28to_%29-1dpto.md) directly.

## See Also

### Related Documentation

- [seek(to:toleranceBefore:toleranceAfter:completionHandler:)](seek%28to_tolerancebefore_toleranceafter_completionhandler_%29.md): Sets the current playback time within a specified time bound and invokes the specified block when the seek operation completes or is interrupted.
- [seek(to:completionHandler:)](seek%28to_completionhandler_%29-91gnw.md): Sets the current playback time to the specified time.

### Seeking through media

- [seek(to:)](seek%28to_%29-1dpto.md): Deprecated. Sets the current playback time to the specified time.
- [seek(to:)](seek%28to_%29-5rt4x.md): Deprecated. Sets the current playback time to the time specified by the date object.
- [seek(to:)](seek%28to_%29-3s9d8.md): Deprecated. Sets the current playback time to the time specified by the date object.

# seekToTime:toleranceBefore:toleranceAfter: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 11.0) · iPadOS 4.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0)

Sets the current playback time within a specified time bound.

> Use [seekToTime:toleranceBefore:toleranceAfter:completionHandler:](seek%28to_tolerancebefore_toleranceafter_completionhandler_%29.md) instead.

## Declaration

```objectivec
- (void) seekToTime:(CMTime) time toleranceBefore:(CMTime) toleranceBefore toleranceAfter:(CMTime) toleranceAfter;
```

## Parameters

- `time`: The time to which you would like to move the playback cursor.
- `toleranceBefore`: The tolerance allowed before `time`.
- `toleranceAfter`: The tolerance allowed after `time`.

<a id="Discussion"></a>

## Discussion

The time seeked to will be within the range `[time-beforeTolerance, time+afterTolerance]`, and may differ from the specified time for efficiency. If you pass `kCMTimeZero` for both `toleranceBefore` and `toleranceAfter` (to request sample accurate seeking), you may incur additional decoding delay that impacts seeking performance.

Passing `kCMTimePositiveInfinity` for both `toleranceBefore` and `toleranceAfter` is the same as messaging [seekToTime:](seek%28to_%29-1dpto.md) directly.

## See Also

### Related Documentation

- [seekToTime:toleranceBefore:toleranceAfter:completionHandler:](seek%28to_tolerancebefore_toleranceafter_completionhandler_%29.md): Sets the current playback time within a specified time bound and invokes the specified block when the seek operation completes or is interrupted.
- [seekToTime:completionHandler:](seek%28to_completionhandler_%29-91gnw.md): Sets the current playback time to the specified time.

### Seeking through media

- [seekToTime:](seek%28to_%29-1dpto.md): Deprecated. Sets the current playback time to the specified time.
- [seekToDate:](seek%28to_%29-3s9d8.md): Deprecated. Sets the current playback time to the time specified by the date object.
