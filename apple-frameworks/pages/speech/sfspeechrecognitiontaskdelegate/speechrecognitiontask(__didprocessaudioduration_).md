> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognitiontaskdelegate/speechrecognitiontask(_:didprocessaudioduration:)](https://developer.apple.com/documentation/speech/sfspeechrecognitiontaskdelegate/speechrecognitiontask(_:didprocessaudioduration:))

# speechRecognitionTask(\_:didProcessAudioDuration:) (Swift)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Tells the delegate how much audio has been processed by the task.

## Declaration

```swift
optional func speechRecognitionTask(_ task: SFSpeechRecognitionTask, didProcessAudioDuration duration: TimeInterval)
```

## Parameters

- `task`: The speech recognition task (an [SFSpeechRecognitionTask](../sfspeechrecognitiontask.md) object) that represents the request.
- `duration`: The seconds of audio input that the recognizer has processed.

## See Also

### Finishing a speech recognition task

- [speechRecognitionTask(\_:didFinishRecognition:)](speechrecognitiontask%28__didfinishrecognition_%29.md): Tells the delegate when the final utterance is recognized.
- [speechRecognitionTask(\_:didFinishSuccessfully:)](speechrecognitiontask%28__didfinishsuccessfully_%29.md): Tells the delegate when the recognition of all requested utterances is finished.
- [speechRecognitionTaskWasCancelled(\_:)](speechrecognitiontaskwascancelled%28__%29.md): Tells the delegate that the task has been canceled.

# speechRecognitionTask:didProcessAudioDuration: (Objective-C)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Tells the delegate how much audio has been processed by the task.

## Declaration

```objectivec
- (void) speechRecognitionTask:(SFSpeechRecognitionTask *) task didProcessAudioDuration:(NSTimeInterval) duration;
```

## Parameters

- `task`: The speech recognition task (an [SFSpeechRecognitionTask](../sfspeechrecognitiontask.md) object) that represents the request.
- `duration`: The seconds of audio input that the recognizer has processed.

## See Also

### Finishing a speech recognition task

- [speechRecognitionTask:didFinishRecognition:](speechrecognitiontask%28__didfinishrecognition_%29.md): Tells the delegate when the final utterance is recognized.
- [speechRecognitionTask:didFinishSuccessfully:](speechrecognitiontask%28__didfinishsuccessfully_%29.md): Tells the delegate when the recognition of all requested utterances is finished.
- [speechRecognitionTaskWasCancelled:](speechrecognitiontaskwascancelled%28__%29.md): Tells the delegate that the task has been canceled.
