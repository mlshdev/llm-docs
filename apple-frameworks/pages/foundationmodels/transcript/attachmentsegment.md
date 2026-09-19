> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/transcript/attachmentsegment

# Transcript.AttachmentSegment

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A segment containing attached files or images.

## Declaration

```swift
struct AttachmentSegment
```

## Topics

### Creating an attachment segment

- [init(id:content:label:)](attachmentsegment/init%28id_content_label_%29.md): Creates an attachment segment that wraps the content you provide.

### Inspecting an attachment segment

- [content](attachmentsegment/content.md): The attached file or image.
- [label](attachmentsegment/label.md): An optional label that identifies the attachment.

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
- [Transcript.StructuredSegment](structuredsegment.md): A segment containing structured content.
