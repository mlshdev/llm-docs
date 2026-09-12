> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognitiontaskdelegate/speechrecognitiontask(_:didfinishrecognition:)](https://developer.apple.com/documentation/speech/sfspeechrecognitiontaskdelegate/speechrecognitiontask(_:didfinishrecognition:))

# speechRecognitionTask(\_:didFinishRecognition:) (Swift)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Tells the delegate when the final utterance is recognized.

## Declaration

```swift
optional func speechRecognitionTask(_ task: SFSpeechRecognitionTask, didFinishRecognition recognitionResult: SFSpeechRecognitionResult)
```

## Parameters

- `task`: The speech recognition task (an [SFSpeechRecognitionTask](../sfspeechrecognitiontask.md) object) that represents the request.
- `recognitionResult`: A recognized utterance that contains one or more transcription hypotheses in an [SFSpeechRecognitionResult](../sfspeechrecognitionresult.md) object.

<a id="discussion"></a>

## Discussion

When this method is called, the delegate should expect no further information about the utterance to be reported.

## See Also

### Finishing a speech recognition task

- [speechRecognitionTask(\_:didFinishSuccessfully:)](speechrecognitiontask%28__didfinishsuccessfully_%29.md): Tells the delegate when the recognition of all requested utterances is finished.
- [speechRecognitionTask(\_:didProcessAudioDuration:)](speechrecognitiontask%28__didprocessaudioduration_%29.md): Tells the delegate how much audio has been processed by the task.
- [speechRecognitionTaskWasCancelled(\_:)](speechrecognitiontaskwascancelled%28__%29.md): Tells the delegate that the task has been canceled.

# speechRecognitionTask:didFinishRecognition: (Objective-C)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Tells the delegate when the final utterance is recognized.

## Declaration

```objectivec
- (void) speechRecognitionTask:(SFSpeechRecognitionTask *) task didFinishRecognition:(SFSpeechRecognitionResult *) recognitionResult;
```

## Parameters

- `task`: The speech recognition task (an [SFSpeechRecognitionTask](../sfspeechrecognitiontask.md) object) that represents the request.
- `recognitionResult`: A recognized utterance that contains one or more transcription hypotheses in an [SFSpeechRecognitionResult](../sfspeechrecognitionresult.md) object.

<a id="discussion"></a>

## Discussion

When this method is called, the delegate should expect no further information about the utterance to be reported.

## See Also

### Finishing a speech recognition task

- [speechRecognitionTask:didFinishSuccessfully:](speechrecognitiontask%28__didfinishsuccessfully_%29.md): Tells the delegate when the recognition of all requested utterances is finished.
- [speechRecognitionTask:didProcessAudioDuration:](speechrecognitiontask%28__didprocessaudioduration_%29.md): Tells the delegate how much audio has been processed by the task.
- [speechRecognitionTaskWasCancelled:](speechrecognitiontaskwascancelled%28__%29.md): Tells the delegate that the task has been canceled.
