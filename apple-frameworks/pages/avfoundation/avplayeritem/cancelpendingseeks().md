> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/cancelpendingseeks()](https://developer.apple.com/documentation/avfoundation/avplayeritem/cancelpendingseeks())

# cancelPendingSeeks() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Cancels any pending seek requests and invokes the corresponding completion handlers if present.

## Declaration

```swift
nonisolated func cancelPendingSeeks()
```

<a id="Discussion"></a>

## Discussion

Use this method to cancel and release the completion handlers of pending seeks.

The `finished` parameter of the completion handlers will be set to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Seeking through media

- [seek(to:completionHandler:)](seek%28to_completionhandler_%29-91gnw.md): Sets the current playback time to the specified time.
- [seek(to:toleranceBefore:toleranceAfter:completionHandler:)](seek%28to_tolerancebefore_toleranceafter_completionhandler_%29.md): Sets the current playback time within a specified time bound and invokes the specified block when the seek operation completes or is interrupted.
- [seek(to:completionHandler:)](seek%28to_completionhandler_%29-1dibq.md): Sets the current playback time to the time specified by the date object.

# cancelPendingSeeks (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Cancels any pending seek requests and invokes the corresponding completion handlers if present.

## Declaration

```objectivec
- (void) cancelPendingSeeks;
```

<a id="Discussion"></a>

## Discussion

Use this method to cancel and release the completion handlers of pending seeks.

The `finished` parameter of the completion handlers will be set to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Seeking through media

- [seekToTime:completionHandler:](seek%28to_completionhandler_%29-91gnw.md): Sets the current playback time to the specified time.
- [seekToTime:toleranceBefore:toleranceAfter:completionHandler:](seek%28to_tolerancebefore_toleranceafter_completionhandler_%29.md): Sets the current playback time within a specified time bound and invokes the specified block when the seek operation completes or is interrupted.
- [seekToDate:completionHandler:](seek%28to_completionhandler_%29-1dibq.md): Sets the current playback time to the time specified by the date object.
