> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/scalex(to:duration:)](https://developer.apple.com/documentation/spritekit/skaction/scalex(to:duration:))

# scaleX(to:duration:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that changes the x scale value of a node to a new value.

## Declaration

```swift
class func scaleX(to scale: CGFloat, duration: TimeInterval) -> SKAction
```

## Parameters

- `scale`: The new value for the node’s x scale value.
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [xScale](../sknode/xscale.md) property animates to the new value.

This action is not reversible; the reverse of this action has the same duration but does not change anything.

## See Also

### Animating the Scaling of a Node

- [scale(by:duration:)](scale%28by_duration_%29.md): Creates an action that changes the x and y scale values of a node by a relative value.
- [scale(to:duration:)](scale%28to_duration_%29-43bz6.md): Creates an action that changes the x and y scale values of a node to achieve
- [scale(to:duration:)](scale%28to_duration_%29-1xyzs.md): Creates an action that changes the x and y scale values of a node.
- [scaleX(by:y:duration:)](scalex%28by_y_duration_%29.md): Creates an action that adds relative values to the x and y scale values of a node.
- [scaleX(to:y:duration:)](scalex%28to_y_duration_%29.md): Creates an action that changes the x and y scale values of a node.
- [scaleY(to:duration:)](scaley%28to_duration_%29.md): Creates an action that changes the y scale value of a node to a new value.

# scaleXTo:duration: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that changes the x scale value of a node to a new value.

## Declaration

```objectivec
+ (SKAction *) scaleXTo:(CGFloat) scale duration:(NSTimeInterval) duration;
```

## Parameters

- `scale`: The new value for the node’s x scale value.
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [xScale](../sknode/xscale.md) property animates to the new value.

This action is not reversible; the reverse of this action has the same duration but does not change anything.

## See Also

### Animating the Scaling of a Node

- [scaleBy:duration:](scale%28by_duration_%29.md): Creates an action that changes the x and y scale values of a node by a relative value.
- [scaleToSize:duration:](scale%28to_duration_%29-43bz6.md): Creates an action that changes the x and y scale values of a node to achieve
- [scaleTo:duration:](scale%28to_duration_%29-1xyzs.md): Creates an action that changes the x and y scale values of a node.
- [scaleXBy:y:duration:](scalex%28by_y_duration_%29.md): Creates an action that adds relative values to the x and y scale values of a node.
- [scaleXTo:y:duration:](scalex%28to_y_duration_%29.md): Creates an action that changes the x and y scale values of a node.
- [scaleYTo:duration:](scaley%28to_duration_%29.md): Creates an action that changes the y scale value of a node to a new value.
