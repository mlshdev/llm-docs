> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/anchoringcomponent/physicssimulation-swift.property

# physicsSimulation

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Specifies the physics simulation spece that the entity and its descendants are in.

## Declaration

```swift
var physicsSimulation: AnchoringComponent.PhysicsSimulation { get set }
```

## See Also

### Configuring the anchor

- [target](target-swift.property.md): The real world anchor target to attach the entity to.
- [trackingMode](trackingmode-swift.property.md): Defines how the `Entity` tracks its target anchor.
