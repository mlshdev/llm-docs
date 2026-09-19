> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/transcript/segment

# Transcript.Segment

**Framework:** Foundation Models  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

The types of segments that may be included in a transcript entry.

## Declaration

```swift
@nonexhaustive enum Segment
```

## Topics

### Segment cases

- [Transcript.Segment.text(\_:)](segment/text%28__%29.md): A segment containing text.
- [Transcript.Segment.attachment(\_:)](segment/attachment%28__%29.md): A segment containing an attachment.
- [Transcript.Segment.structure(\_:)](segment/structure%28__%29.md): A segment containing structured content.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Segments

- [Transcript.TextSegment](textsegment.md): A segment containing text.
- [Transcript.StructuredSegment](structuredsegment.md): A segment containing structured content.
- [Transcript.AttachmentSegment](attachmentsegment.md): A segment containing attached files or images.
