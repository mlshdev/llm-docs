> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/realityviewattachments](https://developer.apple.com/documentation/realitykit/realityviewattachments)

# RealityViewAttachments

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** visionOS 1.0+

The attachments that belong to a RealityView.

## Declaration

```swift
struct RealityViewAttachments
```

<a id="overview"></a>

## Overview

Use this type to access entities associated with the attachments you provide to your [RealityView](realityview.md) via the [init(make:update:attachments:)](realityview/init%28make_update_attachments_%29.md) initializer.

## Topics

### Instance Methods

- [entity(for:)](realityviewattachments/entity%28for_%29.md): Gets the identified attachment view as an entity, if the view with that identifier exists.

## See Also

### SwiftUI view attachments

- [RealityViewAttachmentBuilderContent](realityviewattachmentbuildercontent.md): A view that gathers the attachment content for your current reality view.
- [Attachment](attachment.md): An attachment content you can use to gather an identifier and view.
- [ViewAttachmentEntity](viewattachmententity.md): An entity that has a view attachment.
- [ViewAttachmentComponent](viewattachmentcomponent.md): A component containing additional information about a view attachment entity provided via the [entity(for:)](realityviewattachments/entity%28for_%29.md) function.
- [PresentationComponent](presentationcomponent.md): A component that presents a SwiftUI modal presentation from a RealityKit entity.
- [TextComponent](textcomponent.md): A component that draws 2D text at an entity’s location.
