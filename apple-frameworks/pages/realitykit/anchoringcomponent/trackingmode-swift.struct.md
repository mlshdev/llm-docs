> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/anchoringcomponent/trackingmode-swift.struct](https://developer.apple.com/documentation/realitykit/anchoringcomponent/trackingmode-swift.struct)

# AnchoringComponent.TrackingMode

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Options for how an entity tracks its target anchor.

## Declaration

```swift
struct TrackingMode
```

## Topics

### Type Properties

- [continuous](trackingmode-swift.struct/continuous.md): Continuously anchors the entity to its target based on the target’s realtime location and hides the entity when the target is no longer in frame.
- [once](trackingmode-swift.struct/once.md): Anchors the entity to the target on the first frame the target is found.
- [predicted](trackingmode-swift.struct/predicted.md): Continuously anchors the entity to its target based on the target’s predicted location and hides the entity when the target is no longer in frame.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Anchoring components

- [AnchoringComponent](../anchoringcomponent.md): A component that anchors virtual content to a real world target.
- [AnchoringComponent.Target](target-swift.enum.md): Defines the kinds of real world objects to which an anchor entity can be tethered.
- [ARKitAnchorComponent](../arkitanchorcomponent.md): A component that exposes the backing ARKit data of an anchored entity.
- [AnchorEntity](../anchorentity.md): An anchor that tethers entities to a scene.
- [HasAnchoring](../hasanchoring.md): An interface that enables anchoring of virtual content to a real-world object in an AR scene.
