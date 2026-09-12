> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sftranscriptionsegment/substring](https://developer.apple.com/documentation/speech/sftranscriptionsegment/substring)

# substring (Swift)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

The string representation of the utterance in the transcription segment.

## Declaration

```swift
var substring: String { get }
```

## See Also

### Transcribing the segment

- [substringRange](substringrange.md): The range information for the transcription segment’s substring, relative to the overall transcription.
- [alternativeSubstrings](alternativesubstrings.md): An array of alternate interpretations of the utterance in the transcription segment.

# substring (Objective-C)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

The string representation of the utterance in the transcription segment.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * substring;
```

## See Also

### Transcribing the segment

- [substringRange](substringrange.md): The range information for the transcription segment’s substring, relative to the overall transcription.
- [alternativeSubstrings](alternativesubstrings.md): An array of alternate interpretations of the utterance in the transcription segment.
