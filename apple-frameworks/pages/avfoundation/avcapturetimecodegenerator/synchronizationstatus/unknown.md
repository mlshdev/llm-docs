> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturetimecodegenerator/synchronizationstatus/unknown](https://developer.apple.com/documentation/avfoundation/avcapturetimecodegenerator/synchronizationstatus/unknown)

# AVCaptureTimecodeGenerator.SynchronizationStatus.unknown (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The initial state before a source is selected or during error conditions.

## Declaration

```swift
case unknown
```

## See Also

### Status values

- [AVCaptureTimecodeGenerator.SynchronizationStatus.notRequired](notrequired.md): The timecode generator does not require active synchronization for a given source.
- [AVCaptureTimecodeGenerator.SynchronizationStatus.sourceSelected](sourceselected.md): A timecode source has been selected, but synchronization has not yet started.
- [AVCaptureTimecodeGenerator.SynchronizationStatus.sourceUnavailable](sourceunavailable.md): The timecode generator has failed to establish a connection with a given source.
- [AVCaptureTimecodeGenerator.SynchronizationStatus.sourceUnsupported](sourceunsupported.md): The timecode generator is receiving data from the source in an unrecognized format.
- [AVCaptureTimecodeGenerator.SynchronizationStatus.synchronized](synchronized.md): The timecode generator is successfully synchronized to the selected source, maintaining active timing alignment.
- [AVCaptureTimecodeGenerator.SynchronizationStatus.synchronizing](synchronizing.md): The timecode generator is actively synchronizing to the selected source.
- [AVCaptureTimecodeGenerator.SynchronizationStatus.timedOut](timedout.md): The synchronization has timed out.

# AVCaptureTimecodeGeneratorSynchronizationStatusUnknown (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The initial state before a source is selected or during error conditions.

## Declaration

```objectivec
AVCaptureTimecodeGeneratorSynchronizationStatusUnknown
```

## See Also

### Status values

- [AVCaptureTimecodeGeneratorSynchronizationStatusNotRequired](notrequired.md): The timecode generator does not require active synchronization for a given source.
- [AVCaptureTimecodeGeneratorSynchronizationStatusSourceSelected](sourceselected.md): A timecode source has been selected, but synchronization has not yet started.
- [AVCaptureTimecodeGeneratorSynchronizationStatusSourceUnavailable](sourceunavailable.md): The timecode generator has failed to establish a connection with a given source.
- [AVCaptureTimecodeGeneratorSynchronizationStatusSourceUnsupported](sourceunsupported.md): The timecode generator is receiving data from the source in an unrecognized format.
- [AVCaptureTimecodeGeneratorSynchronizationStatusSynchronized](synchronized.md): The timecode generator is successfully synchronized to the selected source, maintaining active timing alignment.
- [AVCaptureTimecodeGeneratorSynchronizationStatusSynchronizing](synchronizing.md): The timecode generator is actively synchronizing to the selected source.
- [AVCaptureTimecodeGeneratorSynchronizationStatusTimedOut](timedout.md): The synchronization has timed out.
