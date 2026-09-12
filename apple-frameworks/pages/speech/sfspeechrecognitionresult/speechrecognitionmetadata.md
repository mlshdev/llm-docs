> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognitionresult/speechrecognitionmetadata](https://developer.apple.com/documentation/speech/sfspeechrecognitionresult/speechrecognitionmetadata)

# speechRecognitionMetadata (Swift)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

An object that contains the metadata results for a speech recognition request.

## Declaration

```swift
var speechRecognitionMetadata: SFSpeechRecognitionMetadata? { get }
```

## See Also

### Getting transcriptions

- [bestTranscription](besttranscription.md): The transcription with the highest confidence level.
- [transcriptions](transcriptions.md): An array of potential transcriptions, sorted in descending order of confidence.

# speechRecognitionMetadata (Objective-C)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

An object that contains the metadata results for a speech recognition request.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) SFSpeechRecognitionMetadata * speechRecognitionMetadata;
```

## See Also

### Getting transcriptions

- [bestTranscription](besttranscription.md): The transcription with the highest confidence level.
- [transcriptions](transcriptions.md): An array of potential transcriptions, sorted in descending order of confidence.
