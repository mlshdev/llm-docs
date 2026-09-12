> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognitionresult](https://developer.apple.com/documentation/speech/sfspeechrecognitionresult)

# SFSpeechRecognitionResult (Swift)

**Framework:** Speech  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

An object that contains the partial or final results of a speech recognition request.

## Declaration

```swift
class SFSpeechRecognitionResult
```

<a id="overview"></a>

## Overview

Use an `SFSpeechRecognitionResult` object to retrieve the results of a speech recognition request. You don’t create these objects directly. Instead, the Speech framework creates them and passes them to the handler block or delegate object you specified when starting your speech recognition task.

A speech recognition result object contains one or more [transcriptions](sfspeechrecognitionresult/transcriptions.md) of the current utterance. Each transcription has a confidence rating indicating how likely it is to be correct. You can also get the transcription with the highest rating directly from the [bestTranscription](sfspeechrecognitionresult/besttranscription.md) property.

If you requested partial results from the speech recognizer, the transcriptions may represent only part of the total audio content. Use the [isFinal](sfspeechrecognitionresult/isfinal.md) property to determine if the request contains partial or final results.

## Topics

### Getting transcriptions

- [bestTranscription](sfspeechrecognitionresult/besttranscription.md): The transcription with the highest confidence level.
- [transcriptions](sfspeechrecognitionresult/transcriptions.md): An array of potential transcriptions, sorted in descending order of confidence.
- [speechRecognitionMetadata](sfspeechrecognitionresult/speechrecognitionmetadata.md): An object that contains the metadata results for a speech recognition request.

### Determining whether transcriptions are final

- [isFinal](sfspeechrecognitionresult/isfinal.md): A Boolean value that indicates whether speech recognition is complete and whether the transcriptions are final.

### Initializers

- [init(coder:)](sfspeechrecognitionresult/init%28coder_%29.md)

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

- [SFSpeechRecognitionMetadata](sfspeechrecognitionmetadata.md): The metadata of speech in the audio of a speech recognition request.
- [SFTranscription](sftranscription.md): A textual representation of the specified speech in its entirety, as recognized by the speech recognizer.
- [SFTranscriptionSegment](sftranscriptionsegment.md): A discrete part of an entire transcription, as identified by the speech recognizer.

# SFSpeechRecognitionResult (Objective-C)

**Framework:** Speech  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

An object that contains the partial or final results of a speech recognition request.

## Declaration

```objectivec
@interface SFSpeechRecognitionResult : NSObject
```

<a id="overview"></a>

## Overview

Use an `SFSpeechRecognitionResult` object to retrieve the results of a speech recognition request. You don’t create these objects directly. Instead, the Speech framework creates them and passes them to the handler block or delegate object you specified when starting your speech recognition task.

A speech recognition result object contains one or more [transcriptions](sfspeechrecognitionresult/transcriptions.md) of the current utterance. Each transcription has a confidence rating indicating how likely it is to be correct. You can also get the transcription with the highest rating directly from the [bestTranscription](sfspeechrecognitionresult/besttranscription.md) property.

If you requested partial results from the speech recognizer, the transcriptions may represent only part of the total audio content. Use the [final](sfspeechrecognitionresult/isfinal.md) property to determine if the request contains partial or final results.

## Topics

### Getting transcriptions

- [bestTranscription](sfspeechrecognitionresult/besttranscription.md): The transcription with the highest confidence level.
- [transcriptions](sfspeechrecognitionresult/transcriptions.md): An array of potential transcriptions, sorted in descending order of confidence.
- [speechRecognitionMetadata](sfspeechrecognitionresult/speechrecognitionmetadata.md): An object that contains the metadata results for a speech recognition request.

### Determining whether transcriptions are final

- [final](sfspeechrecognitionresult/isfinal.md): A Boolean value that indicates whether speech recognition is complete and whether the transcriptions are final.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Transcription results

- [SFSpeechRecognitionMetadata](sfspeechrecognitionmetadata.md): The metadata of speech in the audio of a speech recognition request.
- [SFTranscription](sftranscription.md): A textual representation of the specified speech in its entirety, as recognized by the speech recognizer.
- [SFTranscriptionSegment](sftranscriptionsegment.md): A discrete part of an entire transcription, as identified by the speech recognizer.
