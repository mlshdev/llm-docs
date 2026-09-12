> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/scalex(by:y:duration:)](https://developer.apple.com/documentation/spritekit/skaction/scalex(by:y:duration:))

# scaleX(by:y:duration:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that adds relative values to the x and y scale values of a node.

## Declaration

```swift
class func scaleX(by xScale: CGFloat, y yScale: CGFloat, duration: TimeInterval) -> SKAction
```

## Parameters

- `xScale`: The amount to add to the node’s x scale value.
- `yScale`: The amount to add to the node’s y scale value.
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [xScale](../sknode/xscale.md) and [yScale](../sknode/yscale.md) properties are animated to the new value.

This action is reversible; the reverse is created as if the following code is executed:

**Swift**

```swift
let action = SKAction.scaleX(by: -scaleX, y: -scaleY, duration: sec)
```

**Obj-C**

```objc
[SKAction scaleXBy: -xScale y: -yScale duration: sec];
```

## See Also

### Animating the Scaling of a Node

- [scale(by:duration:)](scale%28by_duration_%29.md): Creates an action that changes the x and y scale values of a node by a relative value.
- [scale(to:duration:)](scale%28to_duration_%29-43bz6.md): Creates an action that changes the x and y scale values of a node to achieve
- [scale(to:duration:)](scale%28to_duration_%29-1xyzs.md): Creates an action that changes the x and y scale values of a node.
- [scaleX(to:y:duration:)](scalex%28to_y_duration_%29.md): Creates an action that changes the x and y scale values of a node.
- [scaleX(to:duration:)](scalex%28to_duration_%29.md): Creates an action that changes the x scale value of a node to a new value.
- [scaleY(to:duration:)](scaley%28to_duration_%29.md): Creates an action that changes the y scale value of a node to a new value.

# scaleXBy:y:duration: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that adds relative values to the x and y scale values of a node.

## Declaration

```objectivec
+ (SKAction *) scaleXBy:(CGFloat) xScale y:(CGFloat) yScale duration:(NSTimeInterval) duration;
```

## Parameters

- `xScale`: The amount to add to the node’s x scale value.
- `yScale`: The amount to add to the node’s y scale value.
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [xScale](../sknode/xscale.md) and [yScale](../sknode/yscale.md) properties are animated to the new value.

This action is reversible; the reverse is created as if the following code is executed:

**Swift**

```swift
let action = SKAction.scaleX(by: -scaleX, y: -scaleY, duration: sec)
```

**Obj-C**

```objc
[SKAction scaleXBy: -xScale y: -yScale duration: sec];
```

## See Also

### Animating the Scaling of a Node

- [scaleBy:duration:](scale%28by_duration_%29.md): Creates an action that changes the x and y scale values of a node by a relative value.
- [scaleToSize:duration:](scale%28to_duration_%29-43bz6.md): Creates an action that changes the x and y scale values of a node to achieve
- [scaleTo:duration:](scale%28to_duration_%29-1xyzs.md): Creates an action that changes the x and y scale values of a node.
- [scaleXTo:y:duration:](scalex%28to_y_duration_%29.md): Creates an action that changes the x and y scale values of a node.
- [scaleXTo:duration:](scalex%28to_duration_%29.md): Creates an action that changes the x scale value of a node to a new value.
- [scaleYTo:duration:](scaley%28to_duration_%29.md): Creates an action that changes the y scale value of a node to a new value.
