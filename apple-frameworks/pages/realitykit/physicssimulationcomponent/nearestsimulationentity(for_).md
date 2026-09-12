> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicssimulationcomponent/nearestsimulationentity(for:)](https://developer.apple.com/documentation/realitykit/physicssimulationcomponent/nearestsimulationentity(for:))

# nearestSimulationEntity(for:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Obtains the entity containing the physics simulation origin.

## Declaration

```swift
static func nearestSimulationEntity(for entity: Entity) -> Entity?
```

## Parameters

- `entity`: The entity to find the physics simulation origin for.

<a id="return-value"></a>

## Return Value

The entity containing the physics simulation origin or `nil` if the entity doesn’t have a parent object in the scene.

<a id="discussion"></a>

## Discussion

The simulation origin is the nearest parent object where a [PhysicsSimulationComponent](../physicssimulationcomponent.md) exists, or the root entity (normally the anchor) where the default simulation is embedded.
