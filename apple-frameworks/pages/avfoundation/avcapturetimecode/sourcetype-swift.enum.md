> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturetimecode/sourcetype-swift.enum](https://developer.apple.com/documentation/avfoundation/avcapturetimecode/sourcetype-swift.enum)

# AVCaptureTimecode.SourceType (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Defines possible sources for generating timecode in using a timecode generator.

## Declaration

```swift
enum SourceType
```

## Topics

### Source types

- [AVCaptureTimecode.SourceType.external](sourcetype-swift.enum/external.md): Synchronizes timecode to an external timecode data stream. Ideal for professional audio and video synchronization with external quarter-frame MIDI or HID timecode hardware.
- [AVCaptureTimecode.SourceType.frameCount](sourcetype-swift.enum/framecount.md): No internal or external source is adopted. Timecodes are zero-based, sequentially generated frame counts.
- [AVCaptureTimecode.SourceType.realTimeClock](sourcetype-swift.enum/realtimeclock.md): Synchronizes timecode to the system clock for real-time applications. Useful for live events or scenarios requiring alignment with the actual time of day.

### Initializers

- [init(rawValue:)](sourcetype-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Timecode generation

- [AVCaptureTimecodeGenerator](../avcapturetimecodegenerator.md): Generates and synchronizes timecode data from various sources for precise video and audio synchronization.
- [AVCaptureTimecodeGeneratorDelegate](../avcapturetimecodegeneratordelegate.md): A protocol for receiving real-time timecode updates and error notifications from a timecode generator.
- [AVCaptureTimecodeGenerator.SynchronizationStatus](../avcapturetimecodegenerator/synchronizationstatus.md): Constants defining the synchronization status of a timecode generator .
- [AVCaptureTimecode.Source](source.md): Describes a timecode source that a timecode generator can synchronize to.
- [AVCaptureTimecode](../avcapturetimecode.md): This structure represents a timecode, adhering to SMPTE standards, which define precise time information and associated timestamps for video or audio synchronization.
- [advanced(\_:by:)](advanced%28__by_%29.md): Generates a new timecode by adding a specified number of frames to the given timecode, handling overflow for seconds, minutes, and hours.
- [createMetadataSampleBuffer(from:associatedWithPresentationTimeStamp:)](createmetadatasamplebuffer%28from_associatedwithpresentationtimestamp_%29.md): Creates a sample buffer containing Timecode Media Description metadata for integration with a video track.
- [createMetadataSampleBuffer(from:forDuration:)](createmetadatasamplebuffer%28from_forduration_%29.md): Creates a sample buffer containing Timecode Media Description metadata for a specified duration.

# AVCaptureTimecodeSourceType (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Defines possible sources for generating timecode in using a timecode generator.

## Declaration

```objectivec
enum AVCaptureTimecodeSourceType : NSInteger;
```

## Topics

### Source types

- [AVCaptureTimecodeSourceTypeExternal](sourcetype-swift.enum/external.md): Synchronizes timecode to an external timecode data stream. Ideal for professional audio and video synchronization with external quarter-frame MIDI or HID timecode hardware.
- [AVCaptureTimecodeSourceTypeFrameCount](sourcetype-swift.enum/framecount.md): No internal or external source is adopted. Timecodes are zero-based, sequentially generated frame counts.
- [AVCaptureTimecodeSourceTypeRealTimeClock](sourcetype-swift.enum/realtimeclock.md): Synchronizes timecode to the system clock for real-time applications. Useful for live events or scenarios requiring alignment with the actual time of day.

## See Also

### Timecode generation

- [AVCaptureTimecodeGenerator](../avcapturetimecodegenerator.md): Generates and synchronizes timecode data from various sources for precise video and audio synchronization.
- [AVCaptureTimecodeGeneratorDelegate](../avcapturetimecodegeneratordelegate.md): A protocol for receiving real-time timecode updates and error notifications from a timecode generator.
- [AVCaptureTimecodeGeneratorSynchronizationStatus](../avcapturetimecodegenerator/synchronizationstatus.md): Constants defining the synchronization status of a timecode generator .
- [AVCaptureTimecodeSource](source.md): Describes a timecode source that a timecode generator can synchronize to.
- [AVCaptureTimecode](../avcapturetimecode.md): This structure represents a timecode, adhering to SMPTE standards, which define precise time information and associated timestamps for video or audio synchronization.
- [AVCaptureTimecodeAdvancedByFrames](advanced%28__by_%29.md): Generates a new timecode by adding a specified number of frames to the given timecode, handling overflow for seconds, minutes, and hours.
- [AVCaptureTimecodeCreateMetadataSampleBufferAssociatedWithPresentationTimeStamp](createmetadatasamplebuffer%28from_associatedwithpresentationtimestamp_%29.md): Creates a sample buffer containing Timecode Media Description metadata for integration with a video track.
- [AVCaptureTimecodeCreateMetadataSampleBufferForDuration](createmetadatasamplebuffer%28from_forduration_%29.md): Creates a sample buffer containing Timecode Media Description metadata for a specified duration.
