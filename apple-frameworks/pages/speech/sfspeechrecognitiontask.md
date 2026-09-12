> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognitiontask](https://developer.apple.com/documentation/speech/sfspeechrecognitiontask)

# SFSpeechRecognitionTask (Swift)

**Framework:** Speech  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

A task object for monitoring the speech recognition progress.

## Declaration

```swift
class SFSpeechRecognitionTask
```

<a id="overview"></a>

## Overview

Use an `SFSpeechRecognitionTask` object to determine the state of a speech recognition task, to cancel an ongoing task, or to signal the end of the task.

You don’t create speech recognition task objects directly. Instead, you receive one of these objects after calling [recognitionTask(with:resultHandler:)](sfspeechrecognizer/recognitiontask%28with_resulthandler_%29.md) or [recognitionTask(with:delegate:)](sfspeechrecognizer/recognitiontask%28with_delegate_%29.md) on your [SFSpeechRecognizer](sfspeechrecognizer.md) object.

## Topics

### Canceling a speech recognition task

- [cancel()](sfspeechrecognitiontask/cancel%28%29.md): Cancels the current speech recognition task.
- [isCancelled](sfspeechrecognitiontask/iscancelled.md): A Boolean value that indicates whether the speech recognition task was canceled.

### Finishing a speech recognition task

- [finish()](sfspeechrecognitiontask/finish%28%29.md): Stops accepting new audio and finishes processing on the audio input that has already been accepted.
- [isFinishing](sfspeechrecognitiontask/isfinishing.md): A Boolean value that indicates whether audio input has stopped.

### Monitoring recognition progress

- [state](sfspeechrecognitiontask/state.md): The current state of the speech recognition task.
- [SFSpeechRecognitionTaskState](sfspeechrecognitiontaskstate.md): The state of the task associated with the recognition request.
- [error](sfspeechrecognitiontask/error.md): An error object that specifies the error that occurred during a speech recognition task.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### In-progress requests

- [SFSpeechRecognitionTaskDelegate](sfspeechrecognitiontaskdelegate.md): A protocol with methods for managing multi-utterance speech recognition requests.
- [SFSpeechRecognitionTaskState](sfspeechrecognitiontaskstate.md): The state of the task associated with the recognition request.

# SFSpeechRecognitionTask (Objective-C)

**Framework:** Speech  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

A task object for monitoring the speech recognition progress.

## Declaration

```objectivec
@interface SFSpeechRecognitionTask : NSObject
```

<a id="overview"></a>

## Overview

Use an `SFSpeechRecognitionTask` object to determine the state of a speech recognition task, to cancel an ongoing task, or to signal the end of the task.

You don’t create speech recognition task objects directly. Instead, you receive one of these objects after calling [recognitionTaskWithRequest:resultHandler:](sfspeechrecognizer/recognitiontask%28with_resulthandler_%29.md) or [recognitionTaskWithRequest:delegate:](sfspeechrecognizer/recognitiontask%28with_delegate_%29.md) on your [SFSpeechRecognizer](sfspeechrecognizer.md) object.

## Topics

### Canceling a speech recognition task

- [cancel](sfspeechrecognitiontask/cancel%28%29.md): Cancels the current speech recognition task.
- [cancelled](sfspeechrecognitiontask/iscancelled.md): A Boolean value that indicates whether the speech recognition task was canceled.

### Finishing a speech recognition task

- [finish](sfspeechrecognitiontask/finish%28%29.md): Stops accepting new audio and finishes processing on the audio input that has already been accepted.
- [finishing](sfspeechrecognitiontask/isfinishing.md): A Boolean value that indicates whether audio input has stopped.

### Monitoring recognition progress

- [state](sfspeechrecognitiontask/state.md): The current state of the speech recognition task.
- [SFSpeechRecognitionTaskState](sfspeechrecognitiontaskstate.md): The state of the task associated with the recognition request.
- [error](sfspeechrecognitiontask/error.md): An error object that specifies the error that occurred during a speech recognition task.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### In-progress requests

- [SFSpeechRecognitionTaskDelegate](sfspeechrecognitiontaskdelegate.md): A protocol with methods for managing multi-utterance speech recognition requests.
- [SFSpeechRecognitionTaskState](sfspeechrecognitiontaskstate.md): The state of the task associated with the recognition request.
