> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arraycastresult/anchor](https://developer.apple.com/documentation/arkit/arraycastresult/anchor)

# anchor (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The anchor for the plane that the ray intersected.

## Declaration

```swift
var anchor: ARAnchor? { get }
```

<a id="Discussion"></a>

## Discussion

If you chose an existing plane target, ARKit provides its anchor. If you choose an estimated plane target, ARKit provides an anchor only if the ray intersects an existing plane.

## See Also

### Identifying Results

- [worldTransform](worldtransform.md): The position, rotation, and scale, of the ray’s intersection with the target.
- [target](target.md): The type of surface that the ray intersects.
- [ARRaycastQuery.Target](../arraycastquery/target-swift.enum.md): The types of surface you allow a raycast to intersect with.
- [targetAlignment](targetalignment.md): The alignment of the plane that the ray intersected.
- [ARRaycastQuery.TargetAlignment](../arraycastquery/targetalignment-swift.enum.md): A specification that indicates a target’s alignment with respect to gravity

# anchor (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The anchor for the plane that the ray intersected.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) ARAnchor * anchor;
```

<a id="Discussion"></a>

## Discussion

If you chose an existing plane target, ARKit provides its anchor. If you choose an estimated plane target, ARKit provides an anchor only if the ray intersects an existing plane.

## See Also

### Identifying Results

- [worldTransform](worldtransform.md): The position, rotation, and scale, of the ray’s intersection with the target.
- [target](target.md): The type of surface that the ray intersects.
- [ARRaycastTarget](../arraycastquery/target-swift.enum.md): The types of surface you allow a raycast to intersect with.
- [targetAlignment](targetalignment.md): The alignment of the plane that the ray intersected.
- [ARRaycastTargetAlignment](../arraycastquery/targetalignment-swift.enum.md): A specification that indicates a target’s alignment with respect to gravity
