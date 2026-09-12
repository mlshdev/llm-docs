> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/viewattachmentcomponent](https://developer.apple.com/documentation/realitykit/viewattachmentcomponent)

# ViewAttachmentComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** visionOS 1.0+

A component containing additional information about a view attachment entity provided  via the [entity(for:)](realityviewattachments/entity%28for_%29.md) function.

## Declaration

```swift
struct ViewAttachmentComponent
```

## Topics

### Initializers

- [init(rootView:)](viewattachmentcomponent/init%28rootview_%29.md): A RealityKit component that manages a SwiftUI view hierarchy.

### Instance Properties

- [bounds](viewattachmentcomponent/bounds.md): The bounding box of the view attachment, expressed in meters.
- [id](viewattachmentcomponent/id.md): The identifier used for this view attachment.

## Relationships

### Conforms To

- [Component](component.md)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [TransientComponent](transientcomponent.md)

## See Also

### SwiftUI view attachments

- [RealityViewAttachmentBuilderContent](realityviewattachmentbuildercontent.md): A view that gathers the attachment content for your current reality view.
- [Attachment](attachment.md): An attachment content you can use to gather an identifier and view.
- [RealityViewAttachments](realityviewattachments.md): The attachments that belong to a RealityView.
- [ViewAttachmentEntity](viewattachmententity.md): An entity that has a view attachment.
- [PresentationComponent](presentationcomponent.md): A component that presents a SwiftUI modal presentation from a RealityKit entity.
- [TextComponent](textcomponent.md): A component that draws 2D text at an entity’s location.
