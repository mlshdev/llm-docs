> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skshapenode/init(rectof:cornerradius:)](https://developer.apple.com/documentation/spritekit/skshapenode/init(rectof:cornerradius:))

# init(rectOf:cornerRadius:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a shape with a rectangular path that has rounded corners centered on the node’s position.

## Declaration

```swift
convenience init(rectOf size: CGSize, cornerRadius: CGFloat)
```

## Parameters

- `size`: The size of the rectangle.
- `cornerRadius`: The radius of the rounded corners. The radius should not be a negative number. The value should be no larger than half of the rectangle’s width or height, whichever is smaller.

<a id="return-value"></a>

## Return Value

A new shape node.

## See Also

### Creating a Shape from a Rectangle

- [init(rect:)](init%28rect_%29.md): Creates a shape node with a rectangular path.
- [init(rectOf:)](init%28rectof_%29.md): Creates a shape node with a rectangular path centered on the node’s origin.
- [init(rect:cornerRadius:)](init%28rect_cornerradius_%29.md): Creates a shape with a rectangular path that has rounded corners.

# shapeNodeWithRectOfSize:cornerRadius: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a shape with a rectangular path that has rounded corners centered on the node’s position.

## Declaration

```objectivec
+ (instancetype) shapeNodeWithRectOfSize:(CGSize) size cornerRadius:(CGFloat) cornerRadius;
```

## Parameters

- `size`: The size of the rectangle.
- `cornerRadius`: The radius of the rounded corners. The radius should not be a negative number. The value should be no larger than half of the rectangle’s width or height, whichever is smaller.

<a id="return-value"></a>

## Return Value

A new shape node.

## See Also

### Creating a Shape from a Rectangle

- [shapeNodeWithRect:](init%28rect_%29.md): Creates a shape node with a rectangular path.
- [shapeNodeWithRectOfSize:](init%28rectof_%29.md): Creates a shape node with a rectangular path centered on the node’s origin.
- [shapeNodeWithRect:cornerRadius:](init%28rect_cornerradius_%29.md): Creates a shape with a rectangular path that has rounded corners.
