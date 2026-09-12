> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturetimecodegenerator](https://developer.apple.com/documentation/avfoundation/avcapturetimecodegenerator)

# AVCaptureTimecodeGenerator (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Generates and synchronizes timecode data from various sources for precise video and audio synchronization.

## Declaration

```swift
class AVCaptureTimecodeGenerator
```

<a id="overview"></a>

## Overview

The [AVCaptureTimecodeGenerator](avcapturetimecodegenerator.md) class supports multiple timecode sources, including frame counting, system clock synchronization, and MIDI timecode input (MTC). Suitable for playback, recording, or other time-sensitive operations where precise timecode metadata is required.

Use the [startSynchronization(source:)](avcapturetimecodegenerator/startsynchronization%28source_%29.md) method to set up the desired timecode source.

## Topics

### Generating timecode

- [generateInitialTimecode()](avcapturetimecodegenerator/generateinitialtimecode%28%29.md): Generates an initial timecode intended to be the first in a sequence.

### Managing sources

- [currentSource](avcapturetimecodegenerator/currentsource.md): The active timecode source used by [AVCaptureTimecodeGenerator](avcapturetimecodegenerator.md) to maintain clock synchronization for accurate timecode generation.
- [availableSources](avcapturetimecodegenerator/availablesources.md): An array of available timecode synchronization sources that can be used by the timecode generator.
- [frameCountSource](avcapturetimecodegenerator/framecountsource.md): A frame counter timecode source that operates independently of any internal or external synchronization.
- [realTimeClockSource](avcapturetimecodegenerator/realtimeclocksource.md): A predefined timecode source synchronized to the real-time system clock.
- [startSynchronization(source:)](avcapturetimecodegenerator/startsynchronization%28source_%29.md): Synchronizes the generator with the specified timecode source.

### Configuring the generator

- [synchronizationTimeout](avcapturetimecodegenerator/synchronizationtimeout.md): The maximum time interval allowed for source synchronization attempts before timing out.
- [timecodeAlignmentOffset](avcapturetimecodegenerator/timecodealignmentoffset.md): The time offset, in seconds, applied to the generated timecode.
- [timecodeFrameDuration](avcapturetimecodegenerator/timecodeframeduration.md): The frame duration that the generator will use to generate timecodes.
- [setDelegate(\_:queue:)](avcapturetimecodegenerator/setdelegate%28__queue_%29.md): Assigns a delegate to receive real-time timecode updates and specifies a queue for callbacks.

### Handling delegate callbacks

- [delegate](avcapturetimecodegenerator/delegate.md): The delegate that receives timecode updates from the timecode generator.
- [delegateCallbackQueue](avcapturetimecodegenerator/delegatecallbackqueue.md): The dispatch queue on which delegate callbacks are invoked.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Timecode generation

- [AVCaptureTimecodeGeneratorDelegate](avcapturetimecodegeneratordelegate.md): A protocol for receiving real-time timecode updates and error notifications from a timecode generator.
- [AVCaptureTimecodeGenerator.SynchronizationStatus](avcapturetimecodegenerator/synchronizationstatus.md): Constants defining the synchronization status of a timecode generator .
- [AVCaptureTimecode.Source](avcapturetimecode/source.md): Describes a timecode source that a timecode generator can synchronize to.
- [AVCaptureTimecode.SourceType](avcapturetimecode/sourcetype-swift.enum.md): Defines possible sources for generating timecode in using a timecode generator.
- [AVCaptureTimecode](avcapturetimecode.md): This structure represents a timecode, adhering to SMPTE standards, which define precise time information and associated timestamps for video or audio synchronization.
- [advanced(\_:by:)](avcapturetimecode/advanced%28__by_%29.md): Generates a new timecode by adding a specified number of frames to the given timecode, handling overflow for seconds, minutes, and hours.
- [createMetadataSampleBuffer(from:associatedWithPresentationTimeStamp:)](avcapturetimecode/createmetadatasamplebuffer%28from_associatedwithpresentationtimestamp_%29.md): Creates a sample buffer containing Timecode Media Description metadata for integration with a video track.
- [createMetadataSampleBuffer(from:forDuration:)](avcapturetimecode/createmetadatasamplebuffer%28from_forduration_%29.md): Creates a sample buffer containing Timecode Media Description metadata for a specified duration.

# AVCaptureTimecodeGenerator (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Generates and synchronizes timecode data from various sources for precise video and audio synchronization.

## Declaration

```objectivec
@interface AVCaptureTimecodeGenerator : NSObject
```

<a id="overview"></a>

## Overview

The [AVCaptureTimecodeGenerator](avcapturetimecodegenerator.md) class supports multiple timecode sources, including frame counting, system clock synchronization, and MIDI timecode input (MTC). Suitable for playback, recording, or other time-sensitive operations where precise timecode metadata is required.

Use the [startSynchronizationWithTimecodeSource:](avcapturetimecodegenerator/startsynchronization%28source_%29.md) method to set up the desired timecode source.

## Topics

### Generating timecode

- [generateInitialTimecode](avcapturetimecodegenerator/generateinitialtimecode%28%29.md): Generates an initial timecode intended to be the first in a sequence.

### Managing sources

- [currentSource](avcapturetimecodegenerator/currentsource.md): The active timecode source used by [AVCaptureTimecodeGenerator](avcapturetimecodegenerator.md) to maintain clock synchronization for accurate timecode generation.
- [availableSources](avcapturetimecodegenerator/availablesources.md): An array of available timecode synchronization sources that can be used by the timecode generator.
- [frameCountSource](avcapturetimecodegenerator/framecountsource.md): A frame counter timecode source that operates independently of any internal or external synchronization.
- [realTimeClockSource](avcapturetimecodegenerator/realtimeclocksource.md): A predefined timecode source synchronized to the real-time system clock.
- [startSynchronizationWithTimecodeSource:](avcapturetimecodegenerator/startsynchronization%28source_%29.md): Synchronizes the generator with the specified timecode source.

### Configuring the generator

- [synchronizationTimeout](avcapturetimecodegenerator/synchronizationtimeout.md): The maximum time interval allowed for source synchronization attempts before timing out.
- [timecodeAlignmentOffset](avcapturetimecodegenerator/timecodealignmentoffset.md): The time offset, in seconds, applied to the generated timecode.
- [timecodeFrameDuration](avcapturetimecodegenerator/timecodeframeduration.md): The frame duration that the generator will use to generate timecodes.
- [setDelegate:queue:](avcapturetimecodegenerator/setdelegate%28__queue_%29.md): Assigns a delegate to receive real-time timecode updates and specifies a queue for callbacks.

### Handling delegate callbacks

- [delegate](avcapturetimecodegenerator/delegate.md): The delegate that receives timecode updates from the timecode generator.
- [delegateCallbackQueue](avcapturetimecodegenerator/delegatecallbackqueue.md): The dispatch queue on which delegate callbacks are invoked.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Timecode generation

- [AVCaptureTimecodeGeneratorDelegate](avcapturetimecodegeneratordelegate.md): A protocol for receiving real-time timecode updates and error notifications from a timecode generator.
- [AVCaptureTimecodeGeneratorSynchronizationStatus](avcapturetimecodegenerator/synchronizationstatus.md): Constants defining the synchronization status of a timecode generator .
- [AVCaptureTimecodeSource](avcapturetimecode/source.md): Describes a timecode source that a timecode generator can synchronize to.
- [AVCaptureTimecodeSourceType](avcapturetimecode/sourcetype-swift.enum.md): Defines possible sources for generating timecode in using a timecode generator.
- [AVCaptureTimecode](avcapturetimecode.md): This structure represents a timecode, adhering to SMPTE standards, which define precise time information and associated timestamps for video or audio synchronization.
- [AVCaptureTimecodeAdvancedByFrames](avcapturetimecode/advanced%28__by_%29.md): Generates a new timecode by adding a specified number of frames to the given timecode, handling overflow for seconds, minutes, and hours.
- [AVCaptureTimecodeCreateMetadataSampleBufferAssociatedWithPresentationTimeStamp](avcapturetimecode/createmetadatasamplebuffer%28from_associatedwithpresentationtimestamp_%29.md): Creates a sample buffer containing Timecode Media Description metadata for integration with a video track.
- [AVCaptureTimecodeCreateMetadataSampleBufferForDuration](avcapturetimecode/createmetadatasamplebuffer%28from_forduration_%29.md): Creates a sample buffer containing Timecode Media Description metadata for a specified duration.
