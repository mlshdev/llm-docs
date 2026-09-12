> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturetimecodegenerator/framecountsource](https://developer.apple.com/documentation/avfoundation/avcapturetimecodegenerator/framecountsource)

# frameCountSource (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A frame counter timecode source that operates independently of any internal or external synchronization.

## Declaration

```swift
class var frameCountSource: AVCaptureTimecode.Source { get }
```

<a id="discussion"></a>

## Discussion

This class property represents a standalone timecode source that advances based purely on frame count, independent of any real-time or external synchronization. It is ideal for scenarios where a simple, self-contained timing reference is sufficient, without requiring alignment to system clocks or external devices.

## See Also

### Managing sources

- [currentSource](currentsource.md): The active timecode source used by [AVCaptureTimecodeGenerator](../avcapturetimecodegenerator.md) to maintain clock synchronization for accurate timecode generation.
- [availableSources](availablesources.md): An array of available timecode synchronization sources that can be used by the timecode generator.
- [realTimeClockSource](realtimeclocksource.md): A predefined timecode source synchronized to the real-time system clock.
- [startSynchronization(source:)](startsynchronization%28source_%29.md): Synchronizes the generator with the specified timecode source.

# frameCountSource (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A frame counter timecode source that operates independently of any internal or external synchronization.

## Declaration

```objectivec
@property (class, nonatomic, readonly) AVCaptureTimecodeSource * frameCountSource;
```

<a id="discussion"></a>

## Discussion

This class property represents a standalone timecode source that advances based purely on frame count, independent of any real-time or external synchronization. It is ideal for scenarios where a simple, self-contained timing reference is sufficient, without requiring alignment to system clocks or external devices.

## See Also

### Managing sources

- [currentSource](currentsource.md): The active timecode source used by [AVCaptureTimecodeGenerator](../avcapturetimecodegenerator.md) to maintain clock synchronization for accurate timecode generation.
- [availableSources](availablesources.md): An array of available timecode synchronization sources that can be used by the timecode generator.
- [realTimeClockSource](realtimeclocksource.md): A predefined timecode source synchronized to the real-time system clock.
- [startSynchronizationWithTimecodeSource:](startsynchronization%28source_%29.md): Synchronizes the generator with the specified timecode source.
