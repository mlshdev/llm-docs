> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/cancelpendingprerolls()](https://developer.apple.com/documentation/avfoundation/avplayer/cancelpendingprerolls())

# cancelPendingPrerolls() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Cancels any pending preroll requests and invokes the corresponding completion handlers, if present.

## Declaration

```swift
nonisolated func cancelPendingPrerolls()
```

<a id="Discussion"></a>

## Discussion

This method cancels and releases the completion handlers for any pending prerolls. The finished parameter of the completion handlers passed to [preroll(atRate:completionHandler:)](preroll%28atrate_completionhandler_%29.md) will be set to `false`.

## See Also

### Synchronizing multiple players

- [setRate(\_:time:atHostTime:)](setrate%28__time_athosttime_%29.md): Synchronizes the playback rate and time of the current item with an external source.
- [preroll(atRate:completionHandler:)](preroll%28atrate_completionhandler_%29.md): Begins loading media data to prime the media pipelines for playback.
- [sourceClock](sourceclock.md): A clock the player uses for item time bases.
- [masterClock](masterclock.md): Deprecated. The host clock for item time bases.

# cancelPendingPrerolls (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Cancels any pending preroll requests and invokes the corresponding completion handlers, if present.

## Declaration

```objectivec
- (void) cancelPendingPrerolls;
```

<a id="Discussion"></a>

## Discussion

This method cancels and releases the completion handlers for any pending prerolls. The finished parameter of the completion handlers passed to [prerollAtRate:completionHandler:](preroll%28atrate_completionhandler_%29.md) will be set to `false`.

## See Also

### Synchronizing multiple players

- [setRate:time:atHostTime:](setrate%28__time_athosttime_%29.md): Synchronizes the playback rate and time of the current item with an external source.
- [prerollAtRate:completionHandler:](preroll%28atrate_completionhandler_%29.md): Begins loading media data to prime the media pipelines for playback.
- [sourceClock](sourceclock.md): A clock the player uses for item time bases.
- [masterClock](masterclock.md): Deprecated. The host clock for item time bases.
