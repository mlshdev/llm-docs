> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpath/init(rect:transform:)](https://developer.apple.com/documentation/coregraphics/cgpath/init(rect:transform:))

# init(rect:transform:) (Swift)

**Framework:** Core Graphics  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Create an immutable path of a rectangle.

## Declaration

```swift
init(rect: CGRect, transform: UnsafePointer<CGAffineTransform>?)
```

## Parameters

- `rect`: The rectangle to add.
- `transform`: A pointer to an affine transformation matrix, or `NULL` if no transformation is needed. If specified, Core Graphics applies the transformation to the rectangle before it is added to the path.

<a id="return-value"></a>

## Return Value

A new, immutable path. You are responsible for releasing this object.

<a id="Discussion"></a>

## Discussion

This is a convenience function that creates a path of an rectangle. Using this convenience function is more efficient than creating a mutable path and adding an rectangle to it.

Calling this function is equivalent to using [CGRectGetMinX(\_:)](../cgrectgetminx%28__%29.md) and related functions to find the corners of the rectangle, then using the [CGPathMoveToPoint](https://developer.apple.com/documentation/coregraphics/cgpathmovetopoint), [CGPathAddLineToPoint](https://developer.apple.com/documentation/coregraphics/cgpathaddlinetopoint), and [closeSubpath()](../cgmutablepath/closesubpath%28%29.md) functions to draw the rectangle.

## See Also

### Creating Graphics Paths

- [init(ellipseIn:transform:)](init%28ellipsein_transform_%29.md): Create an immutable path of an ellipse.
- [init(roundedRect:cornerWidth:cornerHeight:transform:)](init%28roundedrect_cornerwidth_cornerheight_transform_%29.md): Create an immutable path of a rounded rectangle.

# CGPathCreateWithRect (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Create an immutable path of a rectangle.

## Declaration

```objectivec
extern CGPathRefCGPathCreateWithRect(CGRect rect, const CGAffineTransform *transform);
```

## Parameters

- `rect`: The rectangle to add.
- `transform`: A pointer to an affine transformation matrix, or `NULL` if no transformation is needed. If specified, Core Graphics applies the transformation to the rectangle before it is added to the path.

<a id="return-value"></a>

## Return Value

A new, immutable path. You are responsible for releasing this object.

<a id="Discussion"></a>

## Discussion

This is a convenience function that creates a path of an rectangle. Using this convenience function is more efficient than creating a mutable path and adding an rectangle to it.

Calling this function is equivalent to using [CGRectGetMinX](../cgrectgetminx%28__%29.md) and related functions to find the corners of the rectangle, then using the [CGPathMoveToPoint](https://developer.apple.com/documentation/coregraphics/cgpathmovetopoint), [CGPathAddLineToPoint](https://developer.apple.com/documentation/coregraphics/cgpathaddlinetopoint), and [CGPathCloseSubpath](../cgmutablepath/closesubpath%28%29.md) functions to draw the rectangle.

## See Also

### Creating Graphics Paths

- [CGPathCreateWithEllipseInRect](init%28ellipsein_transform_%29.md): Create an immutable path of an ellipse.
- [CGPathCreateWithRoundedRect](init%28roundedrect_cornerwidth_cornerheight_transform_%29.md): Create an immutable path of a rounded rectangle.
