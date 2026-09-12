> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hasanchoring](https://developer.apple.com/documentation/realitykit/hasanchoring)

# HasAnchoring

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

An interface that enables anchoring of virtual content to a real-world object in an AR scene.

## Declaration

```swift
@MainActor @preconcurrency protocol HasAnchoring : Entity
```

## Topics

### Getting the component

- [anchoring](hasanchoring/anchoring.md): The component that describes how the virtual content is anchored to the real world.

### Identifying the AR anchor

- [anchorIdentifier](hasanchoring/anchoridentifier.md): Deprecated. The identifier of the AR anchor with which the anchor entity is associated, or `nil` if it isn’t currently anchored.

### Moving the anchor

- [reanchor(\_:preservingWorldTransform:)](hasanchoring/reanchor%28__preservingworldtransform_%29.md): Deprecated. Changes the entity’s anchoring, preserving either the world transform or the local transform.

## Relationships

### Inherits From

- [Entity](entity.md)

### Conforming Types

- [AnchorEntity](anchorentity.md)

## See Also

### Anchoring components

- [AnchoringComponent](anchoringcomponent.md): A component that anchors virtual content to a real world target.
- [AnchoringComponent.Target](anchoringcomponent/target-swift.enum.md): Defines the kinds of real world objects to which an anchor entity can be tethered.
- [AnchoringComponent.TrackingMode](anchoringcomponent/trackingmode-swift.struct.md): Options for how an entity tracks its target anchor.
- [ARKitAnchorComponent](arkitanchorcomponent.md): A component that exposes the backing ARKit data of an anchored entity.
- [AnchorEntity](anchorentity.md): An anchor that tethers entities to a scene.
