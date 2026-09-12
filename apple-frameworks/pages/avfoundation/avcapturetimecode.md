> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturetimecode](https://developer.apple.com/documentation/avfoundation/avcapturetimecode)

# AVCaptureTimecode (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

This structure represents a timecode, adhering to SMPTE standards, which define precise time information and associated timestamps for video or audio synchronization.

## Declaration

```swift
struct AVCaptureTimecode
```

<a id="overview"></a>

## Overview

This structure corresponds to the SMPTE 12M-1 Linear Timecode (LTC) format, widely used for professional video and audio synchronization.

## Topics

### Accessing timecode components

- [frameDuration](avcapturetimecode/frameduration.md): Frame duration of the timecode. If unknown, the value is `kCMTimeInvalid`.
- [frames](avcapturetimecode/frames.md): Frame component of the timecode, indicating the frame count within the second.
- [hours](avcapturetimecode/hours.md): Time component representing the current timecode in hours.
- [minutes](avcapturetimecode/minutes.md): Time component representing the current timecode in minutes.
- [seconds](avcapturetimecode/seconds.md): Time component representing the current timecode in seconds.
- [userBits](avcapturetimecode/userbits.md): A 32-bit field carrying SMPTE user bits, which are not strictly standardized. User bits are often used for additional metadata such as scene-take information, reel numbers, or dates, but their exact usage is application-dependent.

### Working with sources

- [sourceType](avcapturetimecode/sourcetype-swift.property.md): Source type of the timecode, indicating the emitter, carriage, or transport mechanism.
- [AVCaptureTimecode.SourceType](avcapturetimecode/sourcetype-swift.enum.md): Defines possible sources for generating timecode in using a timecode generator.
- [AVCaptureTimecode.Source](avcapturetimecode/source.md): Describes a timecode source that a timecode generator can synchronize to.

### Manipulating timecodes

- [advanced(\_:by:)](avcapturetimecode/advanced%28__by_%29.md): Generates a new timecode by adding a specified number of frames to the given timecode, handling overflow for seconds, minutes, and hours.

### Creating metadata sample buffers

- [createMetadataSampleBuffer(from:associatedWithPresentationTimeStamp:)](avcapturetimecode/createmetadatasamplebuffer%28from_associatedwithpresentationtimestamp_%29.md): Creates a sample buffer containing Timecode Media Description metadata for integration with a video track.
- [createMetadataSampleBuffer(from:forDuration:)](avcapturetimecode/createmetadatasamplebuffer%28from_forduration_%29.md): Creates a sample buffer containing Timecode Media Description metadata for a specified duration.

### Initializers

- [init()](avcapturetimecode/init%28%29.md)
- [init(hours:minutes:seconds:frames:userBits:frameDuration:sourceType:)](avcapturetimecode/init%28hours_minutes_seconds_frames_userbits_frameduration_sourcetype_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Timecode generation

- [AVCaptureTimecodeGenerator](avcapturetimecodegenerator.md): Generates and synchronizes timecode data from various sources for precise video and audio synchronization.
- [AVCaptureTimecodeGeneratorDelegate](avcapturetimecodegeneratordelegate.md): A protocol for receiving real-time timecode updates and error notifications from a timecode generator.
- [AVCaptureTimecodeGenerator.SynchronizationStatus](avcapturetimecodegenerator/synchronizationstatus.md): Constants defining the synchronization status of a timecode generator .
- [AVCaptureTimecode.Source](avcapturetimecode/source.md): Describes a timecode source that a timecode generator can synchronize to.
- [AVCaptureTimecode.SourceType](avcapturetimecode/sourcetype-swift.enum.md): Defines possible sources for generating timecode in using a timecode generator.
- [advanced(\_:by:)](avcapturetimecode/advanced%28__by_%29.md): Generates a new timecode by adding a specified number of frames to the given timecode, handling overflow for seconds, minutes, and hours.
- [createMetadataSampleBuffer(from:associatedWithPresentationTimeStamp:)](avcapturetimecode/createmetadatasamplebuffer%28from_associatedwithpresentationtimestamp_%29.md): Creates a sample buffer containing Timecode Media Description metadata for integration with a video track.
- [createMetadataSampleBuffer(from:forDuration:)](avcapturetimecode/createmetadatasamplebuffer%28from_forduration_%29.md): Creates a sample buffer containing Timecode Media Description metadata for a specified duration.

# AVCaptureTimecode (Objective-C)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

This structure represents a timecode, adhering to SMPTE standards, which define precise time information and associated timestamps for video or audio synchronization.

## Declaration

```objectivec
struct AVCaptureTimecode;
```

<a id="overview"></a>

## Overview

This structure corresponds to the SMPTE 12M-1 Linear Timecode (LTC) format, widely used for professional video and audio synchronization.

## Topics

### Accessing timecode components

- [frameDuration](avcapturetimecode/frameduration.md): Frame duration of the timecode. If unknown, the value is `kCMTimeInvalid`.
- [frames](avcapturetimecode/frames.md): Frame component of the timecode, indicating the frame count within the second.
- [hours](avcapturetimecode/hours.md): Time component representing the current timecode in hours.
- [minutes](avcapturetimecode/minutes.md): Time component representing the current timecode in minutes.
- [seconds](avcapturetimecode/seconds.md): Time component representing the current timecode in seconds.
- [userBits](avcapturetimecode/userbits.md): A 32-bit field carrying SMPTE user bits, which are not strictly standardized. User bits are often used for additional metadata such as scene-take information, reel numbers, or dates, but their exact usage is application-dependent.

### Working with sources

- [sourceType](avcapturetimecode/sourcetype-swift.property.md): Source type of the timecode, indicating the emitter, carriage, or transport mechanism.
- [AVCaptureTimecodeSourceType](avcapturetimecode/sourcetype-swift.enum.md): Defines possible sources for generating timecode in using a timecode generator.
- [AVCaptureTimecodeSource](avcapturetimecode/source.md): Describes a timecode source that a timecode generator can synchronize to.

### Manipulating timecodes

- [AVCaptureTimecodeAdvancedByFrames](avcapturetimecode/advanced%28__by_%29.md): Generates a new timecode by adding a specified number of frames to the given timecode, handling overflow for seconds, minutes, and hours.

### Creating metadata sample buffers

- [AVCaptureTimecodeCreateMetadataSampleBufferAssociatedWithPresentationTimeStamp](avcapturetimecode/createmetadatasamplebuffer%28from_associatedwithpresentationtimestamp_%29.md): Creates a sample buffer containing Timecode Media Description metadata for integration with a video track.
- [AVCaptureTimecodeCreateMetadataSampleBufferForDuration](avcapturetimecode/createmetadatasamplebuffer%28from_forduration_%29.md): Creates a sample buffer containing Timecode Media Description metadata for a specified duration.

## See Also

### Timecode generation

- [AVCaptureTimecodeGenerator](avcapturetimecodegenerator.md): Generates and synchronizes timecode data from various sources for precise video and audio synchronization.
- [AVCaptureTimecodeGeneratorDelegate](avcapturetimecodegeneratordelegate.md): A protocol for receiving real-time timecode updates and error notifications from a timecode generator.
- [AVCaptureTimecodeGeneratorSynchronizationStatus](avcapturetimecodegenerator/synchronizationstatus.md): Constants defining the synchronization status of a timecode generator .
- [AVCaptureTimecodeSource](avcapturetimecode/source.md): Describes a timecode source that a timecode generator can synchronize to.
- [AVCaptureTimecodeSourceType](avcapturetimecode/sourcetype-swift.enum.md): Defines possible sources for generating timecode in using a timecode generator.
- [AVCaptureTimecodeAdvancedByFrames](avcapturetimecode/advanced%28__by_%29.md): Generates a new timecode by adding a specified number of frames to the given timecode, handling overflow for seconds, minutes, and hours.
- [AVCaptureTimecodeCreateMetadataSampleBufferAssociatedWithPresentationTimeStamp](avcapturetimecode/createmetadatasamplebuffer%28from_associatedwithpresentationtimestamp_%29.md): Creates a sample buffer containing Timecode Media Description metadata for integration with a video track.
- [AVCaptureTimecodeCreateMetadataSampleBufferForDuration](avcapturetimecode/createmetadatasamplebuffer%28from_forduration_%29.md): Creates a sample buffer containing Timecode Media Description metadata for a specified duration.
