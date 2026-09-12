> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpath/init(roundedrect:cornerwidth:cornerheight:transform:)](https://developer.apple.com/documentation/coregraphics/cgpath/init(roundedrect:cornerwidth:cornerheight:transform:))

# init(roundedRect:cornerWidth:cornerHeight:transform:) (Swift)

**Framework:** Core Graphics  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Create an immutable path of a rounded rectangle.

## Declaration

```swift
init(roundedRect rect: CGRect, cornerWidth: CGFloat, cornerHeight: CGFloat, transform: UnsafePointer<CGAffineTransform>?)
```

## Parameters

- `rect`: The rectangle to add.
- `cornerWidth`: The width of the rounded corner sections.
- `cornerHeight`: The height of the rounded corner sections.
- `transform`: A pointer to an affine transformation matrix, or `NULL` if no transformation is needed. If specified, Core Graphics applies the transformation to the rectangle before it is added to the path.

<a id="return-value"></a>

## Return Value

A new, immutable path. You are responsible for releasing this object.

<a id="Discussion"></a>

## Discussion

This is a convenience function that creates a path of an rounded rectangle. Using this convenience function is more efficient than creating a mutable path and adding an rectangle to it.

Each corner of the rounded rectangle is one-quarter of an ellipse with axes equal to the `cornerWidth` and `cornerHeight` parameters. The rounded rectangle forms a complete subpath and is oriented in the clockwise direction.

## See Also

### Creating Graphics Paths

- [init(rect:transform:)](init%28rect_transform_%29.md): Create an immutable path of a rectangle.
- [init(ellipseIn:transform:)](init%28ellipsein_transform_%29.md): Create an immutable path of an ellipse.

# CGPathCreateWithRoundedRect (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Create an immutable path of a rounded rectangle.

## Declaration

```objectivec
extern CGPathRefCGPathCreateWithRoundedRect(CGRect rect, CGFloat cornerWidth, CGFloat cornerHeight, const CGAffineTransform *transform);
```

## Parameters

- `rect`: The rectangle to add.
- `cornerWidth`: The width of the rounded corner sections.
- `cornerHeight`: The height of the rounded corner sections.
- `transform`: A pointer to an affine transformation matrix, or `NULL` if no transformation is needed. If specified, Core Graphics applies the transformation to the rectangle before it is added to the path.

<a id="return-value"></a>

## Return Value

A new, immutable path. You are responsible for releasing this object.

<a id="Discussion"></a>

## Discussion

This is a convenience function that creates a path of an rounded rectangle. Using this convenience function is more efficient than creating a mutable path and adding an rectangle to it.

Each corner of the rounded rectangle is one-quarter of an ellipse with axes equal to the `cornerWidth` and `cornerHeight` parameters. The rounded rectangle forms a complete subpath and is oriented in the clockwise direction.

## See Also

### Creating Graphics Paths

- [CGPathCreateWithRect](init%28rect_transform_%29.md): Create an immutable path of a rectangle.
- [CGPathCreateWithEllipseInRect](init%28ellipsein_transform_%29.md): Create an immutable path of an ellipse.
