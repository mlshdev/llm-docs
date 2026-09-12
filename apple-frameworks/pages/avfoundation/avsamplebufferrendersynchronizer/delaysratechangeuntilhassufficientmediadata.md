> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferrendersynchronizer/delaysratechangeuntilhassufficientmediadata](https://developer.apple.com/documentation/avfoundation/avsamplebufferrendersynchronizer/delaysratechangeuntilhassufficientmediadata)

# delaysRateChangeUntilHasSufficientMediaData (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.4+

A Boolean value that Indicates whether the playback should start immediately on rate change requests.

## Declaration

```swift
var delaysRateChangeUntilHasSufficientMediaData: Bool { get set }
```

## See Also

### Accessing time information

- [currentTime()](currenttime%28%29.md): Returns the current time of the synchronizer.
- [timebase](timebase.md): The synchronizer’s rendering timebase which determines how it interprets timestamps.
- [rate](rate.md): The current playback rate.
- [setRate(\_:time:)](setrate%28__time_%29.md): Sets the renderer’s time and rate.
- [setRate(\_:time:atHostTime:)](setrate%28__time_athosttime_%29.md): Sets the playback rate and the relationship between the current time and host time.
- [rateDidChangeNotification](ratedidchangenotification.md): The synchronizer’s rendering rate changed.

# delaysRateChangeUntilHasSufficientMediaData (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.4+

A Boolean value that Indicates whether the playback should start immediately on rate change requests.

## Declaration

```objectivec
@property (nonatomic) BOOL delaysRateChangeUntilHasSufficientMediaData;
```

## See Also

### Accessing time information

- [currentTime](currenttime%28%29.md): Returns the current time of the synchronizer.
- [timebase](timebase.md): The synchronizer’s rendering timebase which determines how it interprets timestamps.
- [rate](rate.md): The current playback rate.
- [setRate:time:](setrate%28__time_%29.md): Sets the renderer’s time and rate.
- [setRate:time:atHostTime:](setrate%28__time_athosttime_%29.md): Sets the playback rate and the relationship between the current time and host time.
- [AVSampleBufferRenderSynchronizerRateDidChangeNotification](ratedidchangenotification.md): The synchronizer’s rendering rate changed.
