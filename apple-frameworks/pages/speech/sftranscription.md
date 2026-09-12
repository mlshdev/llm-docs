> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sftranscription](https://developer.apple.com/documentation/speech/sftranscription)

# SFTranscription (Swift)

**Framework:** Speech  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

A textual representation of the specified speech in its entirety, as recognized by the speech recognizer.

## Declaration

```swift
class SFTranscription
```

<a id="overview"></a>

## Overview

Use `SFTranscription` to obtain all the recognized utterances from your audio content. An *utterance* is a vocalized word or group of words that represent a single meaning to the speech recognizer ([SFSpeechRecognizer](sfspeechrecognizer.md)).

Use the [formattedString](sftranscription/formattedstring.md) property to retrieve the entire transcription of utterances, or use the [segments](sftranscription/segments.md) property to retrieve an individual utterance ([SFTranscriptionSegment](sftranscriptionsegment.md)).

You don’t create an `SFTranscription` directly. Instead, you retrieve it from an [SFSpeechRecognitionResult](sfspeechrecognitionresult.md) instance. The speech recognizer sends a speech recognition result to your app in one of two ways, depending on how your app started a speech recognition task.

You can start a speech recognition task by using the speech recognizer’s [recognitionTask(with:resultHandler:)](sfspeechrecognizer/recognitiontask%28with_resulthandler_%29.md) method. When the task is complete, the speech recognizer sends an [SFSpeechRecognitionResult](sfspeechrecognitionresult.md) instance to your `resultHandler` closure. Alternatively, you can use the speech recognizer’s [recognitionTask(with:delegate:)](sfspeechrecognizer/recognitiontask%28with_delegate_%29.md) method to start a speech recognition task. When the task is complete, the speech recognizer uses your [SFSpeechRecognitionTaskDelegate](sfspeechrecognitiontaskdelegate.md) to send an [SFSpeechRecognitionResult](sfspeechrecognitionresult.md) by using the delegate’s [speechRecognitionTask(\_:didFinishRecognition:)](sfspeechrecognitiontaskdelegate/speechrecognitiontask%28__didfinishrecognition_%29.md) method.

An `SFTranscription` represents only a potential version of the speech. It might not be an accurate representation of the utterances.

## Topics

### Transcribing utterances

- [formattedString](sftranscription/formattedstring.md): The entire transcription of utterances, formatted into a single, user-displayable string.

### Getting individual utterances

- [segments](sftranscription/segments.md): An array of transcription segments that represent the parts of the transcription, as identified by the speech recognizer.

### Deprecated

- [averagePauseDuration](sftranscription/averagepauseduration.md): Deprecated. The average pause duration between words, measured in seconds.
- [speakingRate](sftranscription/speakingrate.md): Deprecated. The number of words spoken per minute.

### Initializers

- [init(coder:)](sftranscription/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Transcription results

- [SFSpeechRecognitionResult](sfspeechrecognitionresult.md): An object that contains the partial or final results of a speech recognition request.
- [SFSpeechRecognitionMetadata](sfspeechrecognitionmetadata.md): The metadata of speech in the audio of a speech recognition request.
- [SFTranscriptionSegment](sftranscriptionsegment.md): A discrete part of an entire transcription, as identified by the speech recognizer.

# SFTranscription (Objective-C)

**Framework:** Speech  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

A textual representation of the specified speech in its entirety, as recognized by the speech recognizer.

## Declaration

```objectivec
@interface SFTranscription : NSObject
```

<a id="overview"></a>

## Overview

Use `SFTranscription` to obtain all the recognized utterances from your audio content. An *utterance* is a vocalized word or group of words that represent a single meaning to the speech recognizer ([SFSpeechRecognizer](sfspeechrecognizer.md)).

Use the [formattedString](sftranscription/formattedstring.md) property to retrieve the entire transcription of utterances, or use the [segments](sftranscription/segments.md) property to retrieve an individual utterance ([SFTranscriptionSegment](sftranscriptionsegment.md)).

You don’t create an `SFTranscription` directly. Instead, you retrieve it from an [SFSpeechRecognitionResult](sfspeechrecognitionresult.md) instance. The speech recognizer sends a speech recognition result to your app in one of two ways, depending on how your app started a speech recognition task.

You can start a speech recognition task by using the speech recognizer’s [recognitionTaskWithRequest:resultHandler:](sfspeechrecognizer/recognitiontask%28with_resulthandler_%29.md) method. When the task is complete, the speech recognizer sends an [SFSpeechRecognitionResult](sfspeechrecognitionresult.md) instance to your `resultHandler` closure. Alternatively, you can use the speech recognizer’s [recognitionTaskWithRequest:delegate:](sfspeechrecognizer/recognitiontask%28with_delegate_%29.md) method to start a speech recognition task. When the task is complete, the speech recognizer uses your [SFSpeechRecognitionTaskDelegate](sfspeechrecognitiontaskdelegate.md) to send an [SFSpeechRecognitionResult](sfspeechrecognitionresult.md) by using the delegate’s [speechRecognitionTask:didFinishRecognition:](sfspeechrecognitiontaskdelegate/speechrecognitiontask%28__didfinishrecognition_%29.md) method.

An `SFTranscription` represents only a potential version of the speech. It might not be an accurate representation of the utterances.

## Topics

### Transcribing utterances

- [formattedString](sftranscription/formattedstring.md): The entire transcription of utterances, formatted into a single, user-displayable string.

### Getting individual utterances

- [segments](sftranscription/segments.md): An array of transcription segments that represent the parts of the transcription, as identified by the speech recognizer.

### Deprecated

- [averagePauseDuration](sftranscription/averagepauseduration.md): Deprecated. The average pause duration between words, measured in seconds.
- [speakingRate](sftranscription/speakingrate.md): Deprecated. The number of words spoken per minute.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Transcription results

- [SFSpeechRecognitionResult](sfspeechrecognitionresult.md): An object that contains the partial or final results of a speech recognition request.
- [SFSpeechRecognitionMetadata](sfspeechrecognitionmetadata.md): The metadata of speech in the audio of a speech recognition request.
- [SFTranscriptionSegment](sftranscriptionsegment.md): A discrete part of an entire transcription, as identified by the speech recognizer.
