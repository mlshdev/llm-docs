> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sftranscriptionsegment/substringrange](https://developer.apple.com/documentation/speech/sftranscriptionsegment/substringrange)

# substringRange (Swift)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

The range information for the transcription segment’s substring, relative to the overall transcription.

## Declaration

```swift
var substringRange: NSRange { get }
```

<a id="discussion"></a>

## Discussion

Use the range information to find the position of the segment within the [formattedString](../sftranscription/formattedstring.md) property of the [SFTranscription](../sftranscription.md) object containing this segment.

## See Also

### Transcribing the segment

- [substring](substring.md): The string representation of the utterance in the transcription segment.
- [alternativeSubstrings](alternativesubstrings.md): An array of alternate interpretations of the utterance in the transcription segment.

# substringRange (Objective-C)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

The range information for the transcription segment’s substring, relative to the overall transcription.

## Declaration

```objectivec
@property (nonatomic, readonly) NSRange substringRange;
```

<a id="discussion"></a>

## Discussion

Use the range information to find the position of the segment within the [formattedString](../sftranscription/formattedstring.md) property of the [SFTranscription](../sftranscription.md) object containing this segment.

## See Also

### Transcribing the segment

- [substring](substring.md): The string representation of the utterance in the transcription segment.
- [alternativeSubstrings](alternativesubstrings.md): An array of alternate interpretations of the utterance in the transcription segment.
