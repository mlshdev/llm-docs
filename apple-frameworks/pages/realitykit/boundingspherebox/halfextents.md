> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/boundingspherebox/halfextents](https://developer.apple.com/documentation/realitykit/boundingspherebox/halfextents)

# halfExtents

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The half-extents of the optional axis-aligned bounding box.

## Declaration

```swift
var halfExtents: SIMD3<Float>? { get set }
```

<a id="discussion"></a>

## Discussion

When non-`nil`, the renderer uses the box for culling. Setting this to a value expands `radius` to circumscribe the box.

## See Also

### Accessing the dimensions

- [center](center.md): The center of the bounding volume in model space.
- [fullExtents](fullextents.md): The full extents of the optional axis-aligned bounding box.
