> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognitiontaskstate/canceling](https://developer.apple.com/documentation/speech/sfspeechrecognitiontaskstate/canceling)

# SFSpeechRecognitionTaskState.canceling (Swift)

**Framework:** Speech  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Delivery of recognition results has finished, but audio recording may be ongoing.

## Declaration

```swift
case canceling
```

## See Also

### Task states

- [SFSpeechRecognitionTaskState.completed](completed.md): Delivery of recognition requests has finished and audio recording has stopped.
- [SFSpeechRecognitionTaskState.finishing](finishing.md): Audio recording has stopped, but delivery of recognition results may continue.
- [SFSpeechRecognitionTaskState.running](running.md): Speech recognition (potentially including audio recording) is in progress.
- [SFSpeechRecognitionTaskState.starting](starting.md): Speech recognition (potentially including audio recording) has not yet started.

# SFSpeechRecognitionTaskStateCanceling (Objective-C)

**Framework:** Speech  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Delivery of recognition results has finished, but audio recording may be ongoing.

## Declaration

```objectivec
SFSpeechRecognitionTaskStateCanceling
```

## See Also

### Task states

- [SFSpeechRecognitionTaskStateCompleted](completed.md): Delivery of recognition requests has finished and audio recording has stopped.
- [SFSpeechRecognitionTaskStateFinishing](finishing.md): Audio recording has stopped, but delivery of recognition results may continue.
- [SFSpeechRecognitionTaskStateRunning](running.md): Speech recognition (potentially including audio recording) is in progress.
- [SFSpeechRecognitionTaskStateStarting](starting.md): Speech recognition (potentially including audio recording) has not yet started.
