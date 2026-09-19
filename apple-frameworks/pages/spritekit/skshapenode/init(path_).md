> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spritekit/skshapenode/init(path:)

# init(path:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a shape node from a Core Graphics path.

## Declaration

```swift
convenience init(path: CGPath)
```

## Parameters

- `path`: The Core Graphics path to use. The path is relative to the node’s origin.

<a id="return-value"></a>

## Return Value

A new shape node.

## See Also

### Creating a Shape from a Path

- [init(path:centered:)](init%28path_centered_%29.md): Creates a shape node from a Core Graphics path, centered around its position.
- [path](path.md): The path that defines the shape.

# shapeNodeWithPath: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a shape node from a Core Graphics path.

## Declaration

```objectivec
+ (instancetype) shapeNodeWithPath:(CGPathRef) path;
```

## Parameters

- `path`: The Core Graphics path to use. The path is relative to the node’s origin.

<a id="return-value"></a>

## Return Value

A new shape node.

## See Also

### Creating a Shape from a Path

- [shapeNodeWithPath:centered:](init%28path_centered_%29.md): Creates a shape node from a Core Graphics path, centered around its position.
- [path](path.md): The path that defines the shape.
