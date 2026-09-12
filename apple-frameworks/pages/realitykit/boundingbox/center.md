> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/boundingbox/center](https://developer.apple.com/documentation/realitykit/boundingbox/center)

# center

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The center of the bounding box.

## Declaration

```swift
var center: SIMD3<Float> { get }
```

<a id="discussion"></a>

## Discussion

This value is (0, 0, 0) if the box is empty.

## See Also

### Getting the box characteristics

- [max](max.md): The position of the maximum corner of the box.
- [min](min.md): The position of the minimum corner of the box.
- [extents](extents.md): The extents of the bounding box.
- [boundingRadius](boundingradius.md): The radius of a bounding sphere that encompasses the bounding box.
