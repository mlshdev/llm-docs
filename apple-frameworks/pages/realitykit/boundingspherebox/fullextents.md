> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/boundingspherebox/fullextents](https://developer.apple.com/documentation/realitykit/boundingspherebox/fullextents)

# fullExtents

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The full extents of the optional axis-aligned bounding box.

## Declaration

```swift
var fullExtents: SIMD3<Float>? { get set }
```

<a id="discussion"></a>

## Discussion

The full extents are equal to twice the [halfExtents](halfextents.md).

## See Also

### Accessing the dimensions

- [center](center.md): The center of the bounding volume in model space.
- [halfExtents](halfextents.md): The half-extents of the optional axis-aligned bounding box.
