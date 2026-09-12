> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/attachmentcontent](https://developer.apple.com/documentation/realitykit/attachmentcontent)

# AttachmentContent

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** visionOS 1.0+

A type that provides content for an attachment content builder.

## Declaration

```swift
@MainActor @preconcurrency protocol AttachmentContent
```

## Topics

### Associated Types

- [Body](attachmentcontent/body-swift.associatedtype.md)

### Instance Properties

- [body](attachmentcontent/body-swift.property.md)

## Relationships

### Conforming Types

- [AnyAttachmentContent](anyattachmentcontent.md)
- [Attachment](attachment.md)
- [ConditionalAttachmentContent](conditionalattachmentcontent.md)
- [EmptyAttachmentContent](emptyattachmentcontent.md)
- [TupleAttachmentContent](tupleattachmentcontent.md)
- [TuplePackAttachmentContent](tuplepackattachmentcontent.md)

## See Also

### Attachment types

- [AttachmentContentBuilder](attachmentcontentbuilder.md): A result builder that creates attachment content from closures.
- [TuplePackAttachmentContent](tuplepackattachmentcontent.md)
- [ConditionalAttachmentContent](conditionalattachmentcontent.md): Conforms when `TrueContent` conforms to `AttachmentContent` and `FalseContent` conforms to `AttachmentContent`.
- [EmptyAttachmentContent](emptyattachmentcontent.md): A attachment content that doesn’t contain any content.
- [TupleAttachmentContent](tupleattachmentcontent.md): Deprecated.
- [AnyAttachmentContent](anyattachmentcontent.md): A type-erased attachment content.
