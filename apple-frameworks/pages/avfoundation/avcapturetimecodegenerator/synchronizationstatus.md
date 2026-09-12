> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturetimecodegenerator/synchronizationstatus](https://developer.apple.com/documentation/avfoundation/avcapturetimecodegenerator/synchronizationstatus)

# AVCaptureTimecodeGenerator.SynchronizationStatus (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Constants defining the synchronization status of a timecode generator .

## Declaration

```swift
enum SynchronizationStatus
```

## Topics

### Status values

- [AVCaptureTimecodeGenerator.SynchronizationStatus.notRequired](synchronizationstatus/notrequired.md): The timecode generator does not require active synchronization for a given source.
- [AVCaptureTimecodeGenerator.SynchronizationStatus.sourceSelected](synchronizationstatus/sourceselected.md): A timecode source has been selected, but synchronization has not yet started.
- [AVCaptureTimecodeGenerator.SynchronizationStatus.sourceUnavailable](synchronizationstatus/sourceunavailable.md): The timecode generator has failed to establish a connection with a given source.
- [AVCaptureTimecodeGenerator.SynchronizationStatus.sourceUnsupported](synchronizationstatus/sourceunsupported.md): The timecode generator is receiving data from the source in an unrecognized format.
- [AVCaptureTimecodeGenerator.SynchronizationStatus.synchronized](synchronizationstatus/synchronized.md): The timecode generator is successfully synchronized to the selected source, maintaining active timing alignment.
- [AVCaptureTimecodeGenerator.SynchronizationStatus.synchronizing](synchronizationstatus/synchronizing.md): The timecode generator is actively synchronizing to the selected source.
- [AVCaptureTimecodeGenerator.SynchronizationStatus.timedOut](synchronizationstatus/timedout.md): The synchronization has timed out.
- [AVCaptureTimecodeGenerator.SynchronizationStatus.unknown](synchronizationstatus/unknown.md): The initial state before a source is selected or during error conditions.

### Initializers

- [init(rawValue:)](synchronizationstatus/init%28rawvalue_%29.md)

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
- [AVCaptureTimecode.Source](../avcapturetimecode/source.md): Describes a timecode source that a timecode generator can synchronize to.
- [AVCaptureTimecode.SourceType](../avcapturetimecode/sourcetype-swift.enum.md): Defines possible sources for generating timecode in using a timecode generator.
- [AVCaptureTimecode](../avcapturetimecode.md): This structure represents a timecode, adhering to SMPTE standards, which define precise time information and associated timestamps for video or audio synchronization.
- [advanced(\_:by:)](../avcapturetimecode/advanced%28__by_%29.md): Generates a new timecode by adding a specified number of frames to the given timecode, handling overflow for seconds, minutes, and hours.
- [createMetadataSampleBuffer(from:associatedWithPresentationTimeStamp:)](../avcapturetimecode/createmetadatasamplebuffer%28from_associatedwithpresentationtimestamp_%29.md): Creates a sample buffer containing Timecode Media Description metadata for integration with a video track.
- [createMetadataSampleBuffer(from:forDuration:)](../avcapturetimecode/createmetadatasamplebuffer%28from_forduration_%29.md): Creates a sample buffer containing Timecode Media Description metadata for a specified duration.

# AVCaptureTimecodeGeneratorSynchronizationStatus (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Constants defining the synchronization status of a timecode generator .

## Declaration

```objectivec
enum AVCaptureTimecodeGeneratorSynchronizationStatus : NSInteger;
```

## Topics

### Status values

- [AVCaptureTimecodeGeneratorSynchronizationStatusNotRequired](synchronizationstatus/notrequired.md): The timecode generator does not require active synchronization for a given source.
- [AVCaptureTimecodeGeneratorSynchronizationStatusSourceSelected](synchronizationstatus/sourceselected.md): A timecode source has been selected, but synchronization has not yet started.
- [AVCaptureTimecodeGeneratorSynchronizationStatusSourceUnavailable](synchronizationstatus/sourceunavailable.md): The timecode generator has failed to establish a connection with a given source.
- [AVCaptureTimecodeGeneratorSynchronizationStatusSourceUnsupported](synchronizationstatus/sourceunsupported.md): The timecode generator is receiving data from the source in an unrecognized format.
- [AVCaptureTimecodeGeneratorSynchronizationStatusSynchronized](synchronizationstatus/synchronized.md): The timecode generator is successfully synchronized to the selected source, maintaining active timing alignment.
- [AVCaptureTimecodeGeneratorSynchronizationStatusSynchronizing](synchronizationstatus/synchronizing.md): The timecode generator is actively synchronizing to the selected source.
- [AVCaptureTimecodeGeneratorSynchronizationStatusTimedOut](synchronizationstatus/timedout.md): The synchronization has timed out.
- [AVCaptureTimecodeGeneratorSynchronizationStatusUnknown](synchronizationstatus/unknown.md): The initial state before a source is selected or during error conditions.

## See Also

### Timecode generation

- [AVCaptureTimecodeGenerator](../avcapturetimecodegenerator.md): Generates and synchronizes timecode data from various sources for precise video and audio synchronization.
- [AVCaptureTimecodeGeneratorDelegate](../avcapturetimecodegeneratordelegate.md): A protocol for receiving real-time timecode updates and error notifications from a timecode generator.
- [AVCaptureTimecodeSource](../avcapturetimecode/source.md): Describes a timecode source that a timecode generator can synchronize to.
- [AVCaptureTimecodeSourceType](../avcapturetimecode/sourcetype-swift.enum.md): Defines possible sources for generating timecode in using a timecode generator.
- [AVCaptureTimecode](../avcapturetimecode.md): This structure represents a timecode, adhering to SMPTE standards, which define precise time information and associated timestamps for video or audio synchronization.
- [AVCaptureTimecodeAdvancedByFrames](../avcapturetimecode/advanced%28__by_%29.md): Generates a new timecode by adding a specified number of frames to the given timecode, handling overflow for seconds, minutes, and hours.
- [AVCaptureTimecodeCreateMetadataSampleBufferAssociatedWithPresentationTimeStamp](../avcapturetimecode/createmetadatasamplebuffer%28from_associatedwithpresentationtimestamp_%29.md): Creates a sample buffer containing Timecode Media Description metadata for integration with a video track.
- [AVCaptureTimecodeCreateMetadataSampleBufferForDuration](../avcapturetimecode/createmetadatasamplebuffer%28from_forduration_%29.md): Creates a sample buffer containing Timecode Media Description metadata for a specified duration.
