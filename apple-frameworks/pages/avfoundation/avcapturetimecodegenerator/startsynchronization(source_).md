> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturetimecodegenerator/startsynchronization(source:)](https://developer.apple.com/documentation/avfoundation/avcapturetimecodegenerator/startsynchronization(source:))

# startSynchronization(source:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Synchronizes the generator with the specified timecode source.

## Declaration

```swift
func startSynchronization(source: AVCaptureTimecode.Source)
```

## Parameters

- `source`: The timecode source for synchronization.

## See Also

### Managing sources

- [currentSource](currentsource.md): The active timecode source used by [AVCaptureTimecodeGenerator](../avcapturetimecodegenerator.md) to maintain clock synchronization for accurate timecode generation.
- [availableSources](availablesources.md): An array of available timecode synchronization sources that can be used by the timecode generator.
- [frameCountSource](framecountsource.md): A frame counter timecode source that operates independently of any internal or external synchronization.
- [realTimeClockSource](realtimeclocksource.md): A predefined timecode source synchronized to the real-time system clock.

# startSynchronizationWithTimecodeSource: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Synchronizes the generator with the specified timecode source.

## Declaration

```objectivec
- (void) startSynchronizationWithTimecodeSource:(AVCaptureTimecodeSource *) source;
```

## Parameters

- `source`: The timecode source for synchronization.

## See Also

### Managing sources

- [currentSource](currentsource.md): The active timecode source used by [AVCaptureTimecodeGenerator](../avcapturetimecodegenerator.md) to maintain clock synchronization for accurate timecode generation.
- [availableSources](availablesources.md): An array of available timecode synchronization sources that can be used by the timecode generator.
- [frameCountSource](framecountsource.md): A frame counter timecode source that operates independently of any internal or external synchronization.
- [realTimeClockSource](realtimeclocksource.md): A predefined timecode source synchronized to the real-time system clock.
