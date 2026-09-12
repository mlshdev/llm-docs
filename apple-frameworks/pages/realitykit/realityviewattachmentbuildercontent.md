> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/realityviewattachmentbuildercontent](https://developer.apple.com/documentation/realitykit/realityviewattachmentbuildercontent)

# RealityViewAttachmentBuilderContent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** visionOS 1.0+

A view that gathers the attachment content for your current reality view.

## Declaration

```swift
@MainActor @preconcurrency struct RealityViewAttachmentBuilderContent<Attachment, Content> where Attachment : AttachmentContent, Content : View
```

<a id="overview"></a>

## Overview

A [RealityView](realityview.md) creates this for you.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)

## See Also

### SwiftUI view attachments

- [Attachment](attachment.md): An attachment content you can use to gather an identifier and view.
- [RealityViewAttachments](realityviewattachments.md): The attachments that belong to a RealityView.
- [ViewAttachmentEntity](viewattachmententity.md): An entity that has a view attachment.
- [ViewAttachmentComponent](viewattachmentcomponent.md): A component containing additional information about a view attachment entity provided via the [entity(for:)](realityviewattachments/entity%28for_%29.md) function.
- [PresentationComponent](presentationcomponent.md): A component that presents a SwiftUI modal presentation from a RealityKit entity.
- [TextComponent](textcomponent.md): A component that draws 2D text at an entity’s location.
