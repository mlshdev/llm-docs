> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/anyattachmentcontent](https://developer.apple.com/documentation/realitykit/anyattachmentcontent)

# AnyAttachmentContent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

A type-erased attachment content.

## Declaration

```swift
@MainActor @frozen @preconcurrency struct AnyAttachmentContent
```

<a id="overview"></a>

## Overview

An `AnyAttachmentContent` allows changing the type of attachment used in a given attachment content. Whenever the type of attachment content used with an `AnyAttachmentContent` changes, the old content is destroyed and the new content is created for the new type.

## Topics

### Initializers

- [init(\_:)](anyattachmentcontent/init%28__%29.md): Creates an instance that type-erases [AttachmentContent](attachmentcontent.md).

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
- [TupleAttachmentContent](tupleattachmentcontent.md): Deprecated.
