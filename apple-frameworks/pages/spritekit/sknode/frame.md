> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode/frame](https://developer.apple.com/documentation/spritekit/sknode/frame)

# frame (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A rectangle in the parent’s coordinate system that contains the node’s content, ignoring the node’s children.

## Declaration

```swift
var frame: CGRect { get }
```

## Mentioned In

- [Getting Started with Nodes](../getting-started-with-nodes.md)
- [Getting Started with Sprite Nodes](../getting-started-with-sprite-nodes.md)
- [Positioning a Scene’s Origin Within its View](../positioning-a-scene-s-origin-within-its-view.md)
- [Resizing a Sprite in Nine Parts](../resizing-a-sprite-in-nine-parts.md)

<a id="Discussion"></a>

## Discussion

The frame is the smallest rectangle that contains the node’s content, taking into account the node’s [xScale](xscale.md), [yScale](yscale.md), and [zRotation](zrotation.md) properties.

Since `SKNode` does not draw content of its own, its frame size is arbitrary; it’s the visual subclasses of `SKNode` that do draw that define the frame’s size with a meaningful value that encloses its visual content.

To get a rect that encloses all the child nodes of an `SKNode` parent object, use [calculateAccumulatedFrame()](calculateaccumulatedframe%28%29.md).

## See Also

### Querying the Content Size

- [calculateAccumulatedFrame()](calculateaccumulatedframe%28%29.md): Returns a rectangle in the parent’s coordinate system that contains the position and size of itself and all child nodes.

# frame (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A rectangle in the parent’s coordinate system that contains the node’s content, ignoring the node’s children.

## Declaration

```objectivec
@property (nonatomic, readonly) CGRect frame;
```

## Mentioned In

- [Getting Started with Nodes](../getting-started-with-nodes.md)
- [Getting Started with Sprite Nodes](../getting-started-with-sprite-nodes.md)
- [Positioning a Scene’s Origin Within its View](../positioning-a-scene-s-origin-within-its-view.md)
- [Resizing a Sprite in Nine Parts](../resizing-a-sprite-in-nine-parts.md)

<a id="Discussion"></a>

## Discussion

The frame is the smallest rectangle that contains the node’s content, taking into account the node’s [xScale](xscale.md), [yScale](yscale.md), and [zRotation](zrotation.md) properties.

Since `SKNode` does not draw content of its own, its frame size is arbitrary; it’s the visual subclasses of `SKNode` that do draw that define the frame’s size with a meaningful value that encloses its visual content.

To get a rect that encloses all the child nodes of an `SKNode` parent object, use [calculateAccumulatedFrame](calculateaccumulatedframe%28%29.md).

## See Also

### Querying the Content Size

- [calculateAccumulatedFrame](calculateaccumulatedframe%28%29.md): Returns a rectangle in the parent’s coordinate system that contains the position and size of itself and all child nodes.
