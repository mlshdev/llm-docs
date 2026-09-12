> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferrendersynchronizer/setrate(_:time:athosttime:)](https://developer.apple.com/documentation/avfoundation/avsamplebufferrendersynchronizer/setrate(_:time:athosttime:))

# setRate(\_:time:atHostTime:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.4+

Sets the playback rate and the relationship between the current time and host time.

## Declaration

```swift
func setRate(_ rate: Float, time: CMTime, atHostTime hostTime: CMTime)
```

## Parameters

- `rate`: A new timebase rate. This value must be greater than or equal to `0.0`.
- `time`: A new timebase time. This value must be greater than or equal to [zero](../../coremedia/cmtime/zero.md), or [invalid](../../coremedia/cmtime/invalid.md).
- `hostTime`: A new host time. This value must be greater than or equal to [zero](../../coremedia/cmtime/zero.md), or [invalid](../../coremedia/cmtime/invalid.md).

## See Also

### Accessing time information

- [currentTime()](currenttime%28%29.md): Returns the current time of the synchronizer.
- [timebase](timebase.md): The synchronizer’s rendering timebase which determines how it interprets timestamps.
- [rate](rate.md): The current playback rate.
- [setRate(\_:time:)](setrate%28__time_%29.md): Sets the renderer’s time and rate.
- [rateDidChangeNotification](ratedidchangenotification.md): The synchronizer’s rendering rate changed.
- [delaysRateChangeUntilHasSufficientMediaData](delaysratechangeuntilhassufficientmediadata.md): A Boolean value that Indicates whether the playback should start immediately on rate change requests.

# setRate:time:atHostTime: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.4+

Sets the playback rate and the relationship between the current time and host time.

## Declaration

```objectivec
- (void) setRate:(float) rate time:(CMTime) time atHostTime:(CMTime) hostTime;
```

## Parameters

- `rate`: A new timebase rate. This value must be greater than or equal to `0.0`.
- `time`: A new timebase time. This value must be greater than or equal to [kCMTimeZero](../../coremedia/cmtime/zero.md), or [kCMTimeInvalid](../../coremedia/cmtime/invalid.md).
- `hostTime`: A new host time. This value must be greater than or equal to [kCMTimeZero](../../coremedia/cmtime/zero.md), or [kCMTimeInvalid](../../coremedia/cmtime/invalid.md).

## See Also

### Accessing time information

- [currentTime](currenttime%28%29.md): Returns the current time of the synchronizer.
- [timebase](timebase.md): The synchronizer’s rendering timebase which determines how it interprets timestamps.
- [rate](rate.md): The current playback rate.
- [setRate:time:](setrate%28__time_%29.md): Sets the renderer’s time and rate.
- [AVSampleBufferRenderSynchronizerRateDidChangeNotification](ratedidchangenotification.md): The synchronizer’s rendering rate changed.
- [delaysRateChangeUntilHasSufficientMediaData](delaysratechangeuntilhassufficientmediadata.md): A Boolean value that Indicates whether the playback should start immediately on rate change requests.
