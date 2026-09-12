> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturetimecodegeneratordelegate/timecodegenerator(_:didreceiveupdate:from:)](https://developer.apple.com/documentation/avfoundation/avcapturetimecodegeneratordelegate/timecodegenerator(_:didreceiveupdate:from:))

# timecodeGenerator(\_:didReceiveUpdate:from:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Notifies the delegate when new, unaligned timecodes are parsed from the specified source.

## Declaration

```swift
func timecodeGenerator(_ generator: AVCaptureTimecodeGenerator, didReceiveUpdate timecode: AVCaptureTimecode, from source: AVCaptureTimecode.Source)
```

## Parameters

- `generator`: The timecode generator providing the update.
- `timecode`: The updated timecode data.
- `source`: The source from which the timecode was received.

## See Also

### Responding to timecode events

- [timecodeGenerator(\_:didUpdateAvailableSources:)](timecodegenerator%28__didupdateavailablesources_%29.md): Notifies the delegate when the list of available timecode synchronization sources is updated.
- [timecodeGenerator(\_:transitionedTo:for:)](timecodegenerator%28__transitionedto_for_%29.md): Notifies the delegate when the synchronization status of a timecode source changes.
- [AVCaptureTimecodeGenerator.SynchronizationStatus](../avcapturetimecodegenerator/synchronizationstatus.md): Constants defining the synchronization status of a timecode generator .

# timecodeGenerator:didReceiveUpdate:fromSource: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Notifies the delegate when new, unaligned timecodes are parsed from the specified source.

## Declaration

```objectivec
- (void) timecodeGenerator:(AVCaptureTimecodeGenerator *) generator didReceiveUpdate:(AVCaptureTimecode) timecode fromSource:(AVCaptureTimecodeSource *) source;
```

## Parameters

- `generator`: The timecode generator providing the update.
- `timecode`: The updated timecode data.
- `source`: The source from which the timecode was received.

## See Also

### Responding to timecode events

- [timecodeGenerator:didUpdateAvailableSources:](timecodegenerator%28__didupdateavailablesources_%29.md): Notifies the delegate when the list of available timecode synchronization sources is updated.
- [timecodeGenerator:transitionedToSynchronizationStatus:forSource:](timecodegenerator%28__transitionedto_for_%29.md): Notifies the delegate when the synchronization status of a timecode source changes.
- [AVCaptureTimecodeGeneratorSynchronizationStatus](../avcapturetimecodegenerator/synchronizationstatus.md): Constants defining the synchronization status of a timecode generator .
