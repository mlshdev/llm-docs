> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/emptyattachmentcontent](https://developer.apple.com/documentation/realitykit/emptyattachmentcontent)

# EmptyAttachmentContent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** visionOS 1.0+

A attachment content that doesn’t contain any content.

## Declaration

```swift
@MainActor @preconcurrency struct EmptyAttachmentContent
```

## Topics

### Initializers

- [init()](emptyattachmentcontent/init%28%29.md): Creates an empty attachment content.

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
- [TupleAttachmentContent](tupleattachmentcontent.md): Deprecated.
- [AnyAttachmentContent](anyattachmentcontent.md): A type-erased attachment content.
