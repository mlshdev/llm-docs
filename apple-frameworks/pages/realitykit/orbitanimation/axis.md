> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/orbitanimation/axis](https://developer.apple.com/documentation/realitykit/orbitanimation/axis)

# axis

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A 3D vector that points in the direction of the axis around which to rotate.

## Declaration

```swift
var axis: SIMD3<Float> { get set }
```

<a id="discussion"></a>

## Discussion

You can rotate an object around any axis. For example, if you set a `1` in the vector’s x-coordinate, rotation occurs around the x-axis, as in the following code.

```swift
orbitAnimation.axis = SIMD3<Float>(x: 1.0, y: 0.0, z: 0.0)
```

## See Also

### Configuring the animation

- [startTransform](starttransform.md): The pose of the orbiting object at the start of the animation.
- [name](name.md): A textual name for the animation.
- [bindTarget](bindtarget.md): A textual name that identifies the particular property that animates.
- [blendLayer](blendlayer.md): The order in which the framework composites the animation.
- [rotationCount](rotationcount.md): The number of times to rotate the target entity before stopping.
- [spinClockwise](spinclockwise.md): A Boolean value that indicates whether the object orbits the center point in the clockwise direction.
- [orientToPath](orienttopath.md): A Boolean value that indicates whether the orbiting object updates its orientation during the animation to orient itself along the rotation path.
- [additive](additive.md): A Boolean value that indicates whether the animation builds on the current state of the target entity or resets the state before running.
