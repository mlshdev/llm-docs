> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/speed(to:duration:)](https://developer.apple.com/documentation/spritekit/skaction/speed(to:duration:))

# speed(to:duration:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that changes how fast the node executes actions.

## Declaration

```swift
class func speed(to speed: CGFloat, duration: TimeInterval) -> SKAction
```

## Parameters

- `speed`: The new value for the node’s speed.
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [speed](../sknode/speed.md) property animates to the new value.

This action is not reversible; the reverse of this action has the same duration but does not change anything.

## See Also

### Controlling the Action’s Speed

- [speed(by:duration:)](speed%28by_duration_%29.md): Creates an action that changes how fast the node executes actions by a relative value.

# speedTo:duration: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that changes how fast the node executes actions.

## Declaration

```objectivec
+ (SKAction *) speedTo:(CGFloat) speed duration:(NSTimeInterval) duration;
```

## Parameters

- `speed`: The new value for the node’s speed.
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [speed](../sknode/speed.md) property animates to the new value.

This action is not reversible; the reverse of this action has the same duration but does not change anything.

## See Also

### Controlling the Action’s Speed

- [speedBy:duration:](speed%28by_duration_%29.md): Creates an action that changes how fast the node executes actions by a relative value.
