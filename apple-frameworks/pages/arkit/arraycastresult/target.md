> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arraycastresult/target](https://developer.apple.com/documentation/arkit/arraycastresult/target)

# target (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The type of surface that the ray intersects.

## Declaration

```swift
var target: ARRaycastQuery.Target { get }
```

## See Also

### Identifying Results

- [worldTransform](worldtransform.md): The position, rotation, and scale, of the ray’s intersection with the target.
- [anchor](anchor.md): The anchor for the plane that the ray intersected.
- [ARRaycastQuery.Target](../arraycastquery/target-swift.enum.md): The types of surface you allow a raycast to intersect with.
- [targetAlignment](targetalignment.md): The alignment of the plane that the ray intersected.
- [ARRaycastQuery.TargetAlignment](../arraycastquery/targetalignment-swift.enum.md): A specification that indicates a target’s alignment with respect to gravity

# target (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The type of surface that the ray intersects.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) ARRaycastTarget target;
```

## See Also

### Identifying Results

- [worldTransform](worldtransform.md): The position, rotation, and scale, of the ray’s intersection with the target.
- [anchor](anchor.md): The anchor for the plane that the ray intersected.
- [ARRaycastTarget](../arraycastquery/target-swift.enum.md): The types of surface you allow a raycast to intersect with.
- [targetAlignment](targetalignment.md): The alignment of the plane that the ray intersected.
- [ARRaycastTargetAlignment](../arraycastquery/targetalignment-swift.enum.md): A specification that indicates a target’s alignment with respect to gravity
