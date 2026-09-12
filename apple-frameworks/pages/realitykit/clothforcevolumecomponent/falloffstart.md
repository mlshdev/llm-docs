> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothforcevolumecomponent/falloffstart](https://developer.apple.com/documentation/realitykit/clothforcevolumecomponent/falloffstart)

# falloffStart

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

The depth (in meters) inside the volume at which the total force starts to linearly fall off.

## Declaration

```swift
var falloffStart: Float { get set }
```

<a id="discussion"></a>

## Discussion

For particles whose depth is greater than or equal to `falloffStart`, the full force is applied. For shallower particles, the force ramps linearly from zero at the volume surface to the full force at `falloffStart`. Must be non-negative; negative values are clamped to zero. Zero by default, which means the total force is fully applied to all intersecting particles.

## See Also

### Shaping the volume

- [shape](shape.md): The shape of the volume.
