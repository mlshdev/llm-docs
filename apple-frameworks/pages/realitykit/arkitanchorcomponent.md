> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arkitanchorcomponent](https://developer.apple.com/documentation/realitykit/arkitanchorcomponent)

# ARKitAnchorComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · visionOS 26.0+

A component that exposes the backing ARKit data of an anchored entity.

## Declaration

```swift
struct ARKitAnchorComponent
```

## Topics

### Instance Properties

- [anchor](arkitanchorcomponent/anchor.md): represents the backing anchor on visionOS.
- [arAnchor](arkitanchorcomponent/aranchor.md): represents the backing anchor on iOS.

## Relationships

### Conforms To

- [Component](component.md)
- [TransientComponent](transientcomponent.md)

## See Also

### Anchoring components

- [AnchoringComponent](anchoringcomponent.md): A component that anchors virtual content to a real world target.
- [AnchoringComponent.Target](anchoringcomponent/target-swift.enum.md): Defines the kinds of real world objects to which an anchor entity can be tethered.
- [AnchoringComponent.TrackingMode](anchoringcomponent/trackingmode-swift.struct.md): Options for how an entity tracks its target anchor.
- [AnchorEntity](anchorentity.md): An anchor that tethers entities to a scene.
- [HasAnchoring](hasanchoring.md): An interface that enables anchoring of virtual content to a real-world object in an AR scene.
