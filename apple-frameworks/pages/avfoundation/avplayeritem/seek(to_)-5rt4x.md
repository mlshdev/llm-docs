> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/seek(to:)-5rt4x](https://developer.apple.com/documentation/avfoundation/avplayeritem/seek(to:)-5rt4x)

# seek(to:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Sets the current playback time to the time specified by the date object.

> Use [seek(to:completionHandler:)](seek%28to_completionhandler_%29-1dibq.md) instead.

## Declaration

```swift
nonisolated func seek(to date: Date) async -> Bool
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
- [seek(to:)](seek%28to_%29-3s9d8.md): Deprecated. Sets the current playback time to the time specified by the date object.
