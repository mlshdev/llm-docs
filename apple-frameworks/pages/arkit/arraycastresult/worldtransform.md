> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arraycastresult/worldtransform](https://developer.apple.com/documentation/arkit/arraycastresult/worldtransform)

# worldTransform (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The position, rotation, and scale, of the ray’s intersection with the target.

## Declaration

```swift
var worldTransform: simd_float4x4 { get }
```

## See Also

### Identifying Results

- [anchor](anchor.md): The anchor for the plane that the ray intersected.
- [target](target.md): The type of surface that the ray intersects.
- [ARRaycastQuery.Target](../arraycastquery/target-swift.enum.md): The types of surface you allow a raycast to intersect with.
- [targetAlignment](targetalignment.md): The alignment of the plane that the ray intersected.
- [ARRaycastQuery.TargetAlignment](../arraycastquery/targetalignment-swift.enum.md): A specification that indicates a target’s alignment with respect to gravity

# worldTransform (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The position, rotation, and scale, of the ray’s intersection with the target.

## Declaration

```objectivec
@property (nonatomic, readonly) simd_float4x4 worldTransform;
```

## See Also

### Identifying Results

- [anchor](anchor.md): The anchor for the plane that the ray intersected.
- [target](target.md): The type of surface that the ray intersects.
- [ARRaycastTarget](../arraycastquery/target-swift.enum.md): The types of surface you allow a raycast to intersect with.
- [targetAlignment](targetalignment.md): The alignment of the plane that the ray intersected.
- [ARRaycastTargetAlignment](../arraycastquery/targetalignment-swift.enum.md): A specification that indicates a target’s alignment with respect to gravity
