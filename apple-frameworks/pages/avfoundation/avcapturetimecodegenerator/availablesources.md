> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturetimecodegenerator/availablesources](https://developer.apple.com/documentation/avfoundation/avcapturetimecodegenerator/availablesources)

# availableSources (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

An array of available timecode synchronization sources that can be used by the timecode generator.

## Declaration

```swift
var availableSources: [AVCaptureTimecode.Source] { get }
```

<a id="return-value"></a>

## Return Value

A read-only array of [AVCaptureTimecode.Source](../avcapturetimecode/source.md) objects representing the available timecode synchronization sources.

<a id="discussion"></a>

## Discussion

This property provides a list of [AVCaptureTimecode.Source](../avcapturetimecode/source.md) objects representing the available timecode sources with which the generator can synchronize. The sources may include built-in options such as the frame counter and real-time clock, as well as dynamically detected sources such as connected MIDI or HID devices.

This array is key-value observable, allowing you to monitor changes in real-time. For example, when a new MIDI device is connected, the array is updated to include the corresponding timecode source.

## See Also

### Managing sources

- [currentSource](currentsource.md): The active timecode source used by [AVCaptureTimecodeGenerator](../avcapturetimecodegenerator.md) to maintain clock synchronization for accurate timecode generation.
- [frameCountSource](framecountsource.md): A frame counter timecode source that operates independently of any internal or external synchronization.
- [realTimeClockSource](realtimeclocksource.md): A predefined timecode source synchronized to the real-time system clock.
- [startSynchronization(source:)](startsynchronization%28source_%29.md): Synchronizes the generator with the specified timecode source.

# availableSources (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

An array of available timecode synchronization sources that can be used by the timecode generator.

## Declaration

```objectivec
@property (atomic, copy, readonly) NSArray<AVCaptureTimecodeSource *> * availableSources;
```

<a id="return-value"></a>

## Return Value

A read-only array of [AVCaptureTimecodeSource](../avcapturetimecode/source.md) objects representing the available timecode synchronization sources.

<a id="discussion"></a>

## Discussion

This property provides a list of [AVCaptureTimecodeSource](../avcapturetimecode/source.md) objects representing the available timecode sources with which the generator can synchronize. The sources may include built-in options such as the frame counter and real-time clock, as well as dynamically detected sources such as connected MIDI or HID devices.

This array is key-value observable, allowing you to monitor changes in real-time. For example, when a new MIDI device is connected, the array is updated to include the corresponding timecode source.

## See Also

### Managing sources

- [currentSource](currentsource.md): The active timecode source used by [AVCaptureTimecodeGenerator](../avcapturetimecodegenerator.md) to maintain clock synchronization for accurate timecode generation.
- [frameCountSource](framecountsource.md): A frame counter timecode source that operates independently of any internal or external synchronization.
- [realTimeClockSource](realtimeclocksource.md): A predefined timecode source synchronized to the real-time system clock.
- [startSynchronizationWithTimecodeSource:](startsynchronization%28source_%29.md): Synchronizes the generator with the specified timecode source.
