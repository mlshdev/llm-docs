> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgaffinetransformmaketranslation(_:_:)](https://developer.apple.com/documentation/coregraphics/cgaffinetransformmaketranslation(_:_:))

# CGAffineTransformMakeTranslation(\_:\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns an affine transformation matrix constructed from translation values you provide.

## Declaration

```swift
func CGAffineTransformMakeTranslation(_ tx: CGFloat, _ ty: CGFloat) -> CGAffineTransform
```

## Parameters

- `tx`: The value by which to move the x-axis of the coordinate system.
- `ty`: The value by which to move the y-axis of the coordinate system.

<a id="return-value"></a>

## Return Value

A new affine transform matrix.

<a id="Discussion"></a>

## Discussion

This function creates a `CGAffineTransform` structure. which you can use (and reuse, if you want) to move a coordinate system. The matrix takes the following form:

![A 3 by 3 matrix for translation.](https://developer.apple.com/images/com.apple.coregraphics/media-1966750@2x.png)

Because the third column is always `(0,0,1)`, the `CGAffineTransform` data structure returned by this function contains values for only the first two columns.

These are the resulting equations used to apply the translation to a point (x,y):

![Translation equations.](https://developer.apple.com/images/com.apple.coregraphics/media-1966756@2x.png)

If you want only to move the location where an object is drawn, it is not necessary to construct an affine transform to do so. The most direct way to move your drawing is by calling the function [translateBy(x:y:)](cgcontext/translateby%28x_y_%29.md).

## See Also

### Creating an Affine Transformation Matrix

- [CGAffineTransformMake(\_:\_:\_:\_:\_:\_:)](cgaffinetransformmake%28____________%29.md): Returns an affine transformation matrix constructed from values you provide.
- [CGAffineTransformMakeRotation(\_:)](cgaffinetransformmakerotation%28__%29.md): Returns an affine transformation matrix constructed from a rotation value you provide.
- [CGAffineTransformMakeScale(\_:\_:)](cgaffinetransformmakescale%28____%29.md): Returns an affine transformation matrix constructed from scaling values you provide.

# CGAffineTransformMakeTranslation (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns an affine transformation matrix constructed from translation values you provide.

## Declaration

```objectivec
extern CGAffineTransform CGAffineTransformMakeTranslation(CGFloat tx, CGFloat ty);
```

## Parameters

- `tx`: The value by which to move the x-axis of the coordinate system.
- `ty`: The value by which to move the y-axis of the coordinate system.

<a id="return-value"></a>

## Return Value

A new affine transform matrix.

<a id="Discussion"></a>

## Discussion

This function creates a `CGAffineTransform` structure. which you can use (and reuse, if you want) to move a coordinate system. The matrix takes the following form:

![A 3 by 3 matrix for translation.](https://developer.apple.com/images/com.apple.coregraphics/media-1966750@2x.png)

Because the third column is always `(0,0,1)`, the `CGAffineTransform` data structure returned by this function contains values for only the first two columns.

These are the resulting equations used to apply the translation to a point (x,y):

![Translation equations.](https://developer.apple.com/images/com.apple.coregraphics/media-1966756@2x.png)

If you want only to move the location where an object is drawn, it is not necessary to construct an affine transform to do so. The most direct way to move your drawing is by calling the function [CGContextTranslateCTM](cgcontext/translateby%28x_y_%29.md).

## See Also

### Creating an Affine Transformation Matrix

- [CGAffineTransformMake](cgaffinetransformmake%28____________%29.md): Returns an affine transformation matrix constructed from values you provide.
- [CGAffineTransformMakeRotation](cgaffinetransformmakerotation%28__%29.md): Returns an affine transformation matrix constructed from a rotation value you provide.
- [CGAffineTransformMakeScale](cgaffinetransformmakescale%28____%29.md): Returns an affine transformation matrix constructed from scaling values you provide.
