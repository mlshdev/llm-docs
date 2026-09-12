> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skshapenode/init(rect:)](https://developer.apple.com/documentation/spritekit/skshapenode/init(rect:))

# init(rect:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a shape node with a rectangular path.

## Declaration

```swift
convenience init(rect: CGRect)
```

## Parameters

- `rect`: A rectangle, relative to the node’s origin.

<a id="return-value"></a>

## Return Value

A new shape node.

## See Also

### Creating a Shape from a Rectangle

- [init(rectOf:)](init%28rectof_%29.md): Creates a shape node with a rectangular path centered on the node’s origin.
- [init(rect:cornerRadius:)](init%28rect_cornerradius_%29.md): Creates a shape with a rectangular path that has rounded corners.
- [init(rectOf:cornerRadius:)](init%28rectof_cornerradius_%29.md): Creates a shape with a rectangular path that has rounded corners centered on the node’s position.

# shapeNodeWithRect: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a shape node with a rectangular path.

## Declaration

```objectivec
+ (instancetype) shapeNodeWithRect:(CGRect) rect;
```

## Parameters

- `rect`: A rectangle, relative to the node’s origin.

<a id="return-value"></a>

## Return Value

A new shape node.

## See Also

### Creating a Shape from a Rectangle

- [shapeNodeWithRectOfSize:](init%28rectof_%29.md): Creates a shape node with a rectangular path centered on the node’s origin.
- [shapeNodeWithRect:cornerRadius:](init%28rect_cornerradius_%29.md): Creates a shape with a rectangular path that has rounded corners.
- [shapeNodeWithRectOfSize:cornerRadius:](init%28rectof_cornerradius_%29.md): Creates a shape with a rectangular path that has rounded corners centered on the node’s position.
