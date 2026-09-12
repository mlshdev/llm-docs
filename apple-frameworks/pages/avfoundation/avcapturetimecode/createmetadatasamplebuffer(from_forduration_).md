> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturetimecode/createmetadatasamplebuffer(from:forduration:)](https://developer.apple.com/documentation/avfoundation/avcapturetimecode/createmetadatasamplebuffer(from:forduration:))

# createMetadataSampleBuffer(from:forDuration:) (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Creates a sample buffer containing Timecode Media Description metadata for a specified duration.

## Declaration

```swift
static func createMetadataSampleBuffer(from timecode: AVCaptureTimecode, forDuration duration: CMTime) -> Unmanaged<CMSampleBuffer>?
```

## Parameters

- `timecode`: The [AVCaptureTimecode](../avcapturetimecode.md) instance providing the timecode details for the metadata sample.
- `duration`: The duration that the metadata sample buffer should represent.

<a id="return-value"></a>

## Return Value

A `CMSampleBufferRef` with encoded Timecode Media Description metadata for the given duration, or `nil` if sample buffer creation fails.

<a id="discussion"></a>

## Discussion

Use this function for scenarios where timecode metadata needs to span a custom interval (not just a single frame), such as non-frame-accurate workflows or for describing a segment of media with a consistent timecode.

## See Also

### Timecode generation

- [AVCaptureTimecodeGenerator](../avcapturetimecodegenerator.md): Generates and synchronizes timecode data from various sources for precise video and audio synchronization.
- [AVCaptureTimecodeGeneratorDelegate](../avcapturetimecodegeneratordelegate.md): A protocol for receiving real-time timecode updates and error notifications from a timecode generator.
- [AVCaptureTimecodeGenerator.SynchronizationStatus](../avcapturetimecodegenerator/synchronizationstatus.md): Constants defining the synchronization status of a timecode generator .
- [AVCaptureTimecode.Source](source.md): Describes a timecode source that a timecode generator can synchronize to.
- [AVCaptureTimecode.SourceType](sourcetype-swift.enum.md): Defines possible sources for generating timecode in using a timecode generator.
- [AVCaptureTimecode](../avcapturetimecode.md): This structure represents a timecode, adhering to SMPTE standards, which define precise time information and associated timestamps for video or audio synchronization.
- [advanced(\_:by:)](advanced%28__by_%29.md): Generates a new timecode by adding a specified number of frames to the given timecode, handling overflow for seconds, minutes, and hours.
- [createMetadataSampleBuffer(from:associatedWithPresentationTimeStamp:)](createmetadatasamplebuffer%28from_associatedwithpresentationtimestamp_%29.md): Creates a sample buffer containing Timecode Media Description metadata for integration with a video track.

# AVCaptureTimecodeCreateMetadataSampleBufferForDuration (Objective-C)

**Framework:** AVFoundation  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Creates a sample buffer containing Timecode Media Description metadata for a specified duration.

## Declaration

```objectivec
CMSampleBufferRefAVCaptureTimecodeCreateMetadataSampleBufferForDuration(AVCaptureTimecode timecode, CMTime duration);
```

## Parameters

- `timecode`: The [AVCaptureTimecode](../avcapturetimecode.md) instance providing the timecode details for the metadata sample.
- `duration`: The duration that the metadata sample buffer should represent.

<a id="return-value"></a>

## Return Value

A `CMSampleBufferRef` with encoded Timecode Media Description metadata for the given duration, or `nil` if sample buffer creation fails.

<a id="discussion"></a>

## Discussion

Use this function for scenarios where timecode metadata needs to span a custom interval (not just a single frame), such as non-frame-accurate workflows or for describing a segment of media with a consistent timecode.

## See Also

### Timecode generation

- [AVCaptureTimecodeGenerator](../avcapturetimecodegenerator.md): Generates and synchronizes timecode data from various sources for precise video and audio synchronization.
- [AVCaptureTimecodeGeneratorDelegate](../avcapturetimecodegeneratordelegate.md): A protocol for receiving real-time timecode updates and error notifications from a timecode generator.
- [AVCaptureTimecodeGeneratorSynchronizationStatus](../avcapturetimecodegenerator/synchronizationstatus.md): Constants defining the synchronization status of a timecode generator .
- [AVCaptureTimecodeSource](source.md): Describes a timecode source that a timecode generator can synchronize to.
- [AVCaptureTimecodeSourceType](sourcetype-swift.enum.md): Defines possible sources for generating timecode in using a timecode generator.
- [AVCaptureTimecode](../avcapturetimecode.md): This structure represents a timecode, adhering to SMPTE standards, which define precise time information and associated timestamps for video or audio synchronization.
- [AVCaptureTimecodeAdvancedByFrames](advanced%28__by_%29.md): Generates a new timecode by adding a specified number of frames to the given timecode, handling overflow for seconds, minutes, and hours.
- [AVCaptureTimecodeCreateMetadataSampleBufferAssociatedWithPresentationTimeStamp](createmetadatasamplebuffer%28from_associatedwithpresentationtimestamp_%29.md): Creates a sample buffer containing Timecode Media Description metadata for integration with a video track.
