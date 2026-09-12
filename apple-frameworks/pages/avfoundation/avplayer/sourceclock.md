> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/sourceclock](https://developer.apple.com/documentation/avfoundation/avplayer/sourceclock)

# sourceClock (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A clock the player uses for item time bases.

## Declaration

```swift
nonisolated var sourceClock: CMClock? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`. Setting an explicit source clock is useful to synchronize video-only movies with audio that plays through a different audio device.

> **Important**

>  Specifying a source clock for a device other than the one playing audio may cause audio to drift out of sync.

## See Also

### Synchronizing multiple players

- [setRate(\_:time:atHostTime:)](setrate%28__time_athosttime_%29.md): Synchronizes the playback rate and time of the current item with an external source.
- [preroll(atRate:completionHandler:)](preroll%28atrate_completionhandler_%29.md): Begins loading media data to prime the media pipelines for playback.
- [cancelPendingPrerolls()](cancelpendingprerolls%28%29.md): Cancels any pending preroll requests and invokes the corresponding completion handlers, if present.
- [masterClock](masterclock.md): Deprecated. The host clock for item time bases.

# sourceClock (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A clock the player uses for item time bases.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) CMClockRef sourceClock;
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`. Setting an explicit source clock is useful to synchronize video-only movies with audio that plays through a different audio device.

> **Important**

>  Specifying a source clock for a device other than the one playing audio may cause audio to drift out of sync.

## See Also

### Synchronizing multiple players

- [setRate:time:atHostTime:](setrate%28__time_athosttime_%29.md): Synchronizes the playback rate and time of the current item with an external source.
- [prerollAtRate:completionHandler:](preroll%28atrate_completionhandler_%29.md): Begins loading media data to prime the media pipelines for playback.
- [cancelPendingPrerolls](cancelpendingprerolls%28%29.md): Cancels any pending preroll requests and invokes the corresponding completion handlers, if present.
- [masterClock](masterclock.md): Deprecated. The host clock for item time bases.
