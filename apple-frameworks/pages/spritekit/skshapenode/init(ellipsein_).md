> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skshapenode/init(ellipsein:)](https://developer.apple.com/documentation/spritekit/skshapenode/init(ellipsein:))

# init(ellipseIn:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a shape node with an elliptical path that fills the specified rectangle.

## Declaration

```swift
convenience init(ellipseIn rect: CGRect)
```

## Parameters

- `rect`: A rectangle, relative to the node’s origin.

<a id="return-value"></a>

## Return Value

A new shape node.

## See Also

### Creating an Ellipse Shape

- [init(ellipseOf:)](init%28ellipseof_%29.md): Creates a shape node with an elliptical path centered on the node’s origin.

# shapeNodeWithEllipseInRect: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a shape node with an elliptical path that fills the specified rectangle.

## Declaration

```objectivec
+ (instancetype) shapeNodeWithEllipseInRect:(CGRect) rect;
```

## Parameters

- `rect`: A rectangle, relative to the node’s origin.

<a id="return-value"></a>

## Return Value

A new shape node.

## See Also

### Creating an Ellipse Shape

- [shapeNodeWithEllipseOfSize:](init%28ellipseof_%29.md): Creates a shape node with an elliptical path centered on the node’s origin.
