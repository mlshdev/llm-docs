> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognitiontaskdelegate/speechrecognitiontask(_:didfinishsuccessfully:)](https://developer.apple.com/documentation/speech/sfspeechrecognitiontaskdelegate/speechrecognitiontask(_:didfinishsuccessfully:))

# speechRecognitionTask(\_:didFinishSuccessfully:) (Swift)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Tells the delegate when the recognition of all requested utterances is finished.

## Declaration

```swift
optional func speechRecognitionTask(_ task: SFSpeechRecognitionTask, didFinishSuccessfully successfully: Bool)
```

## Parameters

- `task`: The speech recognition task (an [SFSpeechRecognitionTask](../sfspeechrecognitiontask.md) object) that represents the request.
- `successfully`: A Boolean value that indicates whether the task was successful. When this parameter is `false`, use the [error](../sfspeechrecognitiontask/error.md) property of the task to get information about why the task was unsuccessful.

## See Also

### Finishing a speech recognition task

- [speechRecognitionTask(\_:didFinishRecognition:)](speechrecognitiontask%28__didfinishrecognition_%29.md): Tells the delegate when the final utterance is recognized.
- [speechRecognitionTask(\_:didProcessAudioDuration:)](speechrecognitiontask%28__didprocessaudioduration_%29.md): Tells the delegate how much audio has been processed by the task.
- [speechRecognitionTaskWasCancelled(\_:)](speechrecognitiontaskwascancelled%28__%29.md): Tells the delegate that the task has been canceled.

# speechRecognitionTask:didFinishSuccessfully: (Objective-C)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Tells the delegate when the recognition of all requested utterances is finished.

## Declaration

```objectivec
- (void) speechRecognitionTask:(SFSpeechRecognitionTask *) task didFinishSuccessfully:(BOOL) successfully;
```

## Parameters

- `task`: The speech recognition task (an [SFSpeechRecognitionTask](../sfspeechrecognitiontask.md) object) that represents the request.
- `successfully`: A Boolean value that indicates whether the task was successful. When this parameter is `false`, use the [error](../sfspeechrecognitiontask/error.md) property of the task to get information about why the task was unsuccessful.

## See Also

### Finishing a speech recognition task

- [speechRecognitionTask:didFinishRecognition:](speechrecognitiontask%28__didfinishrecognition_%29.md): Tells the delegate when the final utterance is recognized.
- [speechRecognitionTask:didProcessAudioDuration:](speechrecognitiontask%28__didprocessaudioduration_%29.md): Tells the delegate how much audio has been processed by the task.
- [speechRecognitionTaskWasCancelled:](speechrecognitiontaskwascancelled%28__%29.md): Tells the delegate that the task has been canceled.
