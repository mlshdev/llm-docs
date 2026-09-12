> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/rotate(toangle:duration:)](https://developer.apple.com/documentation/spritekit/skaction/rotate(toangle:duration:))

# rotate(toAngle:duration:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that rotates the node counterclockwise to an absolute angle.

## Declaration

```swift
class func rotate(toAngle radians: CGFloat, duration: TimeInterval) -> SKAction
```

## Parameters

- `radians`: The angle to rotate the node to, in radians.
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [zRotation](../sknode/zrotation.md) property is interpolated to the new angle.

This action is not reversible; the reverse of this action has the same duration but does not change anything.

## See Also

### Animating the Rotation of a Node

- [rotate(byAngle:duration:)](rotate%28byangle_duration_%29.md): Creates an action that rotates the node by a relative value.
- [rotate(toAngle:duration:shortestUnitArc:)](rotate%28toangle_duration_shortestunitarc_%29.md): Creates an action that rotates the node to an absolute value.

# rotateToAngle:duration: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that rotates the node counterclockwise to an absolute angle.

## Declaration

```objectivec
+ (SKAction *) rotateToAngle:(CGFloat) radians duration:(NSTimeInterval) duration;
```

## Parameters

- `radians`: The angle to rotate the node to, in radians.
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [zRotation](../sknode/zrotation.md) property is interpolated to the new angle.

This action is not reversible; the reverse of this action has the same duration but does not change anything.

## See Also

### Animating the Rotation of a Node

- [rotateByAngle:duration:](rotate%28byangle_duration_%29.md): Creates an action that rotates the node by a relative value.
- [rotateToAngle:duration:shortestUnitArc:](rotate%28toangle_duration_shortestunitarc_%29.md): Creates an action that rotates the node to an absolute value.
