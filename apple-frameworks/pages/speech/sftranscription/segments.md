> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sftranscription/segments](https://developer.apple.com/documentation/speech/sftranscription/segments)

# segments (Swift)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

An array of transcription segments that represent the parts of the transcription, as identified by the speech recognizer.

## Declaration

```swift
var segments: [SFTranscriptionSegment] { get }
```

<a id="discussion"></a>

## Discussion

The order of the segments in the array matches the order in which the corresponding utterances occur in the spoken content.

# segments (Objective-C)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

An array of transcription segments that represent the parts of the transcription, as identified by the speech recognizer.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<SFTranscriptionSegment *> * segments;
```

<a id="discussion"></a>

## Discussion

The order of the segments in the array matches the order in which the corresponding utterances occur in the spoken content.
