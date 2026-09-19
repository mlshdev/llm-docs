> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/transcript/structuredsegment

# Transcript.StructuredSegment

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

A segment containing structured content.

## Declaration

```swift
struct StructuredSegment
```

## Topics

### Creating a structured segment

- [init(id:source:content:)](structuredsegment/init%28id_source_content_%29.md): Deprecated.
- [init(id:schemaName:content:)](structuredsegment/init%28id_schemaname_content_%29.md): Creates a structured segment that contains the generated content you provide.

### Inspecting a structured segment

- [content](structuredsegment/content.md): The content of the segment.
- [source](structuredsegment/source.md): Deprecated. A source that can be used to understand which type the content represents.
- [schemaName](structuredsegment/schemaname.md): A name that can be used to understand which type the content represents.

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
- [Transcript.TextSegment](textsegment.md): A segment containing text.
- [Transcript.AttachmentSegment](attachmentsegment.md): A segment containing attached files or images.
