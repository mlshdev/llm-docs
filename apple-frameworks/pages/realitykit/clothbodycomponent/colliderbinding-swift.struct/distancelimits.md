> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothbodycomponent/colliderbinding-swift.struct/distancelimits](https://developer.apple.com/documentation/realitykit/clothbodycomponent/colliderbinding-swift.struct/distancelimits)

# distanceLimits

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Distance limits (in meters) for how much each particle is allowed to deviate from its perfectly-bound position.

## Declaration

```swift
var distanceLimits: PerClothVertexData<Float>
```

<a id="discussion"></a>

## Discussion

Each value must be non-negative. A value of 0 makes the particle fully bound to its assigned triangle in the source collider. A value of `Float.infinity` allows the particle to move completely free, as if no binding was happening.

## See Also

### Tuning collision response

- [teleportThresholdSpeed](teleportthresholdspeed.md): The instantaneous collider speed (in m/s) over which the source collider will be considered to have teleported.
