> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/seek(to:completionhandler:)-75bls](https://developer.apple.com/documentation/avfoundation/avplayer/seek(to:completionhandler:)-75bls)

# seek(to:completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Requests that the player seek to a specified time, and to notify you when the seek is complete.

## Declaration

```swift
nonisolated func seek(to time: CMTime, completionHandler: @escaping @Sendable (Bool) -> Void)
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

Use this method to seek the current player item to the specified time and be notified when the operation completes. If the seek request completes without being interrupted (either by another seek request or by any other operation), the completion handler you provide is executed with the `finished` parameter set to [true](https://developer.apple.com/documentation/swift/true).

If another seek request is already in progress when you call this method, the completion handler for the in-progress seek request is executed immediately with the `finished` parameter set to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Seeking through media

- [seek(to:)](seek%28to_%29-87h2r.md): Requests that the player seek to a specified time.
- [seek(to:toleranceBefore:toleranceAfter:)](seek%28to_tolerancebefore_toleranceafter_%29.md): Requests that the player seek to a specified time with the amount of accuracy specified by the time tolerance values.
- [seek(to:toleranceBefore:toleranceAfter:completionHandler:)](seek%28to_tolerancebefore_toleranceafter_completionhandler_%29.md): Requests that the player seek to a specified time with the amount of accuracy specified by the time tolerance values, and to notify you when the seek is complete.
- [seek(to:)](seek%28to_%29-9h9qr.md): Requests that the player seek to a specified date.
- [seek(to:completionHandler:)](seek%28to_completionhandler_%29-wr1l.md): Requests that the player seek to a specified date, and to notify you when the seek is complete.

# seekToTime:completionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Requests that the player seek to a specified time, and to notify you when the seek is complete.

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

Use this method to seek the current player item to the specified time and be notified when the operation completes. If the seek request completes without being interrupted (either by another seek request or by any other operation), the completion handler you provide is executed with the `finished` parameter set to [true](https://developer.apple.com/documentation/swift/true).

If another seek request is already in progress when you call this method, the completion handler for the in-progress seek request is executed immediately with the `finished` parameter set to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Seeking through media

- [seekToTime:](seek%28to_%29-87h2r.md): Requests that the player seek to a specified time.
- [seekToTime:toleranceBefore:toleranceAfter:](seek%28to_tolerancebefore_toleranceafter_%29.md): Requests that the player seek to a specified time with the amount of accuracy specified by the time tolerance values.
- [seekToTime:toleranceBefore:toleranceAfter:completionHandler:](seek%28to_tolerancebefore_toleranceafter_completionhandler_%29.md): Requests that the player seek to a specified time with the amount of accuracy specified by the time tolerance values, and to notify you when the seek is complete.
- [seekToDate:](seek%28to_%29-9h9qr.md): Requests that the player seek to a specified date.
- [seekToDate:completionHandler:](seek%28to_completionhandler_%29-wr1l.md): Requests that the player seek to a specified date, and to notify you when the seek is complete.
