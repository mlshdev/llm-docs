> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnaction/rotateto(x:y:z:duration:)](https://developer.apple.com/documentation/scenekit/scnaction/rotateto(x:y:z:duration:))

# rotateTo(x:y:z:duration:) (Swift)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates an action that rotates the node to absolute angles in each of the three principal axes.

## Declaration

```swift
class func rotateTo(x xAngle: CGFloat, y yAngle: CGFloat, z zAngle: CGFloat, duration: TimeInterval) -> SCNAction
```

## Parameters

- `xAngle`: The amount to rotate the node counterclockwise around the x-axis of its local coordinate space, in radians.
- `yAngle`: The amount to rotate the node counterclockwise around the y-axis of its local coordinate space, in radians.
- `zAngle`: The amount to rotate the node counterclockwise around the z-axis of its local coordinate space, in radians.
- `duration`: The duration, in seconds, of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [rotation](../scnnode/rotation.md) property animates to the new angle. Calling this method is equivalent to calling [rotateTo(x:y:z:duration:usesShortestUnitArc:)](rotateto%28x_y_z_duration_usesshortestunitarc_%29.md) and passing [false](https://developer.apple.com/documentation/swift/false) for the `shortestUnitArc` parameter.

This action is not reversible; the reverse of this action has the same duration but does not change anything.

## See Also

### Creating Actions That Rotate a Node

- [rotateBy(x:y:z:duration:)](rotateby%28x_y_z_duration_%29.md): Creates an action that rotates the node in each of the three principal axes by angles relative to its current orientation.
- [rotateTo(x:y:z:duration:usesShortestUnitArc:)](rotateto%28x_y_z_duration_usesshortestunitarc_%29.md): Creates an action that rotates the node to absolute angles in each of the three principal axes.
- [rotate(by:around:duration:)](rotate%28by_around_duration_%29.md): Creates an action that rotates the node by an angle around a specified axis.
- [rotate(toAxisAngle:duration:)](rotate%28toaxisangle_duration_%29.md): Creates an action that rotates the node to an absolute angle around a specified axis.

# rotateToX:y:z:duration: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Creates an action that rotates the node to absolute angles in each of the three principal axes.

## Declaration

```objectivec
+ (SCNAction *) rotateToX:(CGFloat) xAngle y:(CGFloat) yAngle z:(CGFloat) zAngle duration:(NSTimeInterval) duration;
```

## Parameters

- `xAngle`: The amount to rotate the node counterclockwise around the x-axis of its local coordinate space, in radians.
- `yAngle`: The amount to rotate the node counterclockwise around the y-axis of its local coordinate space, in radians.
- `zAngle`: The amount to rotate the node counterclockwise around the z-axis of its local coordinate space, in radians.
- `duration`: The duration, in seconds, of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [rotation](../scnnode/rotation.md) property animates to the new angle. Calling this method is equivalent to calling [rotateToX:y:z:duration:shortestUnitArc:](rotateto%28x_y_z_duration_usesshortestunitarc_%29.md) and passing [false](https://developer.apple.com/documentation/swift/false) for the `shortestUnitArc` parameter.

This action is not reversible; the reverse of this action has the same duration but does not change anything.

## See Also

### Creating Actions That Rotate a Node

- [rotateByX:y:z:duration:](rotateby%28x_y_z_duration_%29.md): Creates an action that rotates the node in each of the three principal axes by angles relative to its current orientation.
- [rotateToX:y:z:duration:shortestUnitArc:](rotateto%28x_y_z_duration_usesshortestunitarc_%29.md): Creates an action that rotates the node to absolute angles in each of the three principal axes.
- [rotateByAngle:aroundAxis:duration:](rotate%28by_around_duration_%29.md): Creates an action that rotates the node by an angle around a specified axis.
- [rotateToAxisAngle:duration:](rotate%28toaxisangle_duration_%29.md): Creates an action that rotates the node to an absolute angle around a specified axis.
