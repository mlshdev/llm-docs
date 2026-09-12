> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognitionrequest](https://developer.apple.com/documentation/speech/sfspeechrecognitionrequest)

# SFSpeechRecognitionRequest (Swift)

**Framework:** Speech  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

An abstract class that represents a request to recognize speech from an audio source.

## Declaration

```swift
class SFSpeechRecognitionRequest
```

<a id="overview"></a>

## Overview

Don’t create [SFSpeechRecognitionRequest](sfspeechrecognitionrequest.md) objects directly. Create an [SFSpeechURLRecognitionRequest](sfspeechurlrecognitionrequest.md) or [SFSpeechAudioBufferRecognitionRequest](sfspeechaudiobufferrecognitionrequest.md) object instead. Use the properties of this class to configure various aspects of your request object before you start the speech recognition process. For example, use the [shouldReportPartialResults](sfspeechrecognitionrequest/shouldreportpartialresults.md) property to specify whether you want partial results or only the final result of speech recognition.

## Topics

### Configuring a recognition request

- [requiresOnDeviceRecognition](sfspeechrecognitionrequest/requiresondevicerecognition.md): A Boolean value that determines whether a request must keep its audio data on the device.
- [shouldReportPartialResults](sfspeechrecognitionrequest/shouldreportpartialresults.md): A Boolean value that indicates whether you want intermediate results returned for each utterance.
- [contextualStrings](sfspeechrecognitionrequest/contextualstrings.md): An array of phrases that should be recognized, even if they are not in the system vocabulary.

### Speech Type Classification

- [taskHint](sfspeechrecognitionrequest/taskhint.md): A value that indicates the type of speech recognition being performed.
- [SFSpeechRecognitionTaskHint](sfspeechrecognitiontaskhint.md): The type of task for which you are using speech recognition.

### Punctuation

- [addsPunctuation](sfspeechrecognitionrequest/addspunctuation.md): A Boolean value that indicates whether to add punctuation to speech recognition results.

### Deprecated

- [interactionIdentifier](sfspeechrecognitionrequest/interactionidentifier.md): Deprecated. An identifier string that you use to describe the type of interaction associated with the speech recognition request.

### Instance Properties

- [customizedLanguageModel](sfspeechrecognitionrequest/customizedlanguagemodel.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [SFSpeechAudioBufferRecognitionRequest](sfspeechaudiobufferrecognitionrequest.md)
- [SFSpeechURLRecognitionRequest](sfspeechurlrecognitionrequest.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Audio sources

- [SFSpeechURLRecognitionRequest](sfspeechurlrecognitionrequest.md): A request to recognize speech in a recorded audio file.
- [SFSpeechAudioBufferRecognitionRequest](sfspeechaudiobufferrecognitionrequest.md): A request to recognize speech from captured audio content, such as audio from the device’s microphone.

# SFSpeechRecognitionRequest (Objective-C)

**Framework:** Speech  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

An abstract class that represents a request to recognize speech from an audio source.

## Declaration

```objectivec
@interface SFSpeechRecognitionRequest : NSObject
```

<a id="overview"></a>

## Overview

Don’t create [SFSpeechRecognitionRequest](sfspeechrecognitionrequest.md) objects directly. Create an [SFSpeechURLRecognitionRequest](sfspeechurlrecognitionrequest.md) or [SFSpeechAudioBufferRecognitionRequest](sfspeechaudiobufferrecognitionrequest.md) object instead. Use the properties of this class to configure various aspects of your request object before you start the speech recognition process. For example, use the [shouldReportPartialResults](sfspeechrecognitionrequest/shouldreportpartialresults.md) property to specify whether you want partial results or only the final result of speech recognition.

## Topics

### Configuring a recognition request

- [requiresOnDeviceRecognition](sfspeechrecognitionrequest/requiresondevicerecognition.md): A Boolean value that determines whether a request must keep its audio data on the device.
- [shouldReportPartialResults](sfspeechrecognitionrequest/shouldreportpartialresults.md): A Boolean value that indicates whether you want intermediate results returned for each utterance.
- [contextualStrings](sfspeechrecognitionrequest/contextualstrings.md): An array of phrases that should be recognized, even if they are not in the system vocabulary.

### Speech Type Classification

- [taskHint](sfspeechrecognitionrequest/taskhint.md): A value that indicates the type of speech recognition being performed.
- [SFSpeechRecognitionTaskHint](sfspeechrecognitiontaskhint.md): The type of task for which you are using speech recognition.

### Punctuation

- [addsPunctuation](sfspeechrecognitionrequest/addspunctuation.md): A Boolean value that indicates whether to add punctuation to speech recognition results.

### Deprecated

- [interactionIdentifier](sfspeechrecognitionrequest/interactionidentifier.md): Deprecated. An identifier string that you use to describe the type of interaction associated with the speech recognition request.

### Instance Properties

- [customizedLanguageModel](sfspeechrecognitionrequest/customizedlanguagemodel.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [SFSpeechAudioBufferRecognitionRequest](sfspeechaudiobufferrecognitionrequest.md)
- [SFSpeechURLRecognitionRequest](sfspeechurlrecognitionrequest.md)

## See Also

### Audio sources

- [SFSpeechURLRecognitionRequest](sfspeechurlrecognitionrequest.md): A request to recognize speech in a recorded audio file.
- [SFSpeechAudioBufferRecognitionRequest](sfspeechaudiobufferrecognitionrequest.md): A request to recognize speech from captured audio content, such as audio from the device’s microphone.
