> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/rotate(toangle:duration:shortestunitarc:)](https://developer.apple.com/documentation/spritekit/skaction/rotate(toangle:duration:shortestunitarc:))

# rotate(toAngle:duration:shortestUnitArc:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that rotates the node to an absolute value.

## Declaration

```swift
class func rotate(toAngle radians: CGFloat, duration: TimeInterval, shortestUnitArc: Bool) -> SKAction
```

## Parameters

- `radians`: The angle to rotate the node to, in radians.
- `duration`: The duration of the animation.
- `shortestUnitArc`: If [true](https://developer.apple.com/documentation/swift/true), the rotation is performed in whichever direction results in the smallest rotation. If [false](https://developer.apple.com/documentation/swift/false), the rotation is interpolated.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [zRotation](../sknode/zrotation.md) property is animated to the new angle.

This action is not reversible; the reverse of this action has the same duration but does not change anything.

## See Also

### Animating the Rotation of a Node

- [rotate(byAngle:duration:)](rotate%28byangle_duration_%29.md): Creates an action that rotates the node by a relative value.
- [rotate(toAngle:duration:)](rotate%28toangle_duration_%29.md): Creates an action that rotates the node counterclockwise to an absolute angle.

# rotateToAngle:duration:shortestUnitArc: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that rotates the node to an absolute value.

## Declaration

```objectivec
+ (SKAction *) rotateToAngle:(CGFloat) radians duration:(NSTimeInterval) duration shortestUnitArc:(BOOL) shortestUnitArc;
```

## Parameters

- `radians`: The angle to rotate the node to, in radians.
- `duration`: The duration of the animation.
- `shortestUnitArc`: If [true](https://developer.apple.com/documentation/swift/true), the rotation is performed in whichever direction results in the smallest rotation. If [false](https://developer.apple.com/documentation/swift/false), the rotation is interpolated.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [zRotation](../sknode/zrotation.md) property is animated to the new angle.

This action is not reversible; the reverse of this action has the same duration but does not change anything.

## See Also

### Animating the Rotation of a Node

- [rotateByAngle:duration:](rotate%28byangle_duration_%29.md): Creates an action that rotates the node by a relative value.
- [rotateToAngle:duration:](rotate%28toangle_duration_%29.md): Creates an action that rotates the node counterclockwise to an absolute angle.
