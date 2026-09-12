> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skshapenode/init(rectof:)](https://developer.apple.com/documentation/spritekit/skshapenode/init(rectof:))

# init(rectOf:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a shape node with a rectangular path centered on the node’s origin.

## Declaration

```swift
convenience init(rectOf size: CGSize)
```

## Parameters

- `size`: The size of the rectangle.

<a id="return-value"></a>

## Return Value

A new shape node.

## See Also

### Creating a Shape from a Rectangle

- [init(rect:)](init%28rect_%29.md): Creates a shape node with a rectangular path.
- [init(rect:cornerRadius:)](init%28rect_cornerradius_%29.md): Creates a shape with a rectangular path that has rounded corners.
- [init(rectOf:cornerRadius:)](init%28rectof_cornerradius_%29.md): Creates a shape with a rectangular path that has rounded corners centered on the node’s position.

# shapeNodeWithRectOfSize: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a shape node with a rectangular path centered on the node’s origin.

## Declaration

```objectivec
+ (instancetype) shapeNodeWithRectOfSize:(CGSize) size;
```

## Parameters

- `size`: The size of the rectangle.

<a id="return-value"></a>

## Return Value

A new shape node.

## See Also

### Creating a Shape from a Rectangle

- [shapeNodeWithRect:](init%28rect_%29.md): Creates a shape node with a rectangular path.
- [shapeNodeWithRect:cornerRadius:](init%28rect_cornerradius_%29.md): Creates a shape with a rectangular path that has rounded corners.
- [shapeNodeWithRectOfSize:cornerRadius:](init%28rectof_cornerradius_%29.md): Creates a shape with a rectangular path that has rounded corners centered on the node’s position.
