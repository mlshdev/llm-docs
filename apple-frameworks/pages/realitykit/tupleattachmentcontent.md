> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/tupleattachmentcontent

# TupleAttachmentContent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** visionOS 1.0+ (deprecated in 26.0)

## Declaration

```swift
@MainActor @frozen @preconcurrency struct TupleAttachmentContent<T>
```

## Relationships

### Conforms To

- [AttachmentContent](attachmentcontent.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Attachment types

- [AttachmentContentBuilder](attachmentcontentbuilder.md): A result builder that creates attachment content from closures.
- [AttachmentContent](attachmentcontent.md): A type that provides content for an attachment content builder.
- [TuplePackAttachmentContent](tuplepackattachmentcontent.md)
- [ConditionalAttachmentContent](conditionalattachmentcontent.md)
- [EmptyAttachmentContent](emptyattachmentcontent.md): A attachment content that doesn’t contain any content.
- [AnyAttachmentContent](anyattachmentcontent.md): A type-erased attachment content.
