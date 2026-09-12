> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/tuplepackattachmentcontent](https://developer.apple.com/documentation/realitykit/tuplepackattachmentcontent)

# TuplePackAttachmentContent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** visionOS 26.0+

## Declaration

```swift
@MainActor @frozen @preconcurrency struct TuplePackAttachmentContent<each T> where repeat each T : AttachmentContent
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
- [ConditionalAttachmentContent](conditionalattachmentcontent.md)
- [EmptyAttachmentContent](emptyattachmentcontent.md): A attachment content that doesn’t contain any content.
- [TupleAttachmentContent](tupleattachmentcontent.md): Deprecated.
- [AnyAttachmentContent](anyattachmentcontent.md): A type-erased attachment content.
