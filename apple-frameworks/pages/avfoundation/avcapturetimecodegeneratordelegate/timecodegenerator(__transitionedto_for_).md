> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturetimecodegeneratordelegate/timecodegenerator(_:transitionedto:for:)](https://developer.apple.com/documentation/avfoundation/avcapturetimecodegeneratordelegate/timecodegenerator(_:transitionedto:for:))

# timecodeGenerator(\_:transitionedTo:for:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Notifies the delegate when the synchronization status of a timecode source changes.

## Declaration

```swift
func timecodeGenerator(_ generator: AVCaptureTimecodeGenerator, transitionedTo synchronizationStatus: AVCaptureTimecodeGenerator.SynchronizationStatus, for source: AVCaptureTimecode.Source)
```

## Parameters

- `generator`: The [AVCaptureTimecodeGenerator](../avcapturetimecodegenerator.md) instance providing the status update.
- `synchronizationStatus`: The updated synchronization state.
- `source`: The internal or external source to which the generator synchronizes.

## See Also

### Responding to timecode events

- [timecodeGenerator(\_:didReceiveUpdate:from:)](timecodegenerator%28__didreceiveupdate_from_%29.md): Notifies the delegate when new, unaligned timecodes are parsed from the specified source.
- [timecodeGenerator(\_:didUpdateAvailableSources:)](timecodegenerator%28__didupdateavailablesources_%29.md): Notifies the delegate when the list of available timecode synchronization sources is updated.
- [AVCaptureTimecodeGenerator.SynchronizationStatus](../avcapturetimecodegenerator/synchronizationstatus.md): Constants defining the synchronization status of a timecode generator .

# timecodeGenerator:transitionedToSynchronizationStatus:forSource: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Notifies the delegate when the synchronization status of a timecode source changes.

## Declaration

```objectivec
- (void) timecodeGenerator:(AVCaptureTimecodeGenerator *) generator transitionedToSynchronizationStatus:(AVCaptureTimecodeGeneratorSynchronizationStatus) synchronizationStatus forSource:(AVCaptureTimecodeSource *) source;
```

## Parameters

- `generator`: The [AVCaptureTimecodeGenerator](../avcapturetimecodegenerator.md) instance providing the status update.
- `synchronizationStatus`: The updated synchronization state.
- `source`: The internal or external source to which the generator synchronizes.

## See Also

### Responding to timecode events

- [timecodeGenerator:didReceiveUpdate:fromSource:](timecodegenerator%28__didreceiveupdate_from_%29.md): Notifies the delegate when new, unaligned timecodes are parsed from the specified source.
- [timecodeGenerator:didUpdateAvailableSources:](timecodegenerator%28__didupdateavailablesources_%29.md): Notifies the delegate when the list of available timecode synchronization sources is updated.
- [AVCaptureTimecodeGeneratorSynchronizationStatus](../avcapturetimecodegenerator/synchronizationstatus.md): Constants defining the synchronization status of a timecode generator .
