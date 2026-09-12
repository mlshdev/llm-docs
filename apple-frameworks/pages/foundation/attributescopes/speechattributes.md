> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributescopes/speechattributes](https://developer.apple.com/documentation/foundation/attributescopes/speechattributes)

# AttributeScopes.SpeechAttributes

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
struct SpeechAttributes
```

## Topics

### Structures

- [AttributeScopes.SpeechAttributes.ConfidenceAttribute](speechattributes/confidenceattribute.md): A confidence level (0–1) of the associated transcription text.
- [AttributeScopes.SpeechAttributes.TimeRangeAttribute](speechattributes/timerangeattribute.md): The time range in the source audio corresponding to the associated transcription text.

### Instance Properties

- [audioTimeRange](speechattributes/audiotimerange.md)
- [transcriptionConfidence](speechattributes/transcriptionconfidence.md)

## Relationships

### Conforms To

- [AttributeScope](../attributescope.md)
- [DecodingConfigurationProviding](../decodingconfigurationproviding.md)
- [EncodingConfigurationProviding](../encodingconfigurationproviding.md)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
