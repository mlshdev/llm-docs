> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/follow(_:asoffset:orienttopath:speed:)](https://developer.apple.com/documentation/spritekit/skaction/follow(_:asoffset:orienttopath:speed:))

# follow(\_:asOffset:orientToPath:speed:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that moves the node at a specified speed along a path.

## Declaration

```swift
class func follow(_ path: CGPath, asOffset offset: Bool, orientToPath orient: Bool, speed: CGFloat) -> SKAction
```

## Parameters

- `path`: A path to follow.
- `offset`: If [true](https://developer.apple.com/documentation/swift/true), the points in the path are relative offsets to the node’s starting position. If [false](https://developer.apple.com/documentation/swift/false), the points in the node are absolute coordinate values.
- `orient`: If [true](https://developer.apple.com/documentation/swift/true), the node’s [zRotation](../sknode/zrotation.md) property animates so that the node turns to follow the path. If [false](https://developer.apple.com/documentation/swift/false), the [zRotation](../sknode/zrotation.md) property of the node is unchanged.
- `speed`: The speed at which the node should move, in points per second.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [position](../sknode/position.md) and [zRotation](../sknode/zrotation.md) properties are animated along the provided path. The duration of the action is determined by the length of the path and the speed of the node.

This action is reversible; the resulting action creates a reversed path and then follows it, with the same speed.

## See Also

### Animating a Node’s Position Along a Custom Path

- [follow(\_:duration:)](follow%28__duration_%29.md): Creates an action that moves the node along a relative path, orienting the node to the path.
- [follow(\_:speed:)](follow%28__speed_%29.md): Creates an action that moves the node along a relative path at a specified speed, orienting the node to the path.
- [follow(\_:asOffset:orientToPath:duration:)](follow%28__asoffset_orienttopath_duration_%29.md): Creates an action that moves the node along a path.

# followPath:asOffset:orientToPath:speed: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that moves the node at a specified speed along a path.

## Declaration

```objectivec
+ (SKAction *) followPath:(CGPathRef) path asOffset:(BOOL) offset orientToPath:(BOOL) orient speed:(CGFloat) speed;
```

## Parameters

- `path`: A path to follow.
- `offset`: If [true](https://developer.apple.com/documentation/swift/true), the points in the path are relative offsets to the node’s starting position. If [false](https://developer.apple.com/documentation/swift/false), the points in the node are absolute coordinate values.
- `orient`: If [true](https://developer.apple.com/documentation/swift/true), the node’s [zRotation](../sknode/zrotation.md) property animates so that the node turns to follow the path. If [false](https://developer.apple.com/documentation/swift/false), the [zRotation](../sknode/zrotation.md) property of the node is unchanged.
- `speed`: The speed at which the node should move, in points per second.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [position](../sknode/position.md) and [zRotation](../sknode/zrotation.md) properties are animated along the provided path. The duration of the action is determined by the length of the path and the speed of the node.

This action is reversible; the resulting action creates a reversed path and then follows it, with the same speed.

## See Also

### Animating a Node’s Position Along a Custom Path

- [followPath:duration:](follow%28__duration_%29.md): Creates an action that moves the node along a relative path, orienting the node to the path.
- [followPath:speed:](follow%28__speed_%29.md): Creates an action that moves the node along a relative path at a specified speed, orienting the node to the path.
- [followPath:asOffset:orientToPath:duration:](follow%28__asoffset_orienttopath_duration_%29.md): Creates an action that moves the node along a path.
