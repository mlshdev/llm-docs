> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/orbitanimation/blendlayer](https://developer.apple.com/documentation/realitykit/orbitanimation/blendlayer)

# blendLayer

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

The order in which the framework composites the animation.

## Declaration

```swift
var blendLayer: Int32 { get set }
```

<a id="discussion"></a>

## Discussion

The framework applies multiple animations on the same target in ascending order of this property’s value. Animations in a lower layer run before animations in a higher layer. Animations that share the same value apply in the order that they execute.

## See Also

### Configuring the animation

- [startTransform](starttransform.md): The pose of the orbiting object at the start of the animation.
- [axis](axis.md): A 3D vector that points in the direction of the axis around which to rotate.
- [name](name.md): A textual name for the animation.
- [bindTarget](bindtarget.md): A textual name that identifies the particular property that animates.
- [rotationCount](rotationcount.md): The number of times to rotate the target entity before stopping.
- [spinClockwise](spinclockwise.md): A Boolean value that indicates whether the object orbits the center point in the clockwise direction.
- [orientToPath](orienttopath.md): A Boolean value that indicates whether the orbiting object updates its orientation during the animation to orient itself along the rotation path.
- [additive](additive.md): A Boolean value that indicates whether the animation builds on the current state of the target entity or resets the state before running.
