> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/viewattachmententity](https://developer.apple.com/documentation/realitykit/viewattachmententity)

# ViewAttachmentEntity

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** visionOS 1.0+

An entity that has a view attachment.

## Declaration

```swift
@MainActor @preconcurrency class ViewAttachmentEntity
```

## Topics

### Instance Properties

- [attachment](viewattachmententity/attachment.md): The view attachment component for this entity.

## Relationships

### Inherits From

- [Entity](entity.md)

### Conforms To

- [CoordinateSpace3D](../spatial/coordinatespace3d.md)
- [CoordinateSpace3DFloat](../spatial/coordinatespace3dfloat.md)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [EventSource](eventsource.md)
- [HasHierarchy](hashierarchy.md)
- [HasSynchronization](hassynchronization.md)
- [HasTransform](hastransform.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Observable](https://developer.apple.com/documentation/observation/observable)
- [RealityCoordinateSpace](realitycoordinatespace.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### SwiftUI view attachments

- [RealityViewAttachmentBuilderContent](realityviewattachmentbuildercontent.md): A view that gathers the attachment content for your current reality view.
- [Attachment](attachment.md): An attachment content you can use to gather an identifier and view.
- [RealityViewAttachments](realityviewattachments.md): The attachments that belong to a RealityView.
- [ViewAttachmentComponent](viewattachmentcomponent.md): A component containing additional information about a view attachment entity provided via the [entity(for:)](realityviewattachments/entity%28for_%29.md) function.
- [PresentationComponent](presentationcomponent.md): A component that presents a SwiftUI modal presentation from a RealityKit entity.
- [TextComponent](textcomponent.md): A component that draws 2D text at an entity’s location.
