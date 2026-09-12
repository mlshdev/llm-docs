> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturetimecodegeneratordelegate/timecodegenerator(_:didupdateavailablesources:)](https://developer.apple.com/documentation/avfoundation/avcapturetimecodegeneratordelegate/timecodegenerator(_:didupdateavailablesources:))

# timecodeGenerator(\_:didUpdateAvailableSources:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Notifies the delegate when the list of available timecode synchronization sources is updated.

## Declaration

```swift
func timecodeGenerator(_ generator: AVCaptureTimecodeGenerator, didUpdateAvailableSources availableSources: [AVCaptureTimecode.Source])
```

## Parameters

- `generator`: The [AVCaptureTimecodeGenerator](../avcapturetimecodegenerator.md) instance providing the source list update.
- `availableSources`: An array of [AVCaptureTimecode.Source](../avcapturetimecode/source.md) objects representing the available timecode synchronization sources.

## See Also

### Responding to timecode events

- [timecodeGenerator(\_:didReceiveUpdate:from:)](timecodegenerator%28__didreceiveupdate_from_%29.md): Notifies the delegate when new, unaligned timecodes are parsed from the specified source.
- [timecodeGenerator(\_:transitionedTo:for:)](timecodegenerator%28__transitionedto_for_%29.md): Notifies the delegate when the synchronization status of a timecode source changes.
- [AVCaptureTimecodeGenerator.SynchronizationStatus](../avcapturetimecodegenerator/synchronizationstatus.md): Constants defining the synchronization status of a timecode generator .

# timecodeGenerator:didUpdateAvailableSources: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Notifies the delegate when the list of available timecode synchronization sources is updated.

## Declaration

```objectivec
- (void) timecodeGenerator:(AVCaptureTimecodeGenerator *) generator didUpdateAvailableSources:(NSArray<AVCaptureTimecodeSource *> *) availableSources;
```

## Parameters

- `generator`: The [AVCaptureTimecodeGenerator](../avcapturetimecodegenerator.md) instance providing the source list update.
- `availableSources`: An array of [AVCaptureTimecodeSource](../avcapturetimecode/source.md) objects representing the available timecode synchronization sources.

## See Also

### Responding to timecode events

- [timecodeGenerator:didReceiveUpdate:fromSource:](timecodegenerator%28__didreceiveupdate_from_%29.md): Notifies the delegate when new, unaligned timecodes are parsed from the specified source.
- [timecodeGenerator:transitionedToSynchronizationStatus:forSource:](timecodegenerator%28__transitionedto_for_%29.md): Notifies the delegate when the synchronization status of a timecode source changes.
- [AVCaptureTimecodeGeneratorSynchronizationStatus](../avcapturetimecodegenerator/synchronizationstatus.md): Constants defining the synchronization status of a timecode generator .
