> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/seek(to:completionhandler:)-91gnw](https://developer.apple.com/documentation/avfoundation/avplayeritem/seek(to:completionhandler:)-91gnw)

# seek(to:completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Sets the current playback time to the specified time.

## Declaration

```swift
nonisolated func seek(to time: CMTime, completionHandler: (@Sendable (Bool) -> Void)? = nil)
```

```swift
nonisolated func seek(to time: CMTime) async -> Bool
```

## Parameters

- `time`: The time to which to seek.
- `completionHandler`: The block to invoke when the seek operation has either been completed or been interrupted. The block takes one argument:

  - **finished**: Indicates whether the seek operation completed.

<a id="Discussion"></a>

## Discussion

Use this method to seek to a specified time in the player item and be notified when the operation completes. If the seek request completes without being interrupted (either by another seek request or by any other operation), the completion handler you provide is executed with the `finished` parameter set to [true](https://developer.apple.com/documentation/swift/true).

If another seek request is already in progress when you call this method, the completion handler for the in-progress seek request is executed immediately with the `finished` parameter set to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Seeking through media

- [seek(to:toleranceBefore:toleranceAfter:completionHandler:)](seek%28to_tolerancebefore_toleranceafter_completionhandler_%29.md): Sets the current playback time within a specified time bound and invokes the specified block when the seek operation completes or is interrupted.
- [seek(to:completionHandler:)](seek%28to_completionhandler_%29-1dibq.md): Sets the current playback time to the time specified by the date object.
- [cancelPendingSeeks()](cancelpendingseeks%28%29.md): Cancels any pending seek requests and invokes the corresponding completion handlers if present.

# seekToTime:completionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Sets the current playback time to the specified time.

## Declaration

```objectivec
- (void) seekToTime:(CMTime) time completionHandler:(void (^)(BOOL finished)) completionHandler;
```

## Parameters

- `time`: The time to which to seek.
- `completionHandler`: The block to invoke when the seek operation has either been completed or been interrupted. The block takes one argument:

  - **finished**: Indicates whether the seek operation completed.

<a id="Discussion"></a>

## Discussion

Use this method to seek to a specified time in the player item and be notified when the operation completes. If the seek request completes without being interrupted (either by another seek request or by any other operation), the completion handler you provide is executed with the `finished` parameter set to [true](https://developer.apple.com/documentation/swift/true).

If another seek request is already in progress when you call this method, the completion handler for the in-progress seek request is executed immediately with the `finished` parameter set to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Seeking through media

- [seekToTime:toleranceBefore:toleranceAfter:completionHandler:](seek%28to_tolerancebefore_toleranceafter_completionhandler_%29.md): Sets the current playback time within a specified time bound and invokes the specified block when the seek operation completes or is interrupted.
- [seekToDate:completionHandler:](seek%28to_completionhandler_%29-1dibq.md): Sets the current playback time to the time specified by the date object.
- [cancelPendingSeeks](cancelpendingseeks%28%29.md): Cancels any pending seek requests and invokes the corresponding completion handlers if present.
