> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arraycastresult/targetalignment](https://developer.apple.com/documentation/arkit/arraycastresult/targetalignment)

# targetAlignment (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The alignment of the plane that the ray intersected.

## Declaration

```swift
var targetAlignment: ARRaycastQuery.TargetAlignment { get }
```

## See Also

### Identifying Results

- [worldTransform](worldtransform.md): The position, rotation, and scale, of the ray’s intersection with the target.
- [anchor](anchor.md): The anchor for the plane that the ray intersected.
- [target](target.md): The type of surface that the ray intersects.
- [ARRaycastQuery.Target](../arraycastquery/target-swift.enum.md): The types of surface you allow a raycast to intersect with.
- [ARRaycastQuery.TargetAlignment](../arraycastquery/targetalignment-swift.enum.md): A specification that indicates a target’s alignment with respect to gravity

# targetAlignment (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The alignment of the plane that the ray intersected.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) ARRaycastTargetAlignment targetAlignment;
```

## See Also

### Identifying Results

- [worldTransform](worldtransform.md): The position, rotation, and scale, of the ray’s intersection with the target.
- [anchor](anchor.md): The anchor for the plane that the ray intersected.
- [target](target.md): The type of surface that the ray intersects.
- [ARRaycastTarget](../arraycastquery/target-swift.enum.md): The types of surface you allow a raycast to intersect with.
- [ARRaycastTargetAlignment](../arraycastquery/targetalignment-swift.enum.md): A specification that indicates a target’s alignment with respect to gravity
