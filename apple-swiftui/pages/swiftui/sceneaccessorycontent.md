> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/sceneaccessorycontent

# SceneAccessoryContent

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+

Conforming types represent items which define content for scene accessories.

## Declaration

```swift
@MainActor protocol SceneAccessoryContent
```

## Topics

### Associated Types

- [Body](sceneaccessorycontent/body-swift.associatedtype.md): The type of content representing the body of this scene accessory content.

### Instance Properties

- [body](sceneaccessorycontent/body-swift.property.md): The composition of content that comprise the accessory content.

### Instance Methods

- [onAvailabilityChange(perform:)](sceneaccessorycontent/onavailabilitychange%28perform_%29.md): Defines a callback for observing the availability of `self`.

## Relationships

### Conforming Types

- [CameraCaptureAccessory](cameracaptureaccessory.md)
- [EmptyView](emptyview.md)
- [ExternalNonInteractiveAccessory](externalnoninteractiveaccessory.md)
- [ForEach](foreach.md)
- [Group](group.md)
- [TupleContent](tuplecontent.md)

## See Also

### Presenting content on an external display

- [sceneAccessory(content:)](view/sceneaccessory%28content_%29.md): Defines any scene accessories associated with `self`.
- [CameraCaptureAccessory](cameracaptureaccessory.md): Beta. A scene accessory that presents content during camera capture.
- [ExternalNonInteractiveAccessory](externalnoninteractiveaccessory.md): A scene accessory that presents non-interactive content on an external display.
