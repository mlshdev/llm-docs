> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skshapenode/init(ellipseof:)](https://developer.apple.com/documentation/spritekit/skshapenode/init(ellipseof:))

# init(ellipseOf:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a shape node with an elliptical path centered on the node’s origin.

## Declaration

```swift
convenience init(ellipseOf size: CGSize)
```

## Parameters

- `size`: The height and width of the ellipse.

<a id="return-value"></a>

## Return Value

A new shape node.

## See Also

### Creating an Ellipse Shape

- [init(ellipseIn:)](init%28ellipsein_%29.md): Creates a shape node with an elliptical path that fills the specified rectangle.

# shapeNodeWithEllipseOfSize: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a shape node with an elliptical path centered on the node’s origin.

## Declaration

```objectivec
+ (instancetype) shapeNodeWithEllipseOfSize:(CGSize) size;
```

## Parameters

- `size`: The height and width of the ellipse.

<a id="return-value"></a>

## Return Value

A new shape node.

## See Also

### Creating an Ellipse Shape

- [shapeNodeWithEllipseInRect:](init%28ellipsein_%29.md): Creates a shape node with an elliptical path that fills the specified rectangle.
