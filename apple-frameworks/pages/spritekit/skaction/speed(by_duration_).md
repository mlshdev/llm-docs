> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/speed(by:duration:)](https://developer.apple.com/documentation/spritekit/skaction/speed(by:duration:))

# speed(by:duration:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that changes how fast the node executes actions by a relative value.

## Declaration

```swift
class func speed(by speed: CGFloat, duration: TimeInterval) -> SKAction
```

## Parameters

- `speed`: The amount to add to the node’s speed.
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [speed](../sknode/speed.md) property animates to the new value.

This action is reversible; the reverse is created as if the following code is executed:

**Swift**

```swift
let action = SKAction.speed(by: -speed, duration: sec)
```

**Obj-C**

```objc
[SKAction speedBy: -speed duration: sec];
```

## See Also

### Controlling the Action’s Speed

- [speed(to:duration:)](speed%28to_duration_%29.md): Creates an action that changes how fast the node executes actions.

# speedBy:duration: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that changes how fast the node executes actions by a relative value.

## Declaration

```objectivec
+ (SKAction *) speedBy:(CGFloat) speed duration:(NSTimeInterval) duration;
```

## Parameters

- `speed`: The amount to add to the node’s speed.
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [speed](../sknode/speed.md) property animates to the new value.

This action is reversible; the reverse is created as if the following code is executed:

**Swift**

```swift
let action = SKAction.speed(by: -speed, duration: sec)
```

**Obj-C**

```objc
[SKAction speedBy: -speed duration: sec];
```

## See Also

### Controlling the Action’s Speed

- [speedTo:duration:](speed%28to_duration_%29.md): Creates an action that changes how fast the node executes actions.
