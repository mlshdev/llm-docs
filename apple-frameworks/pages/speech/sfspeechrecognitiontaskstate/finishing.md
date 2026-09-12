> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognitiontaskstate/finishing](https://developer.apple.com/documentation/speech/sfspeechrecognitiontaskstate/finishing)

# SFSpeechRecognitionTaskState.finishing (Swift)

**Framework:** Speech  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Audio recording has stopped, but delivery of recognition results may continue.

## Declaration

```swift
case finishing
```

## See Also

### Task states

- [SFSpeechRecognitionTaskState.canceling](canceling.md): Delivery of recognition results has finished, but audio recording may be ongoing.
- [SFSpeechRecognitionTaskState.completed](completed.md): Delivery of recognition requests has finished and audio recording has stopped.
- [SFSpeechRecognitionTaskState.running](running.md): Speech recognition (potentially including audio recording) is in progress.
- [SFSpeechRecognitionTaskState.starting](starting.md): Speech recognition (potentially including audio recording) has not yet started.

# SFSpeechRecognitionTaskStateFinishing (Objective-C)

**Framework:** Speech  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Audio recording has stopped, but delivery of recognition results may continue.

## Declaration

```objectivec
SFSpeechRecognitionTaskStateFinishing
```

## See Also

### Task states

- [SFSpeechRecognitionTaskStateCanceling](canceling.md): Delivery of recognition results has finished, but audio recording may be ongoing.
- [SFSpeechRecognitionTaskStateCompleted](completed.md): Delivery of recognition requests has finished and audio recording has stopped.
- [SFSpeechRecognitionTaskStateRunning](running.md): Speech recognition (potentially including audio recording) is in progress.
- [SFSpeechRecognitionTaskStateStarting](starting.md): Speech recognition (potentially including audio recording) has not yet started.
