> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturetimecode/createmetadatasamplebuffer(from:associatedwithpresentationtimestamp:)](https://developer.apple.com/documentation/avfoundation/avcapturetimecode/createmetadatasamplebuffer(from:associatedwithpresentationtimestamp:))

# createMetadataSampleBuffer(from:associatedWithPresentationTimeStamp:) (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Creates a sample buffer containing Timecode Media Description metadata for integration with a video track.

## Declaration

```swift
static func createMetadataSampleBuffer(from timecode: AVCaptureTimecode, associatedWithPresentationTimeStamp presentationTimeStamp: CMTime) -> Unmanaged<CMSampleBuffer>?
```

## Parameters

- `timecode`: The [AVCaptureTimecode](../avcapturetimecode.md) instance providing the timecode details to encode.
- `presentationTimeStamp`: The presentation time stamp that determines the exact moment in the media timeline where the metadata should be applied. It is embedded in the sample timing info (`CMSampleTimingInfo`) and ensures that the packaged metadata synchronizes accurately with the corresponding video frame.

<a id="return-value"></a>

## Return Value

A `CMSampleBufferRef` with the encoded Timecode Media Description metadata for video synchronization, or `nil` if sample buffer creation fails.

## See Also

### Timecode generation

- [AVCaptureTimecodeGenerator](../avcapturetimecodegenerator.md): Generates and synchronizes timecode data from various sources for precise video and audio synchronization.
- [AVCaptureTimecodeGeneratorDelegate](../avcapturetimecodegeneratordelegate.md): A protocol for receiving real-time timecode updates and error notifications from a timecode generator.
- [AVCaptureTimecodeGenerator.SynchronizationStatus](../avcapturetimecodegenerator/synchronizationstatus.md): Constants defining the synchronization status of a timecode generator .
- [AVCaptureTimecode.Source](source.md): Describes a timecode source that a timecode generator can synchronize to.
- [AVCaptureTimecode.SourceType](sourcetype-swift.enum.md): Defines possible sources for generating timecode in using a timecode generator.
- [AVCaptureTimecode](../avcapturetimecode.md): This structure represents a timecode, adhering to SMPTE standards, which define precise time information and associated timestamps for video or audio synchronization.
- [advanced(\_:by:)](advanced%28__by_%29.md): Generates a new timecode by adding a specified number of frames to the given timecode, handling overflow for seconds, minutes, and hours.
- [createMetadataSampleBuffer(from:forDuration:)](createmetadatasamplebuffer%28from_forduration_%29.md): Creates a sample buffer containing Timecode Media Description metadata for a specified duration.

# AVCaptureTimecodeCreateMetadataSampleBufferAssociatedWithPresentationTimeStamp (Objective-C)

**Framework:** AVFoundation  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Creates a sample buffer containing Timecode Media Description metadata for integration with a video track.

## Declaration

```objectivec
CMSampleBufferRefAVCaptureTimecodeCreateMetadataSampleBufferAssociatedWithPresentationTimeStamp(AVCaptureTimecode timecode, CMTime presentationTimeStamp);
```

## Parameters

- `timecode`: The [AVCaptureTimecode](../avcapturetimecode.md) instance providing the timecode details to encode.
- `presentationTimeStamp`: The presentation time stamp that determines the exact moment in the media timeline where the metadata should be applied. It is embedded in the sample timing info (`CMSampleTimingInfo`) and ensures that the packaged metadata synchronizes accurately with the corresponding video frame.

<a id="return-value"></a>

## Return Value

A `CMSampleBufferRef` with the encoded Timecode Media Description metadata for video synchronization, or `nil` if sample buffer creation fails.

## See Also

### Timecode generation

- [AVCaptureTimecodeGenerator](../avcapturetimecodegenerator.md): Generates and synchronizes timecode data from various sources for precise video and audio synchronization.
- [AVCaptureTimecodeGeneratorDelegate](../avcapturetimecodegeneratordelegate.md): A protocol for receiving real-time timecode updates and error notifications from a timecode generator.
- [AVCaptureTimecodeGeneratorSynchronizationStatus](../avcapturetimecodegenerator/synchronizationstatus.md): Constants defining the synchronization status of a timecode generator .
- [AVCaptureTimecodeSource](source.md): Describes a timecode source that a timecode generator can synchronize to.
- [AVCaptureTimecodeSourceType](sourcetype-swift.enum.md): Defines possible sources for generating timecode in using a timecode generator.
- [AVCaptureTimecode](../avcapturetimecode.md): This structure represents a timecode, adhering to SMPTE standards, which define precise time information and associated timestamps for video or audio synchronization.
- [AVCaptureTimecodeAdvancedByFrames](advanced%28__by_%29.md): Generates a new timecode by adding a specified number of frames to the given timecode, handling overflow for seconds, minutes, and hours.
- [AVCaptureTimecodeCreateMetadataSampleBufferForDuration](createmetadatasamplebuffer%28from_forduration_%29.md): Creates a sample buffer containing Timecode Media Description metadata for a specified duration.
