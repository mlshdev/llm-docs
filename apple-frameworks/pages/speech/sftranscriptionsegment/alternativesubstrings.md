> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sftranscriptionsegment/alternativesubstrings](https://developer.apple.com/documentation/speech/sftranscriptionsegment/alternativesubstrings)

# alternativeSubstrings (Swift)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

An array of alternate interpretations of the utterance in the transcription segment.

## Declaration

```swift
var alternativeSubstrings: [String] { get }
```

## See Also

### Transcribing the segment

- [substring](substring.md): The string representation of the utterance in the transcription segment.
- [substringRange](substringrange.md): The range information for the transcription segment’s substring, relative to the overall transcription.

# alternativeSubstrings (Objective-C)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

An array of alternate interpretations of the utterance in the transcription segment.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSString *> * alternativeSubstrings;
```

## See Also

### Transcribing the segment

- [substring](substring.md): The string representation of the utterance in the transcription segment.
- [substringRange](substringrange.md): The range information for the transcription segment’s substring, relative to the overall transcription.
