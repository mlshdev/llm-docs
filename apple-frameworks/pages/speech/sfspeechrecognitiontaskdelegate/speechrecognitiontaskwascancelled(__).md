> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognitiontaskdelegate/speechrecognitiontaskwascancelled(_:)](https://developer.apple.com/documentation/speech/sfspeechrecognitiontaskdelegate/speechrecognitiontaskwascancelled(_:))

# speechRecognitionTaskWasCancelled(\_:) (Swift)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Tells the delegate that the task has been canceled.

## Declaration

```swift
optional func speechRecognitionTaskWasCancelled(_ task: SFSpeechRecognitionTask)
```

## Parameters

- `task`: The speech recognition task (an [SFSpeechRecognitionTask](../sfspeechrecognitiontask.md) object) that represents the request.

<a id="discussion"></a>

## Discussion

A speech recognition task can be canceled by the user, by your app, or by the system.

## See Also

### Finishing a speech recognition task

- [speechRecognitionTask(\_:didFinishRecognition:)](speechrecognitiontask%28__didfinishrecognition_%29.md): Tells the delegate when the final utterance is recognized.
- [speechRecognitionTask(\_:didFinishSuccessfully:)](speechrecognitiontask%28__didfinishsuccessfully_%29.md): Tells the delegate when the recognition of all requested utterances is finished.
- [speechRecognitionTask(\_:didProcessAudioDuration:)](speechrecognitiontask%28__didprocessaudioduration_%29.md): Tells the delegate how much audio has been processed by the task.

# speechRecognitionTaskWasCancelled: (Objective-C)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Tells the delegate that the task has been canceled.

## Declaration

```objectivec
- (void) speechRecognitionTaskWasCancelled:(SFSpeechRecognitionTask *) task;
```

## Parameters

- `task`: The speech recognition task (an [SFSpeechRecognitionTask](../sfspeechrecognitiontask.md) object) that represents the request.

<a id="discussion"></a>

## Discussion

A speech recognition task can be canceled by the user, by your app, or by the system.

## See Also

### Finishing a speech recognition task

- [speechRecognitionTask:didFinishRecognition:](speechrecognitiontask%28__didfinishrecognition_%29.md): Tells the delegate when the final utterance is recognized.
- [speechRecognitionTask:didFinishSuccessfully:](speechrecognitiontask%28__didfinishsuccessfully_%29.md): Tells the delegate when the recognition of all requested utterances is finished.
- [speechRecognitionTask:didProcessAudioDuration:](speechrecognitiontask%28__didprocessaudioduration_%29.md): Tells the delegate how much audio has been processed by the task.
