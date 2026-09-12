> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognitiontaskdelegate/speechrecognitiontask(_:didhypothesizetranscription:)](https://developer.apple.com/documentation/speech/sfspeechrecognitiontaskdelegate/speechrecognitiontask(_:didhypothesizetranscription:))

# speechRecognitionTask(\_:didHypothesizeTranscription:) (Swift)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Tells the delegate that a hypothesized transcription is available.

## Declaration

```swift
optional func speechRecognitionTask(_ task: SFSpeechRecognitionTask, didHypothesizeTranscription transcription: SFTranscription)
```

## Parameters

- `task`: The speech recognition task (an [SFSpeechRecognitionTask](../sfspeechrecognitiontask.md) object) that represents the request.
- `transcription`: The hypothesized transcription in an [SFTranscription](../sftranscription.md) object.

<a id="discussion"></a>

## Discussion

This method is called for all recognitions, including partial recognitions.

# speechRecognitionTask:didHypothesizeTranscription: (Objective-C)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Tells the delegate that a hypothesized transcription is available.

## Declaration

```objectivec
- (void) speechRecognitionTask:(SFSpeechRecognitionTask *) task didHypothesizeTranscription:(SFTranscription *) transcription;
```

## Parameters

- `task`: The speech recognition task (an [SFSpeechRecognitionTask](../sfspeechrecognitiontask.md) object) that represents the request.
- `transcription`: The hypothesized transcription in an [SFTranscription](../sftranscription.md) object.

<a id="discussion"></a>

## Discussion

This method is called for all recognitions, including partial recognitions.
