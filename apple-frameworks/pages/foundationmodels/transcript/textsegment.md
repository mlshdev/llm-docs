> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/transcript/textsegment

# Transcript.TextSegment

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

A segment containing text.

## Declaration

```swift
struct TextSegment
```

## Topics

### Creating a text segment

- [init(id:content:)](textsegment/init%28id_content_%29.md): Creates a text segment that contains the text you provide.

### Inspecting a text segment

- [content](textsegment/content.md): The text of the segment.

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

- [Transcript.Segment](segment.md): The types of segments that may be included in a transcript entry.
- [Transcript.StructuredSegment](structuredsegment.md): A segment containing structured content.
- [Transcript.AttachmentSegment](attachmentsegment.md): A segment containing attached files or images.
