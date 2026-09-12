> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/seek(to:)-1dpto](https://developer.apple.com/documentation/avfoundation/avplayeritem/seek(to:)-1dpto)

# seek(to:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 11.0) · iPadOS 4.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0)

Sets the current playback time to the specified time.

> Use [seek(to:completionHandler:)](seek%28to_completionhandler_%29-91gnw.md) instead.

## Declaration

```swift
@MainActor func seek(to time: CMTime)
```

## Parameters

- `time`: The time to which to seek.

<a id="Discussion"></a>

## Discussion

The time seeked to may differ from the specified time for efficiency. For sample accurate seeking see [seek(to:toleranceBefore:toleranceAfter:)](seek%28to_tolerancebefore_toleranceafter_%29.md).

## See Also

### Related Documentation

- [seek(to:toleranceBefore:toleranceAfter:completionHandler:)](seek%28to_tolerancebefore_toleranceafter_completionhandler_%29.md): Sets the current playback time within a specified time bound and invokes the specified block when the seek operation completes or is interrupted.
- [seek(to:completionHandler:)](seek%28to_completionhandler_%29-91gnw.md): Sets the current playback time to the specified time.

### Seeking through media

- [seek(to:toleranceBefore:toleranceAfter:)](seek%28to_tolerancebefore_toleranceafter_%29.md): Deprecated. Sets the current playback time within a specified time bound.
- [seek(to:)](seek%28to_%29-5rt4x.md): Deprecated. Sets the current playback time to the time specified by the date object.
- [seek(to:)](seek%28to_%29-3s9d8.md): Deprecated. Sets the current playback time to the time specified by the date object.

# seekToTime: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 11.0) · iPadOS 4.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0)

Sets the current playback time to the specified time.

> Use [seekToTime:completionHandler:](seek%28to_completionhandler_%29-91gnw.md) instead.

## Declaration

```objectivec
- (void) seekToTime:(CMTime) time;
```

## Parameters

- `time`: The time to which to seek.

<a id="Discussion"></a>

## Discussion

The time seeked to may differ from the specified time for efficiency. For sample accurate seeking see [seekToTime:toleranceBefore:toleranceAfter:](seek%28to_tolerancebefore_toleranceafter_%29.md).

## See Also

### Related Documentation

- [seekToTime:toleranceBefore:toleranceAfter:completionHandler:](seek%28to_tolerancebefore_toleranceafter_completionhandler_%29.md): Sets the current playback time within a specified time bound and invokes the specified block when the seek operation completes or is interrupted.
- [seekToTime:completionHandler:](seek%28to_completionhandler_%29-91gnw.md): Sets the current playback time to the specified time.

### Seeking through media

- [seekToTime:toleranceBefore:toleranceAfter:](seek%28to_tolerancebefore_toleranceafter_%29.md): Deprecated. Sets the current playback time within a specified time bound.
- [seekToDate:](seek%28to_%29-3s9d8.md): Deprecated. Sets the current playback time to the time specified by the date object.
