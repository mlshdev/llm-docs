> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/setrate(_:time:athosttime:)](https://developer.apple.com/documentation/avfoundation/avplayer/setrate(_:time:athosttime:))

# setRate(\_:time:atHostTime:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Synchronizes the playback rate and time of the current item with an external source.

## Declaration

```swift
nonisolated func setRate(_ rate: Float, time itemTime: CMTime, atHostTime hostClockTime: CMTime)
```

## Parameters

- `rate`: The playback rate for the item.
- `itemTime`: The precise time at which to match playback of the item. To use the current item’s current time, specify [invalid](../../coremedia/cmtime/invalid.md).
- `hostClockTime`: The host time at which to synchronize playback. If you specify [invalid](../../coremedia/cmtime/invalid.md), the rate and time are set together without any external synchronization.

<a id="Discussion"></a>

## Discussion

This method adjusts the current item’s timebase so that the time in `itemTime` is in sync with the time in `hostClockTime`. Thus, if `hostClockTime` specifies a time in the past, the item’s timebase is adjusted to make it appear as if the item has been running at the specified rate since `itemTime`. And if `hostClockTime` specifies a time in the future, playback is adjusted backward (if possible) so that the value in `itemTime` occurs at the precise moment the host’s clock reaches the value in `hostClockTime`. If there is no content to play before the time specified by `itemTime`, playback holds until the two times come into sync.

This method does not ensure that media data is loaded before the timebase starts moving. However, if you specify a host time in the near future, that would give you some time to load the media data and prepare for playback.

> **Important**

>  The value of [automaticallyWaitsToMinimizeStalling](automaticallywaitstominimizestalling.md) must be set to `false` before calling this method. If the property value is `true`, calling this method results in the system raising an invalid argument exception.

## See Also

### Synchronizing multiple players

- [preroll(atRate:completionHandler:)](preroll%28atrate_completionhandler_%29.md): Begins loading media data to prime the media pipelines for playback.
- [cancelPendingPrerolls()](cancelpendingprerolls%28%29.md): Cancels any pending preroll requests and invokes the corresponding completion handlers, if present.
- [sourceClock](sourceclock.md): A clock the player uses for item time bases.
- [masterClock](masterclock.md): Deprecated. The host clock for item time bases.

# setRate:time:atHostTime: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Synchronizes the playback rate and time of the current item with an external source.

## Declaration

```objectivec
- (void) setRate:(float) rate time:(CMTime) itemTime atHostTime:(CMTime) hostClockTime;
```

## Parameters

- `rate`: The playback rate for the item.
- `itemTime`: The precise time at which to match playback of the item. To use the current item’s current time, specify [kCMTimeInvalid](../../coremedia/cmtime/invalid.md).
- `hostClockTime`: The host time at which to synchronize playback. If you specify [kCMTimeInvalid](../../coremedia/cmtime/invalid.md), the rate and time are set together without any external synchronization.

<a id="Discussion"></a>

## Discussion

This method adjusts the current item’s timebase so that the time in `itemTime` is in sync with the time in `hostClockTime`. Thus, if `hostClockTime` specifies a time in the past, the item’s timebase is adjusted to make it appear as if the item has been running at the specified rate since `itemTime`. And if `hostClockTime` specifies a time in the future, playback is adjusted backward (if possible) so that the value in `itemTime` occurs at the precise moment the host’s clock reaches the value in `hostClockTime`. If there is no content to play before the time specified by `itemTime`, playback holds until the two times come into sync.

This method does not ensure that media data is loaded before the timebase starts moving. However, if you specify a host time in the near future, that would give you some time to load the media data and prepare for playback.

> **Important**

>  The value of [automaticallyWaitsToMinimizeStalling](automaticallywaitstominimizestalling.md) must be set to `false` before calling this method. If the property value is `true`, calling this method results in the system raising an invalid argument exception.

## See Also

### Synchronizing multiple players

- [prerollAtRate:completionHandler:](preroll%28atrate_completionhandler_%29.md): Begins loading media data to prime the media pipelines for playback.
- [cancelPendingPrerolls](cancelpendingprerolls%28%29.md): Cancels any pending preroll requests and invokes the corresponding completion handlers, if present.
- [sourceClock](sourceclock.md): A clock the player uses for item time bases.
- [masterClock](masterclock.md): Deprecated. The host clock for item time bases.
