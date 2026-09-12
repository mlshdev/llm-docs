> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturetimecodegenerator/synchronizationstatus/synchronizing](https://developer.apple.com/documentation/avfoundation/avcapturetimecodegenerator/synchronizationstatus/synchronizing)

# AVCaptureTimecodeGenerator.SynchronizationStatus.synchronizing (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The timecode generator is actively synchronizing to the selected source.

## Declaration

```swift
case synchronizing
```

## See Also

### Status values

- [AVCaptureTimecodeGenerator.SynchronizationStatus.notRequired](notrequired.md): The timecode generator does not require active synchronization for a given source.
- [AVCaptureTimecodeGenerator.SynchronizationStatus.sourceSelected](sourceselected.md): A timecode source has been selected, but synchronization has not yet started.
- [AVCaptureTimecodeGenerator.SynchronizationStatus.sourceUnavailable](sourceunavailable.md): The timecode generator has failed to establish a connection with a given source.
- [AVCaptureTimecodeGenerator.SynchronizationStatus.sourceUnsupported](sourceunsupported.md): The timecode generator is receiving data from the source in an unrecognized format.
- [AVCaptureTimecodeGenerator.SynchronizationStatus.synchronized](synchronized.md): The timecode generator is successfully synchronized to the selected source, maintaining active timing alignment.
- [AVCaptureTimecodeGenerator.SynchronizationStatus.timedOut](timedout.md): The synchronization has timed out.
- [AVCaptureTimecodeGenerator.SynchronizationStatus.unknown](unknown.md): The initial state before a source is selected or during error conditions.

# AVCaptureTimecodeGeneratorSynchronizationStatusSynchronizing (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The timecode generator is actively synchronizing to the selected source.

## Declaration

```objectivec
AVCaptureTimecodeGeneratorSynchronizationStatusSynchronizing
```

## See Also

### Status values

- [AVCaptureTimecodeGeneratorSynchronizationStatusNotRequired](notrequired.md): The timecode generator does not require active synchronization for a given source.
- [AVCaptureTimecodeGeneratorSynchronizationStatusSourceSelected](sourceselected.md): A timecode source has been selected, but synchronization has not yet started.
- [AVCaptureTimecodeGeneratorSynchronizationStatusSourceUnavailable](sourceunavailable.md): The timecode generator has failed to establish a connection with a given source.
- [AVCaptureTimecodeGeneratorSynchronizationStatusSourceUnsupported](sourceunsupported.md): The timecode generator is receiving data from the source in an unrecognized format.
- [AVCaptureTimecodeGeneratorSynchronizationStatusSynchronized](synchronized.md): The timecode generator is successfully synchronized to the selected source, maintaining active timing alignment.
- [AVCaptureTimecodeGeneratorSynchronizationStatusTimedOut](timedout.md): The synchronization has timed out.
- [AVCaptureTimecodeGeneratorSynchronizationStatusUnknown](unknown.md): The initial state before a source is selected or during error conditions.
