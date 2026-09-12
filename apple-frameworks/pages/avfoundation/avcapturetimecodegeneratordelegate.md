> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturetimecodegeneratordelegate](https://developer.apple.com/documentation/avfoundation/avcapturetimecodegeneratordelegate)

# AVCaptureTimecodeGeneratorDelegate (Swift)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A protocol for receiving real-time timecode updates and error notifications from a timecode generator.

## Declaration

```swift
protocol AVCaptureTimecodeGeneratorDelegate : NSObjectProtocol
```

## Topics

### Responding to timecode events

- [timecodeGenerator(\_:didReceiveUpdate:from:)](avcapturetimecodegeneratordelegate/timecodegenerator%28__didreceiveupdate_from_%29.md): Notifies the delegate when new, unaligned timecodes are parsed from the specified source.
- [timecodeGenerator(\_:didUpdateAvailableSources:)](avcapturetimecodegeneratordelegate/timecodegenerator%28__didupdateavailablesources_%29.md): Notifies the delegate when the list of available timecode synchronization sources is updated.
- [timecodeGenerator(\_:transitionedTo:for:)](avcapturetimecodegeneratordelegate/timecodegenerator%28__transitionedto_for_%29.md): Notifies the delegate when the synchronization status of a timecode source changes.
- [AVCaptureTimecodeGenerator.SynchronizationStatus](avcapturetimecodegenerator/synchronizationstatus.md): Constants defining the synchronization status of a timecode generator .

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Timecode generation

- [AVCaptureTimecodeGenerator](avcapturetimecodegenerator.md): Generates and synchronizes timecode data from various sources for precise video and audio synchronization.
- [AVCaptureTimecodeGenerator.SynchronizationStatus](avcapturetimecodegenerator/synchronizationstatus.md): Constants defining the synchronization status of a timecode generator .
- [AVCaptureTimecode.Source](avcapturetimecode/source.md): Describes a timecode source that a timecode generator can synchronize to.
- [AVCaptureTimecode.SourceType](avcapturetimecode/sourcetype-swift.enum.md): Defines possible sources for generating timecode in using a timecode generator.
- [AVCaptureTimecode](avcapturetimecode.md): This structure represents a timecode, adhering to SMPTE standards, which define precise time information and associated timestamps for video or audio synchronization.
- [advanced(\_:by:)](avcapturetimecode/advanced%28__by_%29.md): Generates a new timecode by adding a specified number of frames to the given timecode, handling overflow for seconds, minutes, and hours.
- [createMetadataSampleBuffer(from:associatedWithPresentationTimeStamp:)](avcapturetimecode/createmetadatasamplebuffer%28from_associatedwithpresentationtimestamp_%29.md): Creates a sample buffer containing Timecode Media Description metadata for integration with a video track.
- [createMetadataSampleBuffer(from:forDuration:)](avcapturetimecode/createmetadatasamplebuffer%28from_forduration_%29.md): Creates a sample buffer containing Timecode Media Description metadata for a specified duration.

# AVCaptureTimecodeGeneratorDelegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A protocol for receiving real-time timecode updates and error notifications from a timecode generator.

## Declaration

```objectivec
@protocol AVCaptureTimecodeGeneratorDelegate <NSObject>
```

## Topics

### Responding to timecode events

- [timecodeGenerator:didReceiveUpdate:fromSource:](avcapturetimecodegeneratordelegate/timecodegenerator%28__didreceiveupdate_from_%29.md): Notifies the delegate when new, unaligned timecodes are parsed from the specified source.
- [timecodeGenerator:didUpdateAvailableSources:](avcapturetimecodegeneratordelegate/timecodegenerator%28__didupdateavailablesources_%29.md): Notifies the delegate when the list of available timecode synchronization sources is updated.
- [timecodeGenerator:transitionedToSynchronizationStatus:forSource:](avcapturetimecodegeneratordelegate/timecodegenerator%28__transitionedto_for_%29.md): Notifies the delegate when the synchronization status of a timecode source changes.
- [AVCaptureTimecodeGeneratorSynchronizationStatus](avcapturetimecodegenerator/synchronizationstatus.md): Constants defining the synchronization status of a timecode generator .

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Timecode generation

- [AVCaptureTimecodeGenerator](avcapturetimecodegenerator.md): Generates and synchronizes timecode data from various sources for precise video and audio synchronization.
- [AVCaptureTimecodeGeneratorSynchronizationStatus](avcapturetimecodegenerator/synchronizationstatus.md): Constants defining the synchronization status of a timecode generator .
- [AVCaptureTimecodeSource](avcapturetimecode/source.md): Describes a timecode source that a timecode generator can synchronize to.
- [AVCaptureTimecodeSourceType](avcapturetimecode/sourcetype-swift.enum.md): Defines possible sources for generating timecode in using a timecode generator.
- [AVCaptureTimecode](avcapturetimecode.md): This structure represents a timecode, adhering to SMPTE standards, which define precise time information and associated timestamps for video or audio synchronization.
- [AVCaptureTimecodeAdvancedByFrames](avcapturetimecode/advanced%28__by_%29.md): Generates a new timecode by adding a specified number of frames to the given timecode, handling overflow for seconds, minutes, and hours.
- [AVCaptureTimecodeCreateMetadataSampleBufferAssociatedWithPresentationTimeStamp](avcapturetimecode/createmetadatasamplebuffer%28from_associatedwithpresentationtimestamp_%29.md): Creates a sample buffer containing Timecode Media Description metadata for integration with a video track.
- [AVCaptureTimecodeCreateMetadataSampleBufferForDuration](avcapturetimecode/createmetadatasamplebuffer%28from_forduration_%29.md): Creates a sample buffer containing Timecode Media Description metadata for a specified duration.
