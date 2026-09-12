> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferrendersynchronizer/ratedidchangenotification](https://developer.apple.com/documentation/avfoundation/avsamplebufferrendersynchronizer/ratedidchangenotification)

# rateDidChangeNotification (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The synchronizer’s rendering rate changed.

## Declaration

```swift
class let rateDidChangeNotification: NSNotification.Name
```

## See Also

### Accessing time information

- [currentTime()](currenttime%28%29.md): Returns the current time of the synchronizer.
- [timebase](timebase.md): The synchronizer’s rendering timebase which determines how it interprets timestamps.
- [rate](rate.md): The current playback rate.
- [setRate(\_:time:)](setrate%28__time_%29.md): Sets the renderer’s time and rate.
- [setRate(\_:time:atHostTime:)](setrate%28__time_athosttime_%29.md): Sets the playback rate and the relationship between the current time and host time.
- [delaysRateChangeUntilHasSufficientMediaData](delaysratechangeuntilhassufficientmediadata.md): A Boolean value that Indicates whether the playback should start immediately on rate change requests.

# AVSampleBufferRenderSynchronizerRateDidChangeNotification (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The synchronizer’s rendering rate changed.

## Declaration

```objectivec
extern NSNotificationName const AVSampleBufferRenderSynchronizerRateDidChangeNotification;
```

## See Also

### Accessing time information

- [currentTime](currenttime%28%29.md): Returns the current time of the synchronizer.
- [timebase](timebase.md): The synchronizer’s rendering timebase which determines how it interprets timestamps.
- [rate](rate.md): The current playback rate.
- [setRate:time:](setrate%28__time_%29.md): Sets the renderer’s time and rate.
- [setRate:time:atHostTime:](setrate%28__time_athosttime_%29.md): Sets the playback rate and the relationship between the current time and host time.
- [delaysRateChangeUntilHasSufficientMediaData](delaysratechangeuntilhassufficientmediadata.md): A Boolean value that Indicates whether the playback should start immediately on rate change requests.
