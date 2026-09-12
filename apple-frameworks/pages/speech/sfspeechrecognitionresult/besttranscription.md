> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognitionresult/besttranscription](https://developer.apple.com/documentation/speech/sfspeechrecognitionresult/besttranscription)

# bestTranscription (Swift)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

The transcription with the highest confidence level.

## Declaration

```swift
@NSCopying var bestTranscription: SFTranscription { get }
```

## See Also

### Getting transcriptions

- [transcriptions](transcriptions.md): An array of potential transcriptions, sorted in descending order of confidence.
- [speechRecognitionMetadata](speechrecognitionmetadata.md): An object that contains the metadata results for a speech recognition request.

# bestTranscription (Objective-C)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

The transcription with the highest confidence level.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) SFTranscription * bestTranscription;
```

## See Also

### Getting transcriptions

- [transcriptions](transcriptions.md): An array of potential transcriptions, sorted in descending order of confidence.
- [speechRecognitionMetadata](speechrecognitionmetadata.md): An object that contains the metadata results for a speech recognition request.
