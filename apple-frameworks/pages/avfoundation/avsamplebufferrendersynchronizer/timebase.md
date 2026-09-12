> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferrendersynchronizer/timebase](https://developer.apple.com/documentation/avfoundation/avsamplebufferrendersynchronizer/timebase)

# timebase (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The synchronizer’s rendering timebase which determines how it interprets timestamps.

## Declaration

```swift
var timebase: CMTimebase { get }
```

<a id="Discussion"></a>

## Discussion

The default for this property is the clock for an added [AVSampleBufferAudioRenderer](../avsamplebufferaudiorenderer.md) object. If you haven’t added a renderer, the timebase is the system host clock.

## See Also

### Accessing time information

- [currentTime()](currenttime%28%29.md): Returns the current time of the synchronizer.
- [rate](rate.md): The current playback rate.
- [setRate(\_:time:)](setrate%28__time_%29.md): Sets the renderer’s time and rate.
- [setRate(\_:time:atHostTime:)](setrate%28__time_athosttime_%29.md): Sets the playback rate and the relationship between the current time and host time.
- [rateDidChangeNotification](ratedidchangenotification.md): The synchronizer’s rendering rate changed.
- [delaysRateChangeUntilHasSufficientMediaData](delaysratechangeuntilhassufficientmediadata.md): A Boolean value that Indicates whether the playback should start immediately on rate change requests.

# timebase (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The synchronizer’s rendering timebase which determines how it interprets timestamps.

## Declaration

```objectivec
@property (retain, readonly) CMTimebaseRef timebase;
```

<a id="Discussion"></a>

## Discussion

The default for this property is the clock for an added [AVSampleBufferAudioRenderer](../avsamplebufferaudiorenderer.md) object. If you haven’t added a renderer, the timebase is the system host clock.

## See Also

### Accessing time information

- [currentTime](currenttime%28%29.md): Returns the current time of the synchronizer.
- [rate](rate.md): The current playback rate.
- [setRate:time:](setrate%28__time_%29.md): Sets the renderer’s time and rate.
- [setRate:time:atHostTime:](setrate%28__time_athosttime_%29.md): Sets the playback rate and the relationship between the current time and host time.
- [AVSampleBufferRenderSynchronizerRateDidChangeNotification](ratedidchangenotification.md): The synchronizer’s rendering rate changed.
- [delaysRateChangeUntilHasSufficientMediaData](delaysratechangeuntilhassufficientmediadata.md): A Boolean value that Indicates whether the playback should start immediately on rate change requests.
