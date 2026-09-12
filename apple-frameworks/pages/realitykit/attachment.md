> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/attachment](https://developer.apple.com/documentation/realitykit/attachment)

# Attachment

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** visionOS 1.0+

An attachment content you can use to gather an identifier and view.

## Declaration

```swift
@MainActor @preconcurrency struct Attachment<Content> where Content : View
```

## Topics

### Initializers

- [init(id:\_:)](attachment/init%28id___%29.md): Creates an new attachment from an identifier and a closure.

### Instance Properties

- [content](attachment/content.md): The view associated with this attachment.
- [id](attachment/id.md): The identifier of this attachment.

## Relationships

### Conforms To

- [AttachmentContent](attachmentcontent.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### SwiftUI view attachments

- [RealityViewAttachmentBuilderContent](realityviewattachmentbuildercontent.md): A view that gathers the attachment content for your current reality view.
- [RealityViewAttachments](realityviewattachments.md): The attachments that belong to a RealityView.
- [ViewAttachmentEntity](viewattachmententity.md): An entity that has a view attachment.
- [ViewAttachmentComponent](viewattachmentcomponent.md): A component containing additional information about a view attachment entity provided via the [entity(for:)](realityviewattachments/entity%28for_%29.md) function.
- [PresentationComponent](presentationcomponent.md): A component that presents a SwiftUI modal presentation from a RealityKit entity.
- [TextComponent](textcomponent.md): A component that draws 2D text at an entity’s location.
