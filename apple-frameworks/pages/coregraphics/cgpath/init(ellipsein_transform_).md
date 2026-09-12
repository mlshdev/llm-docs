> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpath/init(ellipsein:transform:)](https://developer.apple.com/documentation/coregraphics/cgpath/init(ellipsein:transform:))

# init(ellipseIn:transform:) (Swift)

**Framework:** Core Graphics  
**Kind:** Initializer  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Create an immutable path of an ellipse.

## Declaration

```swift
init(ellipseIn rect: CGRect, transform: UnsafePointer<CGAffineTransform>?)
```

## Parameters

- `rect`: The rectangle that bounds the ellipse.
- `transform`: A pointer to an affine transformation matrix, or `NULL` if no transformation is needed. If specified, Core Graphics applies the transformation to the ellipse before it is added to the path.

<a id="return-value"></a>

## Return Value

A new, immutable path. You are responsible for releasing this object.

<a id="Discussion"></a>

## Discussion

This is a convenience function that creates a path of an ellipse. Using this convenience function is more efficient than creating a mutable path and adding an ellipse to it.

The ellipse is approximated by a sequence of Bézier curves. Its center is the midpoint of the rectangle defined by the `rect` parameter. If the rectangle is square, then the ellipse is circular with a radius equal to one-half the width (or height) of the rectangle. If the `rect` parameter specifies a rectangular shape, then the major and minor axes of the ellipse are defined by the width and height of the rectangle.

The ellipse forms a complete subpath of the path—that is, the ellipse drawing starts with a move-to operation and ends with a close-subpath operation, with all moves oriented in the clockwise direction. If you supply an affine transform, then the constructed Bézier curves that define the ellipse are transformed before they are added to the path.

## See Also

### Creating Graphics Paths

- [init(rect:transform:)](init%28rect_transform_%29.md): Create an immutable path of a rectangle.
- [init(roundedRect:cornerWidth:cornerHeight:transform:)](init%28roundedrect_cornerwidth_cornerheight_transform_%29.md): Create an immutable path of a rounded rectangle.

# CGPathCreateWithEllipseInRect (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Create an immutable path of an ellipse.

## Declaration

```objectivec
extern CGPathRefCGPathCreateWithEllipseInRect(CGRect rect, const CGAffineTransform *transform);
```

## Parameters

- `rect`: The rectangle that bounds the ellipse.
- `transform`: A pointer to an affine transformation matrix, or `NULL` if no transformation is needed. If specified, Core Graphics applies the transformation to the ellipse before it is added to the path.

<a id="return-value"></a>

## Return Value

A new, immutable path. You are responsible for releasing this object.

<a id="Discussion"></a>

## Discussion

This is a convenience function that creates a path of an ellipse. Using this convenience function is more efficient than creating a mutable path and adding an ellipse to it.

The ellipse is approximated by a sequence of Bézier curves. Its center is the midpoint of the rectangle defined by the `rect` parameter. If the rectangle is square, then the ellipse is circular with a radius equal to one-half the width (or height) of the rectangle. If the `rect` parameter specifies a rectangular shape, then the major and minor axes of the ellipse are defined by the width and height of the rectangle.

The ellipse forms a complete subpath of the path—that is, the ellipse drawing starts with a move-to operation and ends with a close-subpath operation, with all moves oriented in the clockwise direction. If you supply an affine transform, then the constructed Bézier curves that define the ellipse are transformed before they are added to the path.

## See Also

### Creating Graphics Paths

- [CGPathCreateWithRect](init%28rect_transform_%29.md): Create an immutable path of a rectangle.
- [CGPathCreateWithRoundedRect](init%28roundedrect_cornerwidth_cornerheight_transform_%29.md): Create an immutable path of a rounded rectangle.
