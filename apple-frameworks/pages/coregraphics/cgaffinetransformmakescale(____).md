> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgaffinetransformmakescale(_:_:)](https://developer.apple.com/documentation/coregraphics/cgaffinetransformmakescale(_:_:))

# CGAffineTransformMakeScale(\_:\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns an affine transformation matrix constructed from scaling values you provide.

## Declaration

```swift
func CGAffineTransformMakeScale(_ sx: CGFloat, _ sy: CGFloat) -> CGAffineTransform
```

## Parameters

- `sx`: The factor by which to scale the x-axis of the coordinate system.
- `sy`: The factor by which to scale the y-axis of the coordinate system.

<a id="return-value"></a>

## Return Value

A new affine transformation matrix.

<a id="Discussion"></a>

## Discussion

This function creates a `CGAffineTransform` structure, which you can use (and reuse, if you want) to scale a coordinate system. The matrix takes the following form:

![A 3 by 3 matrix used to scale.](https://developer.apple.com/images/com.apple.coregraphics/media-1966736@2x.png)

Because the third column is always `(0,0,1)`, the `CGAffineTransform` data structure returned by this function contains values for only the first two columns.

These are the resulting equations used to scale the coordinates of a point (x,y):

![Scaling equations.](https://developer.apple.com/images/com.apple.coregraphics/media-1966741@2x.png)

If you want only to scale an object to be drawn, it is not necessary to construct an affine transform to do so. The most direct way to scale your drawing is by calling the function [scaleBy(x:y:)](cgcontext/scaleby%28x_y_%29.md).

## See Also

### Creating an Affine Transformation Matrix

- [CGAffineTransformMake(\_:\_:\_:\_:\_:\_:)](cgaffinetransformmake%28____________%29.md): Returns an affine transformation matrix constructed from values you provide.
- [CGAffineTransformMakeRotation(\_:)](cgaffinetransformmakerotation%28__%29.md): Returns an affine transformation matrix constructed from a rotation value you provide.
- [CGAffineTransformMakeTranslation(\_:\_:)](cgaffinetransformmaketranslation%28____%29.md): Returns an affine transformation matrix constructed from translation values you provide.

# CGAffineTransformMakeScale (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns an affine transformation matrix constructed from scaling values you provide.

## Declaration

```objectivec
extern CGAffineTransform CGAffineTransformMakeScale(CGFloat sx, CGFloat sy);
```

## Parameters

- `sx`: The factor by which to scale the x-axis of the coordinate system.
- `sy`: The factor by which to scale the y-axis of the coordinate system.

<a id="return-value"></a>

## Return Value

A new affine transformation matrix.

<a id="Discussion"></a>

## Discussion

This function creates a `CGAffineTransform` structure, which you can use (and reuse, if you want) to scale a coordinate system. The matrix takes the following form:

![A 3 by 3 matrix used to scale.](https://developer.apple.com/images/com.apple.coregraphics/media-1966736@2x.png)

Because the third column is always `(0,0,1)`, the `CGAffineTransform` data structure returned by this function contains values for only the first two columns.

These are the resulting equations used to scale the coordinates of a point (x,y):

![Scaling equations.](https://developer.apple.com/images/com.apple.coregraphics/media-1966741@2x.png)

If you want only to scale an object to be drawn, it is not necessary to construct an affine transform to do so. The most direct way to scale your drawing is by calling the function [CGContextScaleCTM](cgcontext/scaleby%28x_y_%29.md).

## See Also

### Creating an Affine Transformation Matrix

- [CGAffineTransformMake](cgaffinetransformmake%28____________%29.md): Returns an affine transformation matrix constructed from values you provide.
- [CGAffineTransformMakeRotation](cgaffinetransformmakerotation%28__%29.md): Returns an affine transformation matrix constructed from a rotation value you provide.
- [CGAffineTransformMakeTranslation](cgaffinetransformmaketranslation%28____%29.md): Returns an affine transformation matrix constructed from translation values you provide.
