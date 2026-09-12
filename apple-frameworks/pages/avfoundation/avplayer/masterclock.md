> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/masterclock](https://developer.apple.com/documentation/avfoundation/avplayer/masterclock)

# masterClock (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 18.0) · iPadOS 6.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.8+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · watchOS 1.0+ (deprecated in 11.0)

The host clock for item time bases.

> Use [sourceClock](sourceclock.md) instead.

## Declaration

```swift
nonisolated var masterClock: CMClock? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `NULL`, which means that the host clock is the automatic choice. When non-`NULL`, this property overrides the automatic choice of host clock for item time bases. This is most useful when you’re synchronizing video-only movies with audio from another source.

> **Important**

>  If you specify a host clock other than the appropriate audio device’s clock, the audio may drift out of sync.

## See Also

### Synchronizing multiple players

- [setRate(\_:time:atHostTime:)](setrate%28__time_athosttime_%29.md): Synchronizes the playback rate and time of the current item with an external source.
- [preroll(atRate:completionHandler:)](preroll%28atrate_completionhandler_%29.md): Begins loading media data to prime the media pipelines for playback.
- [cancelPendingPrerolls()](cancelpendingprerolls%28%29.md): Cancels any pending preroll requests and invokes the corresponding completion handlers, if present.
- [sourceClock](sourceclock.md): A clock the player uses for item time bases.

# masterClock (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 18.0) · iPadOS 6.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.8+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · watchOS 1.0+ (deprecated in 11.0)

The host clock for item time bases.

> Use [sourceClock](sourceclock.md) instead.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) CMClockRef masterClock;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `NULL`, which means that the host clock is the automatic choice. When non-`NULL`, this property overrides the automatic choice of host clock for item time bases. This is most useful when you’re synchronizing video-only movies with audio from another source.

> **Important**

>  If you specify a host clock other than the appropriate audio device’s clock, the audio may drift out of sync.

## See Also

### Synchronizing multiple players

- [setRate:time:atHostTime:](setrate%28__time_athosttime_%29.md): Synchronizes the playback rate and time of the current item with an external source.
- [prerollAtRate:completionHandler:](preroll%28atrate_completionhandler_%29.md): Begins loading media data to prime the media pipelines for playback.
- [cancelPendingPrerolls](cancelpendingprerolls%28%29.md): Cancels any pending preroll requests and invokes the corresponding completion handlers, if present.
- [sourceClock](sourceclock.md): A clock the player uses for item time bases.
