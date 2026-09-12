> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/seek(to:)-3s9d8](https://developer.apple.com/documentation/avfoundation/avplayeritem/seek(to:)-3s9d8)

# seek(to:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 11.0) · iPadOS 4.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0)

Sets the current playback time to the time specified by the date object.

> Use [seek(to:completionHandler:)](seek%28to_completionhandler_%29-1dibq.md) instead.

## Declaration

```swift
@MainActor func seek(to date: Date) -> Bool
```

## Parameters

- `date`: The time to which to seek.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the playhead was moved to `date`, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

For playback content that is associated with a range of dates, this method moves the playhead to point within that range. This method will fail (return [false](https://developer.apple.com/documentation/swift/false)) if `date` is outside the range or if the content is not associated with a range of dates.

## See Also

### Related Documentation

- [seek(to:toleranceBefore:toleranceAfter:completionHandler:)](seek%28to_tolerancebefore_toleranceafter_completionhandler_%29.md): Sets the current playback time within a specified time bound and invokes the specified block when the seek operation completes or is interrupted.
- [seek(to:completionHandler:)](seek%28to_completionhandler_%29-91gnw.md): Sets the current playback time to the specified time.

### Seeking through media

- [seek(to:)](seek%28to_%29-1dpto.md): Deprecated. Sets the current playback time to the specified time.
- [seek(to:toleranceBefore:toleranceAfter:)](seek%28to_tolerancebefore_toleranceafter_%29.md): Deprecated. Sets the current playback time within a specified time bound.
- [seek(to:)](seek%28to_%29-5rt4x.md): Deprecated. Sets the current playback time to the time specified by the date object.

# seekToDate: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 11.0) · iPadOS 4.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0)

Sets the current playback time to the time specified by the date object.

> Use [seekToDate:completionHandler:](seek%28to_completionhandler_%29-1dibq.md) instead.

## Declaration

```objectivec
- (BOOL) seekToDate:(NSDate *) date;
```

## Parameters

- `date`: The time to which to seek.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the playhead was moved to `date`, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

For playback content that is associated with a range of dates, this method moves the playhead to point within that range. This method will fail (return [false](https://developer.apple.com/documentation/swift/false)) if `date` is outside the range or if the content is not associated with a range of dates.

## See Also

### Related Documentation

- [seekToTime:toleranceBefore:toleranceAfter:completionHandler:](seek%28to_tolerancebefore_toleranceafter_completionhandler_%29.md): Sets the current playback time within a specified time bound and invokes the specified block when the seek operation completes or is interrupted.
- [seekToTime:completionHandler:](seek%28to_completionhandler_%29-91gnw.md): Sets the current playback time to the specified time.

### Seeking through media

- [seekToTime:](seek%28to_%29-1dpto.md): Deprecated. Sets the current playback time to the specified time.
- [seekToTime:toleranceBefore:toleranceAfter:](seek%28to_tolerancebefore_toleranceafter_%29.md): Deprecated. Sets the current playback time within a specified time bound.
