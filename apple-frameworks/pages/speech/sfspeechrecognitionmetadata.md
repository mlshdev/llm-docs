> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognitionmetadata](https://developer.apple.com/documentation/speech/sfspeechrecognitionmetadata)

# SFSpeechRecognitionMetadata (Swift)

**Framework:** Speech  
**Kind:** Class  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

The metadata of speech in the audio of a speech recognition request.

## Declaration

```swift
class SFSpeechRecognitionMetadata
```

## Topics

### Getting audio timing information

- [averagePauseDuration](sfspeechrecognitionmetadata/averagepauseduration.md): The average pause duration between words, measured in seconds.
- [speakingRate](sfspeechrecognitionmetadata/speakingrate.md): The number of words spoken per minute.
- [speechDuration](sfspeechrecognitionmetadata/speechduration.md): The duration in seconds of speech in the audio.
- [speechStartTimestamp](sfspeechrecognitionmetadata/speechstarttimestamp.md): The start timestamp of speech in the audio.

### Analyzing voice

- [voiceAnalytics](sfspeechrecognitionmetadata/voiceanalytics.md): An analysis of the transcription segment’s vocal properties.

### Initializers

- [init(coder:)](sfspeechrecognitionmetadata/init%28coder_%29.md)

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
- [SFTranscription](sftranscription.md): A textual representation of the specified speech in its entirety, as recognized by the speech recognizer.
- [SFTranscriptionSegment](sftranscriptionsegment.md): A discrete part of an entire transcription, as identified by the speech recognizer.

# SFSpeechRecognitionMetadata (Objective-C)

**Framework:** Speech  
**Kind:** Class  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

The metadata of speech in the audio of a speech recognition request.

## Declaration

```objectivec
@interface SFSpeechRecognitionMetadata : NSObject
```

## Topics

### Getting audio timing information

- [averagePauseDuration](sfspeechrecognitionmetadata/averagepauseduration.md): The average pause duration between words, measured in seconds.
- [speakingRate](sfspeechrecognitionmetadata/speakingrate.md): The number of words spoken per minute.
- [speechDuration](sfspeechrecognitionmetadata/speechduration.md): The duration in seconds of speech in the audio.
- [speechStartTimestamp](sfspeechrecognitionmetadata/speechstarttimestamp.md): The start timestamp of speech in the audio.

### Analyzing voice

- [voiceAnalytics](sfspeechrecognitionmetadata/voiceanalytics.md): An analysis of the transcription segment’s vocal properties.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Transcription results

- [SFSpeechRecognitionResult](sfspeechrecognitionresult.md): An object that contains the partial or final results of a speech recognition request.
- [SFTranscription](sftranscription.md): A textual representation of the specified speech in its entirety, as recognized by the speech recognizer.
- [SFTranscriptionSegment](sftranscriptionsegment.md): A discrete part of an entire transcription, as identified by the speech recognizer.
