> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognitiontaskdelegate](https://developer.apple.com/documentation/speech/sfspeechrecognitiontaskdelegate)

# SFSpeechRecognitionTaskDelegate (Swift)

**Framework:** Speech  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

A protocol with methods for managing multi-utterance speech recognition requests.

## Declaration

```swift
protocol SFSpeechRecognitionTaskDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The methods of this protocol give you fine-grained control over the speech recognition process. Specifically, you use this protocol when you want to know the following:

- When the first utterances of speech occur in the audio.
- When the speech recognizer stops accepting audio.
- When the speech recognition process finishes or is canceled.
- When the speech recognizer generates a potential transcription.

Adopt the methods of this protocol in an object and pass that object in to the `delegate` parameter of [recognitionTask(with:delegate:)](sfspeechrecognizer/recognitiontask%28with_delegate_%29.md) when starting your speech recognition task.

## Topics

### Tracking task progress

- [speechRecognitionDidDetectSpeech(\_:)](sfspeechrecognitiontaskdelegate/speechrecognitiondiddetectspeech%28__%29.md): Tells the delegate when the task first detects speech in the source audio.
- [speechRecognitionTaskFinishedReadingAudio(\_:)](sfspeechrecognitiontaskdelegate/speechrecognitiontaskfinishedreadingaudio%28__%29.md): Tells the delegate when the task is no longer accepting new audio input, even if final processing is in progress.

### Getting transcriptions

- [speechRecognitionTask(\_:didHypothesizeTranscription:)](sfspeechrecognitiontaskdelegate/speechrecognitiontask%28__didhypothesizetranscription_%29.md): Tells the delegate that a hypothesized transcription is available.

### Finishing a speech recognition task

- [speechRecognitionTask(\_:didFinishRecognition:)](sfspeechrecognitiontaskdelegate/speechrecognitiontask%28__didfinishrecognition_%29.md): Tells the delegate when the final utterance is recognized.
- [speechRecognitionTask(\_:didFinishSuccessfully:)](sfspeechrecognitiontaskdelegate/speechrecognitiontask%28__didfinishsuccessfully_%29.md): Tells the delegate when the recognition of all requested utterances is finished.
- [speechRecognitionTask(\_:didProcessAudioDuration:)](sfspeechrecognitiontaskdelegate/speechrecognitiontask%28__didprocessaudioduration_%29.md): Tells the delegate how much audio has been processed by the task.
- [speechRecognitionTaskWasCancelled(\_:)](sfspeechrecognitiontaskdelegate/speechrecognitiontaskwascancelled%28__%29.md): Tells the delegate that the task has been canceled.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### In-progress requests

- [SFSpeechRecognitionTask](sfspeechrecognitiontask.md): A task object for monitoring the speech recognition progress.
- [SFSpeechRecognitionTaskState](sfspeechrecognitiontaskstate.md): The state of the task associated with the recognition request.

# SFSpeechRecognitionTaskDelegate (Objective-C)

**Framework:** Speech  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

A protocol with methods for managing multi-utterance speech recognition requests.

## Declaration

```objectivec
@protocol SFSpeechRecognitionTaskDelegate <NSObject>
```

<a id="overview"></a>

## Overview

The methods of this protocol give you fine-grained control over the speech recognition process. Specifically, you use this protocol when you want to know the following:

- When the first utterances of speech occur in the audio.
- When the speech recognizer stops accepting audio.
- When the speech recognition process finishes or is canceled.
- When the speech recognizer generates a potential transcription.

Adopt the methods of this protocol in an object and pass that object in to the `delegate` parameter of [recognitionTaskWithRequest:delegate:](sfspeechrecognizer/recognitiontask%28with_delegate_%29.md) when starting your speech recognition task.

## Topics

### Tracking task progress

- [speechRecognitionDidDetectSpeech:](sfspeechrecognitiontaskdelegate/speechrecognitiondiddetectspeech%28__%29.md): Tells the delegate when the task first detects speech in the source audio.
- [speechRecognitionTaskFinishedReadingAudio:](sfspeechrecognitiontaskdelegate/speechrecognitiontaskfinishedreadingaudio%28__%29.md): Tells the delegate when the task is no longer accepting new audio input, even if final processing is in progress.

### Getting transcriptions

- [speechRecognitionTask:didHypothesizeTranscription:](sfspeechrecognitiontaskdelegate/speechrecognitiontask%28__didhypothesizetranscription_%29.md): Tells the delegate that a hypothesized transcription is available.

### Finishing a speech recognition task

- [speechRecognitionTask:didFinishRecognition:](sfspeechrecognitiontaskdelegate/speechrecognitiontask%28__didfinishrecognition_%29.md): Tells the delegate when the final utterance is recognized.
- [speechRecognitionTask:didFinishSuccessfully:](sfspeechrecognitiontaskdelegate/speechrecognitiontask%28__didfinishsuccessfully_%29.md): Tells the delegate when the recognition of all requested utterances is finished.
- [speechRecognitionTask:didProcessAudioDuration:](sfspeechrecognitiontaskdelegate/speechrecognitiontask%28__didprocessaudioduration_%29.md): Tells the delegate how much audio has been processed by the task.
- [speechRecognitionTaskWasCancelled:](sfspeechrecognitiontaskdelegate/speechrecognitiontaskwascancelled%28__%29.md): Tells the delegate that the task has been canceled.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### In-progress requests

- [SFSpeechRecognitionTask](sfspeechrecognitiontask.md): A task object for monitoring the speech recognition progress.
- [SFSpeechRecognitionTaskState](sfspeechrecognitiontaskstate.md): The state of the task associated with the recognition request.
