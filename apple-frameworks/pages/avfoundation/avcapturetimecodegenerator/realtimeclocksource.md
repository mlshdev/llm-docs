> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturetimecodegenerator/realtimeclocksource](https://developer.apple.com/documentation/avfoundation/avcapturetimecodegenerator/realtimeclocksource)

# realTimeClockSource (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A predefined timecode source synchronized to the real-time system clock.

## Declaration

```swift
class var realTimeClockSource: AVCaptureTimecode.Source { get }
```

<a id="discussion"></a>

## Discussion

This class property provides a default timecode source based on the real-time system clock, requiring no external device. It is ideal for live events or scenarios where alignment with the current time of day is necessary.

## See Also

### Managing sources

- [currentSource](currentsource.md): The active timecode source used by [AVCaptureTimecodeGenerator](../avcapturetimecodegenerator.md) to maintain clock synchronization for accurate timecode generation.
- [availableSources](availablesources.md): An array of available timecode synchronization sources that can be used by the timecode generator.
- [frameCountSource](framecountsource.md): A frame counter timecode source that operates independently of any internal or external synchronization.
- [startSynchronization(source:)](startsynchronization%28source_%29.md): Synchronizes the generator with the specified timecode source.

# realTimeClockSource (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A predefined timecode source synchronized to the real-time system clock.

## Declaration

```objectivec
@property (class, nonatomic, readonly) AVCaptureTimecodeSource * realTimeClockSource;
```

<a id="discussion"></a>

## Discussion

This class property provides a default timecode source based on the real-time system clock, requiring no external device. It is ideal for live events or scenarios where alignment with the current time of day is necessary.

## See Also

### Managing sources

- [currentSource](currentsource.md): The active timecode source used by [AVCaptureTimecodeGenerator](../avcapturetimecodegenerator.md) to maintain clock synchronization for accurate timecode generation.
- [availableSources](availablesources.md): An array of available timecode synchronization sources that can be used by the timecode generator.
- [frameCountSource](framecountsource.md): A frame counter timecode source that operates independently of any internal or external synchronization.
- [startSynchronizationWithTimecodeSource:](startsynchronization%28source_%29.md): Synchronizes the generator with the specified timecode source.
