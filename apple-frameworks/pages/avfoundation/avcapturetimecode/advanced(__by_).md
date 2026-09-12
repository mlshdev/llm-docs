> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturetimecode/advanced(_:by:)](https://developer.apple.com/documentation/avfoundation/avcapturetimecode/advanced(_:by:))

# advanced(\_:by:) (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Generates a new timecode by adding a specified number of frames to the given timecode, handling overflow for seconds, minutes, and hours.

## Declaration

```swift
static func advanced(_ timecode: AVCaptureTimecode, by framesToAdd: Int64) -> AVCaptureTimecode
```

## Parameters

- `timecode`: The original [AVCaptureTimecode](../avcapturetimecode.md) to be incremented.
- `framesToAdd`: The number of frames to add to the timecode.

<a id="return-value"></a>

## Return Value

A new [AVCaptureTimecode](../avcapturetimecode.md) struct with the updated time values after adding the specified frames.

## See Also

### Timecode generation

- [AVCaptureTimecodeGenerator](../avcapturetimecodegenerator.md): Generates and synchronizes timecode data from various sources for precise video and audio synchronization.
- [AVCaptureTimecodeGeneratorDelegate](../avcapturetimecodegeneratordelegate.md): A protocol for receiving real-time timecode updates and error notifications from a timecode generator.
- [AVCaptureTimecodeGenerator.SynchronizationStatus](../avcapturetimecodegenerator/synchronizationstatus.md): Constants defining the synchronization status of a timecode generator .
- [AVCaptureTimecode.Source](source.md): Describes a timecode source that a timecode generator can synchronize to.
- [AVCaptureTimecode.SourceType](sourcetype-swift.enum.md): Defines possible sources for generating timecode in using a timecode generator.
- [AVCaptureTimecode](../avcapturetimecode.md): This structure represents a timecode, adhering to SMPTE standards, which define precise time information and associated timestamps for video or audio synchronization.
- [createMetadataSampleBuffer(from:associatedWithPresentationTimeStamp:)](createmetadatasamplebuffer%28from_associatedwithpresentationtimestamp_%29.md): Creates a sample buffer containing Timecode Media Description metadata for integration with a video track.
- [createMetadataSampleBuffer(from:forDuration:)](createmetadatasamplebuffer%28from_forduration_%29.md): Creates a sample buffer containing Timecode Media Description metadata for a specified duration.

# AVCaptureTimecodeAdvancedByFrames (Objective-C)

**Framework:** AVFoundation  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Generates a new timecode by adding a specified number of frames to the given timecode, handling overflow for seconds, minutes, and hours.

## Declaration

```objectivec
AVCaptureTimecode AVCaptureTimecodeAdvancedByFrames(AVCaptureTimecode timecode, int64_t framesToAdd);
```

## Parameters

- `timecode`: The original [AVCaptureTimecode](../avcapturetimecode.md) to be incremented.
- `framesToAdd`: The number of frames to add to the timecode.

<a id="return-value"></a>

## Return Value

A new [AVCaptureTimecode](../avcapturetimecode.md) struct with the updated time values after adding the specified frames.

## See Also

### Timecode generation

- [AVCaptureTimecodeGenerator](../avcapturetimecodegenerator.md): Generates and synchronizes timecode data from various sources for precise video and audio synchronization.
- [AVCaptureTimecodeGeneratorDelegate](../avcapturetimecodegeneratordelegate.md): A protocol for receiving real-time timecode updates and error notifications from a timecode generator.
- [AVCaptureTimecodeGeneratorSynchronizationStatus](../avcapturetimecodegenerator/synchronizationstatus.md): Constants defining the synchronization status of a timecode generator .
- [AVCaptureTimecodeSource](source.md): Describes a timecode source that a timecode generator can synchronize to.
- [AVCaptureTimecodeSourceType](sourcetype-swift.enum.md): Defines possible sources for generating timecode in using a timecode generator.
- [AVCaptureTimecode](../avcapturetimecode.md): This structure represents a timecode, adhering to SMPTE standards, which define precise time information and associated timestamps for video or audio synchronization.
- [AVCaptureTimecodeCreateMetadataSampleBufferAssociatedWithPresentationTimeStamp](createmetadatasamplebuffer%28from_associatedwithpresentationtimestamp_%29.md): Creates a sample buffer containing Timecode Media Description metadata for integration with a video track.
- [AVCaptureTimecodeCreateMetadataSampleBufferForDuration](createmetadatasamplebuffer%28from_forduration_%29.md): Creates a sample buffer containing Timecode Media Description metadata for a specified duration.
