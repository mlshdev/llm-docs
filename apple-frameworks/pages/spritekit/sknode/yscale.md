> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode/yscale](https://developer.apple.com/documentation/spritekit/sknode/yscale)

# yScale (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A scaling factor that multiplies the height of a node and its children.

## Declaration

```swift
var yScale: CGFloat { get set }
```

## Mentioned In

- [Getting Started with a Camera](../getting-started-with-a-camera.md)
- [Resizing a Sprite in Nine Parts](../resizing-a-sprite-in-nine-parts.md)
- [About Node Property Propagation](../about-node-property-propagation.md)
- [Getting Started with Nodes](../getting-started-with-nodes.md)

<a id="Discussion"></a>

## Discussion

The [yScale](yscale.md) property scales the height of the node and all of its descendants. The scale value affects how a node’s frame is calculated, its hit test area, how it is drawn, and other similar characteristics. The default value is `1.0`.

## See Also

### Scaling and Rotating

- [zRotation](zrotation.md): The Euler rotation about the z axis (in radians).
- [setScale(\_:)](setscale%28__%29.md): Sets the [xScale](xscale.md) and [yScale](yscale.md) properties of the node.
- [xScale](xscale.md): A scaling factor that multiplies the width of a node and its children.

# yScale (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A scaling factor that multiplies the height of a node and its children.

## Declaration

```objectivec
@property (nonatomic) CGFloat yScale;
```

## Mentioned In

- [Getting Started with a Camera](../getting-started-with-a-camera.md)
- [Resizing a Sprite in Nine Parts](../resizing-a-sprite-in-nine-parts.md)
- [About Node Property Propagation](../about-node-property-propagation.md)
- [Getting Started with Nodes](../getting-started-with-nodes.md)

<a id="Discussion"></a>

## Discussion

The [yScale](yscale.md) property scales the height of the node and all of its descendants. The scale value affects how a node’s frame is calculated, its hit test area, how it is drawn, and other similar characteristics. The default value is `1.0`.

## See Also

### Scaling and Rotating

- [zRotation](zrotation.md): The Euler rotation about the z axis (in radians).
- [setScale:](setscale%28__%29.md): Sets the [xScale](xscale.md) and [yScale](yscale.md) properties of the node.
- [xScale](xscale.md): A scaling factor that multiplies the width of a node and its children.
