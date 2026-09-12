> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/localfront](https://developer.apple.com/documentation/scenekit/scnnode/localfront)

# localFront (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The unit vector SceneKit treats as “forward” in local space for all nodes.

## Declaration

```swift
class var localFront: SCNVector3 { get }
```

<a id="Discussion"></a>

## Discussion

The “forward” direction of a node affects cameras and directional lighting attached to a node, as well as relative orientation and movement effects such as [look(at:)](look%28at_%29.md), [SCNLookAtConstraint](../scnlookatconstraint.md), and [SCNBillboardConstraint](../scnbillboardconstraint.md).

This vector is always `(0, 0, -1)` for all nodes, but you can use this class property when it’s convenient to refer to directions symbolically.

## See Also

### Related Documentation

- [simdLocalFront](simdlocalfront.md): The unit vector SceneKit treats as “forward” in local space for all nodes.

### Calculating Node-Relative Transforms (SceneKit Types)

- [localRight](localright.md): The direction SceneKit treats as “right” in local space for all nodes.
- [localUp](localup.md): The direction SceneKit treats as “up” in local space for all nodes.
- [worldRight](worldright.md): The “right” (+X) direction vector relative to the node, expressed in world space.
- [worldUp](worldup.md): The “up” (+Y) direction vector relative to the node, expressed in world space.
- [worldFront](worldfront.md): The “forward” (-Z) direction vector relative to the node, expressed in world space.

# localFront (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The unit vector SceneKit treats as “forward” in local space for all nodes.

## Declaration

```objectivec
@property (class, nonatomic, readonly) SCNVector3 localFront;
```

<a id="Discussion"></a>

## Discussion

The “forward” direction of a node affects cameras and directional lighting attached to a node, as well as relative orientation and movement effects such as [lookAt:](look%28at_%29.md), [SCNLookAtConstraint](../scnlookatconstraint.md), and [SCNBillboardConstraint](../scnbillboardconstraint.md).

This vector is always `(0, 0, -1)` for all nodes, but you can use this class property when it’s convenient to refer to directions symbolically.

## See Also

### Related Documentation

- [simdLocalFront](simdlocalfront.md): The unit vector SceneKit treats as “forward” in local space for all nodes.

### Calculating Node-Relative Transforms (SceneKit Types)

- [localRight](localright.md): The direction SceneKit treats as “right” in local space for all nodes.
- [localUp](localup.md): The direction SceneKit treats as “up” in local space for all nodes.
- [worldRight](worldright.md): The “right” (+X) direction vector relative to the node, expressed in world space.
- [worldUp](worldup.md): The “up” (+Y) direction vector relative to the node, expressed in world space.
- [worldFront](worldfront.md): The “forward” (-Z) direction vector relative to the node, expressed in world space.
