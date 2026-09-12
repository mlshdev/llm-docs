> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/preroll(atrate:completionhandler:)](https://developer.apple.com/documentation/avfoundation/avplayer/preroll(atrate:completionhandler:))

# preroll(atRate:completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Begins loading media data to prime the media pipelines for playback.

## Declaration

```swift
nonisolated func preroll(atRate rate: Float, completionHandler: (@Sendable (Bool) -> Void)? = nil)
```

```swift
nonisolated func preroll(atRate rate: Float) async -> Bool
```

## Parameters

- `rate`: The playback rate to use when determining how much data to load.
- `completionHandler`: A block to execute when the player finishes the load attempt. This block takes a single Boolean parameter that contains [true](https://developer.apple.com/documentation/swift/true) if the data was loaded or [false](https://developer.apple.com/documentation/swift/false) if there was a problem. For example, the value might be [false](https://developer.apple.com/documentation/swift/false) if the preroll was interrupted by a time change or incompatible rate change.

<a id="Discussion"></a>

## Discussion

This method loads data starting at the item’s current playback time. The current rate for the playback item should always be 0 prior to calling this method. After the method calls the completion handler, you can change the item’s playback rate to begin playback.

If the player object is not ready to play (its [status](status-swift.property.md) property is not [AVPlayer.Status.readyToPlay](status-swift.enum/readytoplay.md)), this method throws an exception.

## See Also

### Synchronizing multiple players

- [setRate(\_:time:atHostTime:)](setrate%28__time_athosttime_%29.md): Synchronizes the playback rate and time of the current item with an external source.
- [cancelPendingPrerolls()](cancelpendingprerolls%28%29.md): Cancels any pending preroll requests and invokes the corresponding completion handlers, if present.
- [sourceClock](sourceclock.md): A clock the player uses for item time bases.
- [masterClock](masterclock.md): Deprecated. The host clock for item time bases.

# prerollAtRate:completionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Begins loading media data to prime the media pipelines for playback.

## Declaration

```objectivec
- (void) prerollAtRate:(float) rate completionHandler:(void (^)(BOOL finished)) completionHandler;
```

## Parameters

- `rate`: The playback rate to use when determining how much data to load.
- `completionHandler`: A block to execute when the player finishes the load attempt. This block takes a single Boolean parameter that contains [true](https://developer.apple.com/documentation/swift/true) if the data was loaded or [false](https://developer.apple.com/documentation/swift/false) if there was a problem. For example, the value might be [false](https://developer.apple.com/documentation/swift/false) if the preroll was interrupted by a time change or incompatible rate change.

<a id="Discussion"></a>

## Discussion

This method loads data starting at the item’s current playback time. The current rate for the playback item should always be 0 prior to calling this method. After the method calls the completion handler, you can change the item’s playback rate to begin playback.

If the player object is not ready to play (its [status](status-swift.property.md) property is not [AVPlayerStatusReadyToPlay](status-swift.enum/readytoplay.md)), this method throws an exception.

## See Also

### Synchronizing multiple players

- [setRate:time:atHostTime:](setrate%28__time_athosttime_%29.md): Synchronizes the playback rate and time of the current item with an external source.
- [cancelPendingPrerolls](cancelpendingprerolls%28%29.md): Cancels any pending preroll requests and invokes the corresponding completion handlers, if present.
- [sourceClock](sourceclock.md): A clock the player uses for item time bases.
- [masterClock](masterclock.md): Deprecated. The host clock for item time bases.
