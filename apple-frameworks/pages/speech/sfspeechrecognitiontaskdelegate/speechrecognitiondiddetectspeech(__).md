> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognitiontaskdelegate/speechrecognitiondiddetectspeech(_:)](https://developer.apple.com/documentation/speech/sfspeechrecognitiontaskdelegate/speechrecognitiondiddetectspeech(_:))

# speechRecognitionDidDetectSpeech(\_:) (Swift)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Tells the delegate when the task first detects speech in the source audio.

## Declaration

```swift
optional func speechRecognitionDidDetectSpeech(_ task: SFSpeechRecognitionTask)
```

## Parameters

- `task`: The speech recognition task (an [SFSpeechRecognitionTask](../sfspeechrecognitiontask.md) object) that represents the request.

## See Also

### Tracking task progress

- [speechRecognitionTaskFinishedReadingAudio(\_:)](speechrecognitiontaskfinishedreadingaudio%28__%29.md): Tells the delegate when the task is no longer accepting new audio input, even if final processing is in progress.

# speechRecognitionDidDetectSpeech: (Objective-C)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Tells the delegate when the task first detects speech in the source audio.

## Declaration

```objectivec
- (void) speechRecognitionDidDetectSpeech:(SFSpeechRecognitionTask *) task;
```

## Parameters

- `task`: The speech recognition task (an [SFSpeechRecognitionTask](../sfspeechrecognitiontask.md) object) that represents the request.

## See Also

### Tracking task progress

- [speechRecognitionTaskFinishedReadingAudio:](speechrecognitiontaskfinishedreadingaudio%28__%29.md): Tells the delegate when the task is no longer accepting new audio input, even if final processing is in progress.
