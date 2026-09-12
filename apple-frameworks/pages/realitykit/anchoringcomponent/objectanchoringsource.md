> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/anchoringcomponent/objectanchoringsource](https://developer.apple.com/documentation/realitykit/anchoringcomponent/objectanchoringsource)

# AnchoringComponent.ObjectAnchoringSource

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Defines the source of object anchoring target based on how it is created.

## Declaration

```swift
struct ObjectAnchoringSource
```

## Topics

### Creating an object anchoring source

- [init(referenceObject:)](objectanchoringsource/init%28referenceobject_%29.md): Creates the object anchoring source by reference object file data.

### Initializers

- [init(\_:)](objectanchoringsource/init%28__%29.md): Creates the object anchoring source by reference object file URL.
- [init(group:name:)](objectanchoringsource/init%28group_name_%29.md): Creates the object anchoring source by group and name in AR Resources.
- [init(name:in:)](objectanchoringsource/init%28name_in_%29.md): Creates the object anchoring source by reference object file asset with provided name and bundle.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Image and object tracking

- [AnchoringComponent.ImageAnchoringSource](imageanchoringsource.md): Defines the source of image anchoring target based on how it is created.
