> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/follow(_:duration:)](https://developer.apple.com/documentation/spritekit/skaction/follow(_:duration:))

# follow(\_:duration:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that moves the node along a relative path, orienting the node to the path.

## Declaration

```swift
class func follow(_ path: CGPath, duration: TimeInterval) -> SKAction
```

## Parameters

- `path`: A Core Graphics path whose coordinates are relative to the node’s current position.
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

Calling this method is equivalent to calling the [follow(\_:asOffset:orientToPath:duration:)](follow%28__asoffset_orienttopath_duration_%29.md) method, passing in [true](https://developer.apple.com/documentation/swift/true) to both the `offset` and `orient` parameters.

This action is reversible; the resulting action creates and then follows a reversed path with the same duration.

## See Also

### Animating a Node’s Position Along a Custom Path

- [follow(\_:speed:)](follow%28__speed_%29.md): Creates an action that moves the node along a relative path at a specified speed, orienting the node to the path.
- [follow(\_:asOffset:orientToPath:duration:)](follow%28__asoffset_orienttopath_duration_%29.md): Creates an action that moves the node along a path.
- [follow(\_:asOffset:orientToPath:speed:)](follow%28__asoffset_orienttopath_speed_%29.md): Creates an action that moves the node at a specified speed along a path.

# followPath:duration: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that moves the node along a relative path, orienting the node to the path.

## Declaration

```objectivec
+ (SKAction *) followPath:(CGPathRef) path duration:(NSTimeInterval) duration;
```

## Parameters

- `path`: A Core Graphics path whose coordinates are relative to the node’s current position.
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

Calling this method is equivalent to calling the [followPath:asOffset:orientToPath:duration:](follow%28__asoffset_orienttopath_duration_%29.md) method, passing in [true](https://developer.apple.com/documentation/swift/true) to both the `offset` and `orient` parameters.

This action is reversible; the resulting action creates and then follows a reversed path with the same duration.

## See Also

### Animating a Node’s Position Along a Custom Path

- [followPath:speed:](follow%28__speed_%29.md): Creates an action that moves the node along a relative path at a specified speed, orienting the node to the path.
- [followPath:asOffset:orientToPath:duration:](follow%28__asoffset_orienttopath_duration_%29.md): Creates an action that moves the node along a path.
- [followPath:asOffset:orientToPath:speed:](follow%28__asoffset_orienttopath_speed_%29.md): Creates an action that moves the node at a specified speed along a path.
