> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/collisionevents/began/position](https://developer.apple.com/documentation/realitykit/collisionevents/began/position)

# position

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

A position representing the estimated point of contact.

## Declaration

```swift
let position: SIMD3<Float>
```

<a id="discussion"></a>

## Discussion

The point is an average calculated from the intersecting shapes. It’s specified in the coordinate space of the physics simulation, which means it’s relative to [nearestSimulationEntity(for:)](../../physicssimulationcomponent/nearestsimulationentity%28for_%29.md). If the physics origin is `nil`, the point is given in world space.

## See Also

### Characterizing the collision

- [impulse](impulse.md): The total impulse in this collision pair obtained by adding up all the individual impulses applied at each contact point.
