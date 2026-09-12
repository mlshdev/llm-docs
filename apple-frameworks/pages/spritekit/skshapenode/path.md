> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skshapenode/path](https://developer.apple.com/documentation/spritekit/skshapenode/path)

# path (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The path that defines the shape.

## Declaration

```swift
var path: CGPath? { get set }
```

## Mentioned In

- [Getting Started with Shape Nodes](../getting-started-with-shape-nodes.md)

<a id="Discussion"></a>

## Discussion

The path is defined in the node’s coordinate space.

## See Also

### Creating a Shape from a Path

- [init(path:)](init%28path_%29.md): Creates a shape node from a Core Graphics path.
- [init(path:centered:)](init%28path_centered_%29.md): Creates a shape node from a Core Graphics path, centered around its position.

# path (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The path that defines the shape.

## Declaration

```objectivec
@property (nonatomic, nullable) CGPathRef path;
```

## Mentioned In

- [Getting Started with Shape Nodes](../getting-started-with-shape-nodes.md)

<a id="Discussion"></a>

## Discussion

The path is defined in the node’s coordinate space.

## See Also

### Creating a Shape from a Path

- [shapeNodeWithPath:](init%28path_%29.md): Creates a shape node from a Core Graphics path.
- [shapeNodeWithPath:centered:](init%28path_centered_%29.md): Creates a shape node from a Core Graphics path, centered around its position.
