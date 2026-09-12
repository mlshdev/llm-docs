> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/collisioncasthit/normal](https://developer.apple.com/documentation/realitykit/collisioncasthit/normal)

# normal

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The normal of the hit.

## Declaration

```swift
var normal: SIMD3<Float> { get }
```

<a id="discussion"></a>

## Discussion

The frame of reference for this point depends on the reference entity used in the call to either the [raycast(origin:direction:length:query:mask:relativeTo:)](../scene/raycast%28origin_direction_length_query_mask_relativeto_%29.md) method or the [convexCast(convexShape:fromPosition:fromOrientation:toPosition:toOrientation:query:mask:relativeTo:)](../scene/convexcast%28convexshape_fromposition_fromorientation_toposition_toorientation_query_mask_relativeto_%29.md) method that generated the hit.

## See Also

### Characterizing the collision cast hit

- [position](position.md): The position of the hit.
- [distance](distance.md): The distance from the ray origin to the hit, or the convex shape travel distance.
