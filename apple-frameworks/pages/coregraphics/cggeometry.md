> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cggeometry](https://developer.apple.com/documentation/coregraphics/cggeometry)

# CGGeometry (Swift)

**Framework:** Core Graphics  
**Kind:** API Collection

Various structures and associated functions for 2D geometric primitives.

<a id="overview"></a>

## Overview

The data structure [CGPoint](../corefoundation/cgpoint.md) represents a point in a two-dimensional coordinate system. The data structure [CGRect](../corefoundation/cgrect.md) represents the location and dimensions of a rectangle. The data structure [CGSize](../corefoundation/cgsize.md) represents the dimensions of width and height.

A [CGPoint](../corefoundation/cgpoint.md), [CGRect](../corefoundation/cgrect.md), or [CGSize](../corefoundation/cgsize.md) structure does not explicitly define the unit of measure for its member quantities. A point’s x- and y-coordinates or a size’s width and height are unitless quantities—whether such measurements are treated as pixels, scale-factor-independent points, texture elements (texels), or some other unit depends on the API using the measurement, and on the context in which that API is used. For example, a [CGRect](../corefoundation/cgrect.md) structure specifying the frame of an [NSView](https://developer.apple.com/documentation/appkit/nsview) or [UIView](../uikit/uiview.md) object defines the view’s dimensions in points, not pixels. However, the effects of using a [CGPoint](../corefoundation/cgpoint.md) structure in a [CGContext](cgcontext.md) drawing operation depend on the scale factor associated with that context. Where not otherwise specified, you can assume that a [CGPoint](../corefoundation/cgpoint.md), [CGRect](../corefoundation/cgrect.md), or [CGSize](../corefoundation/cgsize.md) structure is defined in points, not pixels. (For details, see [Drawing and Printing Guide for iOS](https://developer.apple.com/library/archive/documentation/2DDrawing/Conceptual/DrawingPrintingiOS/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010156) or [High Resolution Guidelines for OS X](https://developer.apple.com/library/archive/documentation/GraphicsAnimation/Conceptual/HighResolutionOSX/Introduction/Introduction.html#//apple_ref/doc/uid/TP40012302).)

The height and width stored in a [CGRect](../corefoundation/cgrect.md) data structure can be negative. For example, a rectangle with an origin of `[0.0, 0.0]` and a size of `[10.0,10.0]`  is exactly equivalent to a rectangle with an origin of `[10.0, 10.0]` and a size of `[-10.0,-10.0]`. Your application can standardize a rectangle—that is, ensure that the height and width are stored as positive values—by calling the `CGRectStandardize` function. All functions described in this reference that take [CGRect](../corefoundation/cgrect.md) data structures as inputs implicitly standardize those rectangles before calculating their results. For this reason, your applications should avoid directly reading and writing the data stored in the [CGRect](../corefoundation/cgrect.md) data structure. Instead, use the functions described here to manipulate rectangles and to retrieve their characteristics.

## Topics

### Creating a Dictionary Representation from a Geometric Primitive

- [CGPointCreateDictionaryRepresentation(\_:)](cgpointcreatedictionaryrepresentation%28__%29.md): Returns a dictionary representation of the specified point.
- [CGSizeCreateDictionaryRepresentation(\_:)](cgsizecreatedictionaryrepresentation%28__%29.md): Returns a dictionary representation of the specified size.
- [CGRectCreateDictionaryRepresentation(\_:)](cgrectcreatedictionaryrepresentation%28__%29.md): Returns a dictionary representation of the provided rectangle.

### Creating a Geometric Primitive from a Dictionary Representation

- [CGPointMakeWithDictionaryRepresentation(\_:\_:)](cgpointmakewithdictionaryrepresentation%28____%29.md): Fills in a point using the contents of the specified dictionary.
- [CGSizeMakeWithDictionaryRepresentation(\_:\_:)](cgsizemakewithdictionaryrepresentation%28____%29.md): Fills in a size using the contents of the specified dictionary.
- [CGRectMakeWithDictionaryRepresentation(\_:\_:)](cgrectmakewithdictionaryrepresentation%28____%29.md): Fills in a rectangle using the contents of the specified dictionary.

### Creating a Geometric Primitive from Values

- [CGPointMake(\_:\_:)](cgpointmake%28____%29.md): Returns a point with the specified coordinates.
- [CGRectMake(\_:\_:\_:\_:)](cgrectmake%28________%29.md): Returns a rectangle with the specified coordinate and size values.
- [CGSizeMake(\_:\_:)](cgsizemake%28____%29.md): Returns a size with the specified dimension values.
- [CGVectorMake(\_:\_:)](cgvectormake%28____%29.md): Returns a vector with the specified dimension values.

### Modifying Rectangles

- [CGRectInset(\_:\_:\_:)](cgrectinset%28______%29.md): Returns a rectangle that is smaller or larger than the source rectangle, with the same center point.
- [CGRectIntegral(\_:)](cgrectintegral%28__%29.md): Returns the smallest rectangle that results from converting the source rectangle values to integers.
- [CGRectIntersection(\_:\_:)](cgrectintersection%28____%29.md): Returns the intersection of two rectangles.
- [CGRectOffset(\_:\_:\_:)](cgrectoffset%28______%29.md): Returns a rectangle with an origin that is offset from that of the source rectangle.
- [CGRectStandardize(\_:)](cgrectstandardize%28__%29.md): Returns a rectangle with a positive width and height.
- [CGRectUnion(\_:\_:)](cgrectunion%28____%29.md): Returns the smallest rectangle that contains the two source rectangles.

### Comparing Values

- [CGRectEqualToRect(\_:\_:)](cgrectequaltorect%28____%29.md): Deprecated. Returns whether two rectangles are equal in size and position.
- [CGRectIntersectsRect(\_:\_:)](cgrectintersectsrect%28____%29.md): Returns whether two rectangles intersect.

### Checking for Membership

- [CGRectContainsPoint(\_:\_:)](cgrectcontainspoint%28____%29.md): Returns whether a rectangle contains a specified point.
- [CGRectContainsRect(\_:\_:)](cgrectcontainsrect%28____%29.md): Returns whether the first rectangle contains the second rectangle.

### Getting Min, Mid, and Max Values

- [CGRectGetMinX(\_:)](cgrectgetminx%28__%29.md): Returns the smallest value for the x-coordinate of the rectangle.
- [CGRectGetMinY(\_:)](cgrectgetminy%28__%29.md): Returns the smallest value for the y-coordinate of the rectangle.
- [CGRectGetMidX(\_:)](cgrectgetmidx%28__%29.md): Returns the x- coordinate that establishes the center of a rectangle.
- [CGRectGetMidY(\_:)](cgrectgetmidy%28__%29.md): Returns the y-coordinate that establishes the center of the rectangle.
- [CGRectGetMaxX(\_:)](cgrectgetmaxx%28__%29.md): Returns the largest value of the x-coordinate for the rectangle.
- [CGRectGetMaxY(\_:)](cgrectgetmaxy%28__%29.md): Returns the largest value for the y-coordinate of the rectangle.

### Getting Height and Width

- [CGRectGetHeight(\_:)](cgrectgetheight%28__%29.md): Returns the height of a rectangle.
- [CGRectGetWidth(\_:)](cgrectgetwidth%28__%29.md): Returns the width of a rectangle.

### Checking Rectangle Characteristics

- [CGRectIsEmpty(\_:)](cgrectisempty%28__%29.md): Returns whether a rectangle has zero width or height, or is a null rectangle.
- [CGRectIsNull(\_:)](cgrectisnull%28__%29.md): Returns whether the rectangle is equal to the null rectangle.
- [CGRectIsInfinite(\_:)](cgrectisinfinite%28__%29.md): Returns whether a rectangle is infinite.

### Data Types

- [CGFloat](../corefoundation/cgfloat-swift.struct.md): The basic type for floating-point scalar values in Core Graphics and related frameworks.
- [CGPoint](../corefoundation/cgpoint.md)
- [CGRect](../corefoundation/cgrect.md)
- [CGSize](../corefoundation/cgsize.md): A structure that contains width and height values.
- [CGVector](../corefoundation/cgvector.md): A structure that contains a two-dimensional vector.

### Constants

- [CGRectInfinite](cgrectinfinite.md): A rectangle that has infinite extent.
- [Geometric Zeros](geometric-zeros.md): A zero point, zero rectangle, or zero size.
- [CGRectNull](cgrectnull.md): The null rectangle, representing an invalid value.
- [CGRectEdge](../corefoundation/cgrectedge.md)
- [CGFloat Informational Macros](cgfloat-informational-macros.md): Informational macros for the `CGFloat` type.

## See Also

### Related Documentation

- [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066)

# CGGeometry (Objective-C)

**Framework:** Core Graphics  
**Kind:** API Collection

Various structures and associated functions for 2D geometric primitives.

<a id="overview"></a>

## Overview

The data structure [CGPoint](../corefoundation/cgpoint.md) represents a point in a two-dimensional coordinate system. The data structure [CGRect](../corefoundation/cgrect.md) represents the location and dimensions of a rectangle. The data structure [CGSize](../corefoundation/cgsize.md) represents the dimensions of width and height.

A [CGPoint](../corefoundation/cgpoint.md), [CGRect](../corefoundation/cgrect.md), or [CGSize](../corefoundation/cgsize.md) structure does not explicitly define the unit of measure for its member quantities. A point’s x- and y-coordinates or a size’s width and height are unitless quantities—whether such measurements are treated as pixels, scale-factor-independent points, texture elements (texels), or some other unit depends on the API using the measurement, and on the context in which that API is used. For example, a [CGRect](../corefoundation/cgrect.md) structure specifying the frame of an [NSView](https://developer.apple.com/documentation/appkit/nsview) or [UIView](../uikit/uiview.md) object defines the view’s dimensions in points, not pixels. However, the effects of using a [CGPoint](../corefoundation/cgpoint.md) structure in a [CGContextRef](cgcontext.md) drawing operation depend on the scale factor associated with that context. Where not otherwise specified, you can assume that a [CGPoint](../corefoundation/cgpoint.md), [CGRect](../corefoundation/cgrect.md), or [CGSize](../corefoundation/cgsize.md) structure is defined in points, not pixels. (For details, see [Drawing and Printing Guide for iOS](https://developer.apple.com/library/archive/documentation/2DDrawing/Conceptual/DrawingPrintingiOS/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010156) or [High Resolution Guidelines for OS X](https://developer.apple.com/library/archive/documentation/GraphicsAnimation/Conceptual/HighResolutionOSX/Introduction/Introduction.html#//apple_ref/doc/uid/TP40012302).)

The height and width stored in a [CGRect](../corefoundation/cgrect.md) data structure can be negative. For example, a rectangle with an origin of `[0.0, 0.0]` and a size of `[10.0,10.0]`  is exactly equivalent to a rectangle with an origin of `[10.0, 10.0]` and a size of `[-10.0,-10.0]`. Your application can standardize a rectangle—that is, ensure that the height and width are stored as positive values—by calling the `CGRectStandardize` function. All functions described in this reference that take [CGRect](../corefoundation/cgrect.md) data structures as inputs implicitly standardize those rectangles before calculating their results. For this reason, your applications should avoid directly reading and writing the data stored in the [CGRect](../corefoundation/cgrect.md) data structure. Instead, use the functions described here to manipulate rectangles and to retrieve their characteristics.

## Topics

### Creating a Dictionary Representation from a Geometric Primitive

- [CGPointCreateDictionaryRepresentation](cgpointcreatedictionaryrepresentation%28__%29.md): Returns a dictionary representation of the specified point.
- [CGSizeCreateDictionaryRepresentation](cgsizecreatedictionaryrepresentation%28__%29.md): Returns a dictionary representation of the specified size.
- [CGRectCreateDictionaryRepresentation](cgrectcreatedictionaryrepresentation%28__%29.md): Returns a dictionary representation of the provided rectangle.

### Creating a Geometric Primitive from a Dictionary Representation

- [CGPointMakeWithDictionaryRepresentation](cgpointmakewithdictionaryrepresentation%28____%29.md): Fills in a point using the contents of the specified dictionary.
- [CGSizeMakeWithDictionaryRepresentation](cgsizemakewithdictionaryrepresentation%28____%29.md): Fills in a size using the contents of the specified dictionary.
- [CGRectMakeWithDictionaryRepresentation](cgrectmakewithdictionaryrepresentation%28____%29.md): Fills in a rectangle using the contents of the specified dictionary.

### Creating a Geometric Primitive from Values

- [CGPointMake](cgpointmake%28____%29.md): Returns a point with the specified coordinates.
- [CGRectMake](cgrectmake%28________%29.md): Returns a rectangle with the specified coordinate and size values.
- [CGSizeMake](cgsizemake%28____%29.md): Returns a size with the specified dimension values.
- [CGVectorMake](cgvectormake%28____%29.md): Returns a vector with the specified dimension values.

### Modifying Rectangles

- [CGRectDivide](cgrectdivide.md): Divides a source rectangle into two component rectangles.
- [CGRectInset](cgrectinset%28______%29.md): Returns a rectangle that is smaller or larger than the source rectangle, with the same center point.
- [CGRectIntegral](cgrectintegral%28__%29.md): Returns the smallest rectangle that results from converting the source rectangle values to integers.
- [CGRectIntersection](cgrectintersection%28____%29.md): Returns the intersection of two rectangles.
- [CGRectOffset](cgrectoffset%28______%29.md): Returns a rectangle with an origin that is offset from that of the source rectangle.
- [CGRectStandardize](cgrectstandardize%28__%29.md): Returns a rectangle with a positive width and height.
- [CGRectUnion](cgrectunion%28____%29.md): Returns the smallest rectangle that contains the two source rectangles.

### Comparing Values

- [CGPointEqualToPoint](cgpointequaltopoint-c.macro.md): Returns whether two points are equal.
- [CGSizeEqualToSize](cgsizeequaltosize-c.macro.md): Returns whether two sizes are equal.
- [CGRectEqualToRect](cgrectequaltorect%28____%29.md): Deprecated. Returns whether two rectangles are equal in size and position.
- [CGRectIntersectsRect](cgrectintersectsrect%28____%29.md): Returns whether two rectangles intersect.

### Checking for Membership

- [CGRectContainsPoint](cgrectcontainspoint%28____%29.md): Returns whether a rectangle contains a specified point.
- [CGRectContainsRect](cgrectcontainsrect%28____%29.md): Returns whether the first rectangle contains the second rectangle.

### Getting Min, Mid, and Max Values

- [CGRectGetMinX](cgrectgetminx%28__%29.md): Returns the smallest value for the x-coordinate of the rectangle.
- [CGRectGetMinY](cgrectgetminy%28__%29.md): Returns the smallest value for the y-coordinate of the rectangle.
- [CGRectGetMidX](cgrectgetmidx%28__%29.md): Returns the x- coordinate that establishes the center of a rectangle.
- [CGRectGetMidY](cgrectgetmidy%28__%29.md): Returns the y-coordinate that establishes the center of the rectangle.
- [CGRectGetMaxX](cgrectgetmaxx%28__%29.md): Returns the largest value of the x-coordinate for the rectangle.
- [CGRectGetMaxY](cgrectgetmaxy%28__%29.md): Returns the largest value for the y-coordinate of the rectangle.

### Getting Height and Width

- [CGRectGetHeight](cgrectgetheight%28__%29.md): Returns the height of a rectangle.
- [CGRectGetWidth](cgrectgetwidth%28__%29.md): Returns the width of a rectangle.

### Checking Rectangle Characteristics

- [CGRectIsEmpty](cgrectisempty%28__%29.md): Returns whether a rectangle has zero width or height, or is a null rectangle.
- [CGRectIsNull](cgrectisnull%28__%29.md): Returns whether the rectangle is equal to the null rectangle.
- [CGRectIsInfinite](cgrectisinfinite%28__%29.md): Returns whether a rectangle is infinite.

### Data Types

- [CGPoint](../corefoundation/cgpoint.md)
- [CGRect](../corefoundation/cgrect.md)
- [CGSize](../corefoundation/cgsize.md): A structure that contains width and height values.
- [CGVector](../corefoundation/cgvector.md): A structure that contains a two-dimensional vector.

### Constants

- [CGRectInfinite](cgrectinfinite.md): A rectangle that has infinite extent.
- [Geometric Zeros](geometric-zeros.md): A zero point, zero rectangle, or zero size.
- [CGRectNull](cgrectnull.md): The null rectangle, representing an invalid value.
- [CGRectEdge](../corefoundation/cgrectedge.md)
- [CGFloat Informational Macros](cgfloat-informational-macros.md): Informational macros for the `CGFloat` type.

## See Also

### Related Documentation

- [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066)

### Reference

- [CGAffineTransform](cgaffinetransform.md): An affine transformation matrix for use in drawing 2D graphics.
- [Core Graphics Structures](core-graphics-structures.md)
- [Core Graphics Enumerations](core-graphics-enumerations.md)
- [Core Graphics Constants](core-graphics-constants.md)
- [Core Graphics Functions](core-graphics-functions.md)
- [Core Graphics Data Types](core-graphics-data-types.md)
- [Core Graphics Macros](core-graphics-macros.md)
