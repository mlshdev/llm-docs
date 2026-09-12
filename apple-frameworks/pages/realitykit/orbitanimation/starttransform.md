> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/orbitanimation/starttransform](https://developer.apple.com/documentation/realitykit/orbitanimation/starttransform)

# startTransform

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

The pose of the orbiting object at the start of the animation.

## Declaration

```swift
var startTransform: Transform { get set }
```

## See Also

### Configuring the animation

- [axis](axis.md): A 3D vector that points in the direction of the axis around which to rotate.
- [name](name.md): A textual name for the animation.
- [bindTarget](bindtarget.md): A textual name that identifies the particular property that animates.
- [blendLayer](blendlayer.md): The order in which the framework composites the animation.
- [rotationCount](rotationcount.md): The number of times to rotate the target entity before stopping.
- [spinClockwise](spinclockwise.md): A Boolean value that indicates whether the object orbits the center point in the clockwise direction.
- [orientToPath](orienttopath.md): A Boolean value that indicates whether the orbiting object updates its orientation during the animation to orient itself along the rotation path.
- [additive](additive.md): A Boolean value that indicates whether the animation builds on the current state of the target entity or resets the state before running.
