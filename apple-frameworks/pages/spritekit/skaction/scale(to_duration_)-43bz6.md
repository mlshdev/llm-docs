> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/scale(to:duration:)-43bz6](https://developer.apple.com/documentation/spritekit/skaction/scale(to:duration:)-43bz6)

# scale(to:duration:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates an action that changes the x and y scale values of a node to achieve

## Declaration

```swift
class func scale(to size: CGSize, duration: TimeInterval) -> SKAction
```

## Parameters

- `size`: The new size of the node.
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [xScale](../sknode/xscale.md) and [yScale](../sknode/yscale.md) properties are animated to achieve the specified size in its parent’s coordinate space.

This action is not reversible; the reverse of this action has the same duration but does not change anything.

## See Also

### Animating the Scaling of a Node

- [scale(by:duration:)](scale%28by_duration_%29.md): Creates an action that changes the x and y scale values of a node by a relative value.
- [scale(to:duration:)](scale%28to_duration_%29-1xyzs.md): Creates an action that changes the x and y scale values of a node.
- [scaleX(by:y:duration:)](scalex%28by_y_duration_%29.md): Creates an action that adds relative values to the x and y scale values of a node.
- [scaleX(to:y:duration:)](scalex%28to_y_duration_%29.md): Creates an action that changes the x and y scale values of a node.
- [scaleX(to:duration:)](scalex%28to_duration_%29.md): Creates an action that changes the x scale value of a node to a new value.
- [scaleY(to:duration:)](scaley%28to_duration_%29.md): Creates an action that changes the y scale value of a node to a new value.

# scaleToSize:duration: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates an action that changes the x and y scale values of a node to achieve

## Declaration

```objectivec
+ (SKAction *) scaleToSize:(CGSize) size duration:(NSTimeInterval) duration;
```

## Parameters

- `size`: The new size of the node.
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [xScale](../sknode/xscale.md) and [yScale](../sknode/yscale.md) properties are animated to achieve the specified size in its parent’s coordinate space.

This action is not reversible; the reverse of this action has the same duration but does not change anything.

## See Also

### Animating the Scaling of a Node

- [scaleBy:duration:](scale%28by_duration_%29.md): Creates an action that changes the x and y scale values of a node by a relative value.
- [scaleTo:duration:](scale%28to_duration_%29-1xyzs.md): Creates an action that changes the x and y scale values of a node.
- [scaleXBy:y:duration:](scalex%28by_y_duration_%29.md): Creates an action that adds relative values to the x and y scale values of a node.
- [scaleXTo:y:duration:](scalex%28to_y_duration_%29.md): Creates an action that changes the x and y scale values of a node.
- [scaleXTo:duration:](scalex%28to_duration_%29.md): Creates an action that changes the x scale value of a node to a new value.
- [scaleYTo:duration:](scaley%28to_duration_%29.md): Creates an action that changes the y scale value of a node to a new value.
