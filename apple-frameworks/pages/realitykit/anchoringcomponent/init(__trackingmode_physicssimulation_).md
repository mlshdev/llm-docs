> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/anchoringcomponent/init(_:trackingmode:physicssimulation:)](https://developer.apple.com/documentation/realitykit/anchoringcomponent/init(_:trackingmode:physicssimulation:))

# init(\_:trackingMode:physicsSimulation:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates an anchoring component for a given target, tracking mode and physics simulation.

## Declaration

```swift
init(_ target: AnchoringComponent.Target, trackingMode: AnchoringComponent.TrackingMode, physicsSimulation: AnchoringComponent.PhysicsSimulation = .isolated)
```

## Parameters

- `target`: The kind of real world object to target.
- `trackingMode`: The tracking mode of the entity.
- `physicsSimulation`: The physics simulation space the entity will be in.

## See Also

### Creating an anchoring component

- [init(\_:)](init%28__%29.md): Creates an anchoring component with the given AR anchor.
- [init(\_:trackingMode:)](init%28__trackingmode_%29.md)
