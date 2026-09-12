> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnaction/rotate(toaxisangle:duration:)](https://developer.apple.com/documentation/scenekit/scnaction/rotate(toaxisangle:duration:))

# rotate(toAxisAngle:duration:) (Swift)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates an action that rotates the node to an absolute angle around a specified axis.

## Declaration

```swift
class func rotate(toAxisAngle axisAngle: SCNVector4, duration: TimeInterval) -> SCNAction
```

## Parameters

- `axisAngle`: A four-component vector whose first three components are a vector in the node’s local coordinate space specifying an axis and whose fourth component is the amount to rotate the node counterclockwise around that axis, in radians.
- `duration`: The duration, in seconds, of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [rotation](../scnnode/rotation.md) property animates to the new angle.

This action is not reversible; the reverse of this action has the same duration but does not change anything.

## See Also

### Creating Actions That Rotate a Node

- [rotateBy(x:y:z:duration:)](rotateby%28x_y_z_duration_%29.md): Creates an action that rotates the node in each of the three principal axes by angles relative to its current orientation.
- [rotateTo(x:y:z:duration:)](rotateto%28x_y_z_duration_%29.md): Creates an action that rotates the node to absolute angles in each of the three principal axes.
- [rotateTo(x:y:z:duration:usesShortestUnitArc:)](rotateto%28x_y_z_duration_usesshortestunitarc_%29.md): Creates an action that rotates the node to absolute angles in each of the three principal axes.
- [rotate(by:around:duration:)](rotate%28by_around_duration_%29.md): Creates an action that rotates the node by an angle around a specified axis.

# rotateToAxisAngle:duration: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Creates an action that rotates the node to an absolute angle around a specified axis.

## Declaration

```objectivec
+ (SCNAction *) rotateToAxisAngle:(SCNVector4) axisAngle duration:(NSTimeInterval) duration;
```

## Parameters

- `axisAngle`: A four-component vector whose first three components are a vector in the node’s local coordinate space specifying an axis and whose fourth component is the amount to rotate the node counterclockwise around that axis, in radians.
- `duration`: The duration, in seconds, of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [rotation](../scnnode/rotation.md) property animates to the new angle.

This action is not reversible; the reverse of this action has the same duration but does not change anything.

## See Also

### Creating Actions That Rotate a Node

- [rotateByX:y:z:duration:](rotateby%28x_y_z_duration_%29.md): Creates an action that rotates the node in each of the three principal axes by angles relative to its current orientation.
- [rotateToX:y:z:duration:](rotateto%28x_y_z_duration_%29.md): Creates an action that rotates the node to absolute angles in each of the three principal axes.
- [rotateToX:y:z:duration:shortestUnitArc:](rotateto%28x_y_z_duration_usesshortestunitarc_%29.md): Creates an action that rotates the node to absolute angles in each of the three principal axes.
- [rotateByAngle:aroundAxis:duration:](rotate%28by_around_duration_%29.md): Creates an action that rotates the node by an angle around a specified axis.
