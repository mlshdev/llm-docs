> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturetimecodegenerator/currentsource](https://developer.apple.com/documentation/avfoundation/avcapturetimecodegenerator/currentsource)

# currentSource (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The active timecode source used by [AVCaptureTimecodeGenerator](../avcapturetimecodegenerator.md) to maintain clock synchronization for accurate timecode generation.

## Declaration

```swift
var currentSource: AVCaptureTimecode.Source { get }
```

<a id="discussion"></a>

## Discussion

Indicates the active timecode source, as defined in the `AVCaptureTimecodeSynchronizationSourceType` enum. If an [AVCaptureTimecodeGenerator](../avcapturetimecodegenerator.md) becomes disconnected from its source, it continues generating timecodes using historical data from its ring buffer. This approach allows the generator to maintain synchronization during brief disruptions, as is common in cinema workflows where timecode signals may experience discontinuities.

## See Also

### Managing sources

- [availableSources](availablesources.md): An array of available timecode synchronization sources that can be used by the timecode generator.
- [frameCountSource](framecountsource.md): A frame counter timecode source that operates independently of any internal or external synchronization.
- [realTimeClockSource](realtimeclocksource.md): A predefined timecode source synchronized to the real-time system clock.
- [startSynchronization(source:)](startsynchronization%28source_%29.md): Synchronizes the generator with the specified timecode source.

# currentSource (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The active timecode source used by [AVCaptureTimecodeGenerator](../avcapturetimecodegenerator.md) to maintain clock synchronization for accurate timecode generation.

## Declaration

```objectivec
@property (nonatomic, readonly) AVCaptureTimecodeSource * currentSource;
```

<a id="discussion"></a>

## Discussion

Indicates the active timecode source, as defined in the `AVCaptureTimecodeSynchronizationSourceType` enum. If an [AVCaptureTimecodeGenerator](../avcapturetimecodegenerator.md) becomes disconnected from its source, it continues generating timecodes using historical data from its ring buffer. This approach allows the generator to maintain synchronization during brief disruptions, as is common in cinema workflows where timecode signals may experience discontinuities.

## See Also

### Managing sources

- [availableSources](availablesources.md): An array of available timecode synchronization sources that can be used by the timecode generator.
- [frameCountSource](framecountsource.md): A frame counter timecode source that operates independently of any internal or external synchronization.
- [realTimeClockSource](realtimeclocksource.md): A predefined timecode source synchronized to the real-time system clock.
- [startSynchronizationWithTimecodeSource:](startsynchronization%28source_%29.md): Synchronizes the generator with the specified timecode source.
