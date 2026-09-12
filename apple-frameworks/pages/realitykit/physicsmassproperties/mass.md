> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicsmassproperties/mass](https://developer.apple.com/documentation/realitykit/physicsmassproperties/mass)

# mass

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The mass in kilograms.

## Declaration

```swift
var mass: Float
```

<a id="discussion"></a>

## Discussion

For a mass of `0` or infinity, the simulation treats the object as [PhysicsBodyMode.kinematic](../physicsbodymode/kinematic.md). That is, the object doesn’t respond to forces.

## See Also

### Getting mass properties

- [inertia](inertia.md): The inertia in kilograms per square meter.
- [centerOfMass](centerofmass.md): The position of the center of mass and the orientation of the principal axes.
