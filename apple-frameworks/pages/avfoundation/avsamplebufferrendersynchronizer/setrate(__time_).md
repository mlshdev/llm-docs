> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferrendersynchronizer/setrate(_:time:)](https://developer.apple.com/documentation/avfoundation/avsamplebufferrendersynchronizer/setrate(_:time:))

# setRate(\_:time:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Sets the renderer’s time and rate.

## Declaration

```swift
func setRate(_ rate: Float, time: CMTime)
```

## Parameters

- `rate`: The new timebase rate. This value must be greater than or equal to `0.0`.
- `time`: The new timebase time. This value must be greater than or equal to [zero](../../coremedia/cmtime/zero.md), or [invalid](../../coremedia/cmtime/invalid.md).

<a id="Discussion"></a>

## Discussion

This method first sets the new time and then the new rendering rate. A `rate` value of `0.0` means that playback has stopped while a `rate` value of `1.0` indicates playback should be at the natural rate of the media.

## See Also

### Accessing time information

- [currentTime()](currenttime%28%29.md): Returns the current time of the synchronizer.
- [timebase](timebase.md): The synchronizer’s rendering timebase which determines how it interprets timestamps.
- [rate](rate.md): The current playback rate.
- [setRate(\_:time:atHostTime:)](setrate%28__time_athosttime_%29.md): Sets the playback rate and the relationship between the current time and host time.
- [rateDidChangeNotification](ratedidchangenotification.md): The synchronizer’s rendering rate changed.
- [delaysRateChangeUntilHasSufficientMediaData](delaysratechangeuntilhassufficientmediadata.md): A Boolean value that Indicates whether the playback should start immediately on rate change requests.

# setRate:time: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Sets the renderer’s time and rate.

## Declaration

```objectivec
- (void) setRate:(float) rate time:(CMTime) time;
```

## Parameters

- `rate`: The new timebase rate. This value must be greater than or equal to `0.0`.
- `time`: The new timebase time. This value must be greater than or equal to [kCMTimeZero](../../coremedia/cmtime/zero.md), or [kCMTimeInvalid](../../coremedia/cmtime/invalid.md).

<a id="Discussion"></a>

## Discussion

This method first sets the new time and then the new rendering rate. A `rate` value of `0.0` means that playback has stopped while a `rate` value of `1.0` indicates playback should be at the natural rate of the media.

## See Also

### Accessing time information

- [currentTime](currenttime%28%29.md): Returns the current time of the synchronizer.
- [timebase](timebase.md): The synchronizer’s rendering timebase which determines how it interprets timestamps.
- [rate](rate.md): The current playback rate.
- [setRate:time:atHostTime:](setrate%28__time_athosttime_%29.md): Sets the playback rate and the relationship between the current time and host time.
- [AVSampleBufferRenderSynchronizerRateDidChangeNotification](ratedidchangenotification.md): The synchronizer’s rendering rate changed.
- [delaysRateChangeUntilHasSufficientMediaData](delaysratechangeuntilhassufficientmediadata.md): A Boolean value that Indicates whether the playback should start immediately on rate change requests.
