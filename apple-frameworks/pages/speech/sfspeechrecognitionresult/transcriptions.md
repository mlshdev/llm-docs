> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognitionresult/transcriptions](https://developer.apple.com/documentation/speech/sfspeechrecognitionresult/transcriptions)

# transcriptions (Swift)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

An array of potential transcriptions, sorted in descending order of confidence.

## Declaration

```swift
var transcriptions: [SFTranscription] { get }
```

<a id="discussion"></a>

## Discussion

All transcriptions correspond to the same utterance, which can be a partial or final result of the overall request. The first transcription in the array has the highest confidence rating, followed by transcriptions with decreasing confidence ratings.

## See Also

### Getting transcriptions

- [bestTranscription](besttranscription.md): The transcription with the highest confidence level.
- [speechRecognitionMetadata](speechrecognitionmetadata.md): An object that contains the metadata results for a speech recognition request.

# transcriptions (Objective-C)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

An array of potential transcriptions, sorted in descending order of confidence.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<SFTranscription *> * transcriptions;
```

<a id="discussion"></a>

## Discussion

All transcriptions correspond to the same utterance, which can be a partial or final result of the overall request. The first transcription in the array has the highest confidence rating, followed by transcriptions with decreasing confidence ratings.

## See Also

### Getting transcriptions

- [bestTranscription](besttranscription.md): The transcription with the highest confidence level.
- [speechRecognitionMetadata](speechrecognitionmetadata.md): An object that contains the metadata results for a speech recognition request.
