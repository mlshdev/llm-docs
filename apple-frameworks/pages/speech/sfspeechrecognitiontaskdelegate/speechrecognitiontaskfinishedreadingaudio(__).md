> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognitiontaskdelegate/speechrecognitiontaskfinishedreadingaudio(_:)](https://developer.apple.com/documentation/speech/sfspeechrecognitiontaskdelegate/speechrecognitiontaskfinishedreadingaudio(_:))

# speechRecognitionTaskFinishedReadingAudio(\_:) (Swift)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Tells the delegate when the task is no longer accepting new audio input, even if final processing is in progress.

## Declaration

```swift
optional func speechRecognitionTaskFinishedReadingAudio(_ task: SFSpeechRecognitionTask)
```

## Parameters

- `task`: The speech recognition task (an [SFSpeechRecognitionTask](../sfspeechrecognitiontask.md) object) that represents the request.

## See Also

### Tracking task progress

- [speechRecognitionDidDetectSpeech(\_:)](speechrecognitiondiddetectspeech%28__%29.md): Tells the delegate when the task first detects speech in the source audio.

# speechRecognitionTaskFinishedReadingAudio: (Objective-C)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Tells the delegate when the task is no longer accepting new audio input, even if final processing is in progress.

## Declaration

```objectivec
- (void) speechRecognitionTaskFinishedReadingAudio:(SFSpeechRecognitionTask *) task;
```

## Parameters

- `task`: The speech recognition task (an [SFSpeechRecognitionTask](../sfspeechrecognitiontask.md) object) that represents the request.

## See Also

### Tracking task progress

- [speechRecognitionDidDetectSpeech:](speechrecognitiondiddetectspeech%28__%29.md): Tells the delegate when the task first detects speech in the source audio.
