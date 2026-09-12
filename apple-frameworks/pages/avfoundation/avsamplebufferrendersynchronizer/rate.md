> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferrendersynchronizer/rate](https://developer.apple.com/documentation/avfoundation/avsamplebufferrendersynchronizer/rate)

# rate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The current playback rate.

## Declaration

```swift
var rate: Float { get set }
```

<a id="Discussion"></a>

## Discussion

A value of `0.0` means playback has stopped. A value of `1.0` tells the renderer to play at the natural rate of the media. This property must be greater than or equal to `0.0`.

## See Also

### Accessing time information

- [currentTime()](currenttime%28%29.md): Returns the current time of the synchronizer.
- [timebase](timebase.md): The synchronizer’s rendering timebase which determines how it interprets timestamps.
- [setRate(\_:time:)](setrate%28__time_%29.md): Sets the renderer’s time and rate.
- [setRate(\_:time:atHostTime:)](setrate%28__time_athosttime_%29.md): Sets the playback rate and the relationship between the current time and host time.
- [rateDidChangeNotification](ratedidchangenotification.md): The synchronizer’s rendering rate changed.
- [delaysRateChangeUntilHasSufficientMediaData](delaysratechangeuntilhassufficientmediadata.md): A Boolean value that Indicates whether the playback should start immediately on rate change requests.

# rate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The current playback rate.

## Declaration

```objectivec
@property (nonatomic, readwrite) float rate;
```

<a id="Discussion"></a>

## Discussion

A value of `0.0` means playback has stopped. A value of `1.0` tells the renderer to play at the natural rate of the media. This property must be greater than or equal to `0.0`.

## See Also

### Accessing time information

- [currentTime](currenttime%28%29.md): Returns the current time of the synchronizer.
- [timebase](timebase.md): The synchronizer’s rendering timebase which determines how it interprets timestamps.
- [setRate:time:](setrate%28__time_%29.md): Sets the renderer’s time and rate.
- [setRate:time:atHostTime:](setrate%28__time_athosttime_%29.md): Sets the playback rate and the relationship between the current time and host time.
- [AVSampleBufferRenderSynchronizerRateDidChangeNotification](ratedidchangenotification.md): The synchronizer’s rendering rate changed.
- [delaysRateChangeUntilHasSufficientMediaData](delaysratechangeuntilhassufficientmediadata.md): A Boolean value that Indicates whether the playback should start immediately on rate change requests.
