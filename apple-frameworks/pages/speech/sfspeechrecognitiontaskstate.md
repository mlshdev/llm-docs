> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognitiontaskstate](https://developer.apple.com/documentation/speech/sfspeechrecognitiontaskstate)

# SFSpeechRecognitionTaskState (Swift)

**Framework:** Speech  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

The state of the task associated with the recognition request.

## Declaration

```swift
enum SFSpeechRecognitionTaskState
```

## Topics

### Task states

- [SFSpeechRecognitionTaskState.canceling](sfspeechrecognitiontaskstate/canceling.md): Delivery of recognition results has finished, but audio recording may be ongoing.
- [SFSpeechRecognitionTaskState.completed](sfspeechrecognitiontaskstate/completed.md): Delivery of recognition requests has finished and audio recording has stopped.
- [SFSpeechRecognitionTaskState.finishing](sfspeechrecognitiontaskstate/finishing.md): Audio recording has stopped, but delivery of recognition results may continue.
- [SFSpeechRecognitionTaskState.running](sfspeechrecognitiontaskstate/running.md): Speech recognition (potentially including audio recording) is in progress.
- [SFSpeechRecognitionTaskState.starting](sfspeechrecognitiontaskstate/starting.md): Speech recognition (potentially including audio recording) has not yet started.

### Initializers

- [init(rawValue:)](sfspeechrecognitiontaskstate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### In-progress requests

- [SFSpeechRecognitionTask](sfspeechrecognitiontask.md): A task object for monitoring the speech recognition progress.
- [SFSpeechRecognitionTaskDelegate](sfspeechrecognitiontaskdelegate.md): A protocol with methods for managing multi-utterance speech recognition requests.

# SFSpeechRecognitionTaskState (Objective-C)

**Framework:** Speech  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

The state of the task associated with the recognition request.

## Declaration

```objectivec
enum SFSpeechRecognitionTaskState : NSInteger;
```

## Topics

### Task states

- [SFSpeechRecognitionTaskStateCanceling](sfspeechrecognitiontaskstate/canceling.md): Delivery of recognition results has finished, but audio recording may be ongoing.
- [SFSpeechRecognitionTaskStateCompleted](sfspeechrecognitiontaskstate/completed.md): Delivery of recognition requests has finished and audio recording has stopped.
- [SFSpeechRecognitionTaskStateFinishing](sfspeechrecognitiontaskstate/finishing.md): Audio recording has stopped, but delivery of recognition results may continue.
- [SFSpeechRecognitionTaskStateRunning](sfspeechrecognitiontaskstate/running.md): Speech recognition (potentially including audio recording) is in progress.
- [SFSpeechRecognitionTaskStateStarting](sfspeechrecognitiontaskstate/starting.md): Speech recognition (potentially including audio recording) has not yet started.

## See Also

### In-progress requests

- [SFSpeechRecognitionTask](sfspeechrecognitiontask.md): A task object for monitoring the speech recognition progress.
- [SFSpeechRecognitionTaskDelegate](sfspeechrecognitiontaskdelegate.md): A protocol with methods for managing multi-utterance speech recognition requests.
