> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/seek(to:completionhandler:)-1dibq](https://developer.apple.com/documentation/avfoundation/avplayeritem/seek(to:completionhandler:)-1dibq)

# seek(to:completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Sets the current playback time to the time specified by the date object.

## Declaration

```swift
nonisolated func seek(to date: Date, completionHandler: (@Sendable (Bool) -> Void)? = nil) -> Bool
```

## Parameters

- `date`: The time to which to seek.
- `completionHandler`: The block to invoke when the seek operation has either been completed or been interrupted. The block takes one argument:

  - **finished**: Indicates whether the seek operation completed.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the playhead moved to the specified date or [false](https://developer.apple.com/documentation/swift/false) if it did not.

<a id="Discussion"></a>

## Discussion

Use this method to seek to a specified time in the player item and be notified when the operation completes. If the seek request completes without being interrupted (either by another seek request or by any other operation), the completion handler you provide is executed with the `finished` parameter set to [true](https://developer.apple.com/documentation/swift/true).

If another seek request is already in progress when you call this method, the completion handler for the in-progress seek request is executed immediately with the `finished` parameter set to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Seeking through media

- [seek(to:completionHandler:)](seek%28to_completionhandler_%29-91gnw.md): Sets the current playback time to the specified time.
- [seek(to:toleranceBefore:toleranceAfter:completionHandler:)](seek%28to_tolerancebefore_toleranceafter_completionhandler_%29.md): Sets the current playback time within a specified time bound and invokes the specified block when the seek operation completes or is interrupted.
- [cancelPendingSeeks()](cancelpendingseeks%28%29.md): Cancels any pending seek requests and invokes the corresponding completion handlers if present.

# seekToDate:completionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Sets the current playback time to the time specified by the date object.

## Declaration

```objectivec
- (BOOL) seekToDate:(NSDate *) date completionHandler:(void (^)(BOOL finished)) completionHandler;
```

## Parameters

- `date`: The time to which to seek.
- `completionHandler`: The block to invoke when the seek operation has either been completed or been interrupted. The block takes one argument:

  - **finished**: Indicates whether the seek operation completed.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the playhead moved to the specified date or [false](https://developer.apple.com/documentation/swift/false) if it did not.

<a id="Discussion"></a>

## Discussion

Use this method to seek to a specified time in the player item and be notified when the operation completes. If the seek request completes without being interrupted (either by another seek request or by any other operation), the completion handler you provide is executed with the `finished` parameter set to [true](https://developer.apple.com/documentation/swift/true).

If another seek request is already in progress when you call this method, the completion handler for the in-progress seek request is executed immediately with the `finished` parameter set to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Seeking through media

- [seekToTime:completionHandler:](seek%28to_completionhandler_%29-91gnw.md): Sets the current playback time to the specified time.
- [seekToTime:toleranceBefore:toleranceAfter:completionHandler:](seek%28to_tolerancebefore_toleranceafter_completionhandler_%29.md): Sets the current playback time within a specified time bound and invokes the specified block when the seek operation completes or is interrupted.
- [cancelPendingSeeks](cancelpendingseeks%28%29.md): Cancels any pending seek requests and invokes the corresponding completion handlers if present.
