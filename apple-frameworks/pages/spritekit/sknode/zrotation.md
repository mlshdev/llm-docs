> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode/zrotation](https://developer.apple.com/documentation/spritekit/sknode/zrotation)

# zRotation (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The Euler rotation about the z axis (in radians).

## Declaration

```swift
var zRotation: CGFloat { get set }
```

## Mentioned In

- [About Node Property Propagation](../about-node-property-propagation.md)
- [About SpriteKit Coordinate Systems](../about-spritekit-coordinate-systems.md)
- [Getting Started with a Camera](../getting-started-with-a-camera.md)
- [Getting Started with Nodes](../getting-started-with-nodes.md)
- [Making Physics Bodies Move](../making-physics-bodies-move.md)

<a id="Discussion"></a>

## Discussion

The default value is `0.0`, which indicates no rotation. A positive value indicates a counterclockwise rotation. When the coordinate system is rotated, it affects the node and its descendants. The rotation affects the node’s [frame](frame.md) property, hit testing, rendering, and other similar characteristics.

## See Also

### Scaling and Rotating

- [setScale(\_:)](setscale%28__%29.md): Sets the [xScale](xscale.md) and [yScale](yscale.md) properties of the node.
- [xScale](xscale.md): A scaling factor that multiplies the width of a node and its children.
- [yScale](yscale.md): A scaling factor that multiplies the height of a node and its children.

# zRotation (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The Euler rotation about the z axis (in radians).

## Declaration

```objectivec
@property (nonatomic) CGFloat zRotation;
```

## Mentioned In

- [About Node Property Propagation](../about-node-property-propagation.md)
- [About SpriteKit Coordinate Systems](../about-spritekit-coordinate-systems.md)
- [Getting Started with a Camera](../getting-started-with-a-camera.md)
- [Getting Started with Nodes](../getting-started-with-nodes.md)
- [Making Physics Bodies Move](../making-physics-bodies-move.md)

<a id="Discussion"></a>

## Discussion

The default value is `0.0`, which indicates no rotation. A positive value indicates a counterclockwise rotation. When the coordinate system is rotated, it affects the node and its descendants. The rotation affects the node’s [frame](frame.md) property, hit testing, rendering, and other similar characteristics.

## See Also

### Scaling and Rotating

- [setScale:](setscale%28__%29.md): Sets the [xScale](xscale.md) and [yScale](yscale.md) properties of the node.
- [xScale](xscale.md): A scaling factor that multiplies the width of a node and its children.
- [yScale](yscale.md): A scaling factor that multiplies the height of a node and its children.
