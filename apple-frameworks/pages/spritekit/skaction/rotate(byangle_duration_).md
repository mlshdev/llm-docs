> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/rotate(byangle:duration:)](https://developer.apple.com/documentation/spritekit/skaction/rotate(byangle:duration:))

# rotate(byAngle:duration:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that rotates the node by a relative value.

## Declaration

```swift
class func rotate(byAngle radians: CGFloat, duration: TimeInterval) -> SKAction
```

## Parameters

- `radians`: The amount to rotate the node, in radians.
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [zRotation](../sknode/zrotation.md) property animates to the new angle.

This action is reversible; the reverse is created as if the following code is executed:

**Swift**

```swift
let action = SKAction.rotate(byAngle: -radians, duration: sec)
```

**Obj-C**

```objc
[SKAction rotateByAngle: -radians duration: sec];
```

## See Also

### Animating the Rotation of a Node

- [rotate(toAngle:duration:)](rotate%28toangle_duration_%29.md): Creates an action that rotates the node counterclockwise to an absolute angle.
- [rotate(toAngle:duration:shortestUnitArc:)](rotate%28toangle_duration_shortestunitarc_%29.md): Creates an action that rotates the node to an absolute value.

# rotateByAngle:duration: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that rotates the node by a relative value.

## Declaration

```objectivec
+ (SKAction *) rotateByAngle:(CGFloat) radians duration:(NSTimeInterval) duration;
```

## Parameters

- `radians`: The amount to rotate the node, in radians.
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [zRotation](../sknode/zrotation.md) property animates to the new angle.

This action is reversible; the reverse is created as if the following code is executed:

**Swift**

```swift
let action = SKAction.rotate(byAngle: -radians, duration: sec)
```

**Obj-C**

```objc
[SKAction rotateByAngle: -radians duration: sec];
```

## See Also

### Animating the Rotation of a Node

- [rotateToAngle:duration:](rotate%28toangle_duration_%29.md): Creates an action that rotates the node counterclockwise to an absolute angle.
- [rotateToAngle:duration:shortestUnitArc:](rotate%28toangle_duration_shortestunitarc_%29.md): Creates an action that rotates the node to an absolute value.
