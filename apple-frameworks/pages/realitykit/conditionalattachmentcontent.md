> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/conditionalattachmentcontent](https://developer.apple.com/documentation/realitykit/conditionalattachmentcontent)

# ConditionalAttachmentContent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** visionOS 1.0+

## Declaration

```swift
@frozen struct ConditionalAttachmentContent<TrueContent, FalseContent>
```

## Relationships

### Conforms To

- [AttachmentContent](attachmentcontent.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Attachment types

- [AttachmentContentBuilder](attachmentcontentbuilder.md): A result builder that creates attachment content from closures.
- [AttachmentContent](attachmentcontent.md): Conforms when `TrueContent` conforms to `AttachmentContent` and `FalseContent` conforms to `AttachmentContent`. A type that provides content for an attachment content builder.
- [TuplePackAttachmentContent](tuplepackattachmentcontent.md)
- [EmptyAttachmentContent](emptyattachmentcontent.md): A attachment content that doesn’t contain any content.
- [TupleAttachmentContent](tupleattachmentcontent.md): Deprecated.
- [AnyAttachmentContent](anyattachmentcontent.md): A type-erased attachment content.
