> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skshapenode/init(path:centered:)](https://developer.apple.com/documentation/spritekit/skshapenode/init(path:centered:))

# init(path:centered:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a shape node from a Core Graphics path, centered around its position.

## Declaration

```swift
convenience init(path: CGPath, centered: Bool)
```

## Parameters

- `path`: The Core Graphics path to use.
- `centered`: If [true](https://developer.apple.com/documentation/swift/true), the path is translated so that the center of the path’s bounding box is at the node’s origin; otherwise the path is relative to the node’s origin.

<a id="return-value"></a>

## Return Value

A new shape node.

## See Also

### Creating a Shape from a Path

- [init(path:)](init%28path_%29.md): Creates a shape node from a Core Graphics path.
- [path](path.md): The path that defines the shape.

# shapeNodeWithPath:centered: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a shape node from a Core Graphics path, centered around its position.

## Declaration

```objectivec
+ (instancetype) shapeNodeWithPath:(CGPathRef) path centered:(BOOL) centered;
```

## Parameters

- `path`: The Core Graphics path to use.
- `centered`: If [true](https://developer.apple.com/documentation/swift/true), the path is translated so that the center of the path’s bounding box is at the node’s origin; otherwise the path is relative to the node’s origin.

<a id="return-value"></a>

## Return Value

A new shape node.

## See Also

### Creating a Shape from a Path

- [shapeNodeWithPath:](init%28path_%29.md): Creates a shape node from a Core Graphics path.
- [path](path.md): The path that defines the shape.
