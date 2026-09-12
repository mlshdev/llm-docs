> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgaffinetransformmake(_:_:_:_:_:_:)](https://developer.apple.com/documentation/coregraphics/cgaffinetransformmake(_:_:_:_:_:_:))

# CGAffineTransformMake(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns an affine transformation matrix constructed from values you provide.

## Declaration

```swift
func CGAffineTransformMake(_ a: CGFloat, _ b: CGFloat, _ c: CGFloat, _ d: CGFloat, _ tx: CGFloat, _ ty: CGFloat) -> CGAffineTransform
```

## Parameters

- `a`: The value at position \[1,1\] in the matrix.
- `b`: The value at position \[1,2\] in the matrix.
- `c`: The value at position \[2,1\] in the matrix.
- `d`: The value at position \[2,2\] in the matrix.
- `tx`: The value at position \[3,1\] in the matrix.
- `ty`: The value at position \[3,2\] in the matrix.

<a id="return-value"></a>

## Return Value

A new affine transform matrix constructed from the values you specify.

<a id="Discussion"></a>

## Discussion

This function creates a `CGAffineTransform` structure that represents a new affine transformation matrix, which you can use (and reuse, if you want) to transform a coordinate system. The matrix takes the following form:

![A 3 by 3 matrix.](https://developer.apple.com/images/com.apple.coregraphics/media-1966718@2x.png)

Because the third column is always `(0,0,1)`, the `CGAffineTransform` data structure returned by this function contains values for only the first two columns.

If you want only to transform an object to be drawn, it is not necessary to construct an affine transform to do so. The most direct way to transform your drawing is by calling the appropriate `CGContext` function to adjust the current transformation matrix. For a list of functions, see [CGContext](cgcontext.md).

## See Also

### Creating an Affine Transformation Matrix

- [CGAffineTransformMakeRotation(\_:)](cgaffinetransformmakerotation%28__%29.md): Returns an affine transformation matrix constructed from a rotation value you provide.
- [CGAffineTransformMakeScale(\_:\_:)](cgaffinetransformmakescale%28____%29.md): Returns an affine transformation matrix constructed from scaling values you provide.
- [CGAffineTransformMakeTranslation(\_:\_:)](cgaffinetransformmaketranslation%28____%29.md): Returns an affine transformation matrix constructed from translation values you provide.

# CGAffineTransformMake (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns an affine transformation matrix constructed from values you provide.

## Declaration

```objectivec
extern CGAffineTransform CGAffineTransformMake(CGFloat a, CGFloat b, CGFloat c, CGFloat d, CGFloat tx, CGFloat ty);
```

## Parameters

- `a`: The value at position \[1,1\] in the matrix.
- `b`: The value at position \[1,2\] in the matrix.
- `c`: The value at position \[2,1\] in the matrix.
- `d`: The value at position \[2,2\] in the matrix.
- `tx`: The value at position \[3,1\] in the matrix.
- `ty`: The value at position \[3,2\] in the matrix.

<a id="return-value"></a>

## Return Value

A new affine transform matrix constructed from the values you specify.

<a id="Discussion"></a>

## Discussion

This function creates a `CGAffineTransform` structure that represents a new affine transformation matrix, which you can use (and reuse, if you want) to transform a coordinate system. The matrix takes the following form:

![A 3 by 3 matrix.](https://developer.apple.com/images/com.apple.coregraphics/media-1966718@2x.png)

Because the third column is always `(0,0,1)`, the `CGAffineTransform` data structure returned by this function contains values for only the first two columns.

If you want only to transform an object to be drawn, it is not necessary to construct an affine transform to do so. The most direct way to transform your drawing is by calling the appropriate `CGContext` function to adjust the current transformation matrix. For a list of functions, see [CGContextRef](cgcontext.md).

## See Also

### Creating an Affine Transformation Matrix

- [CGAffineTransformMakeRotation](cgaffinetransformmakerotation%28__%29.md): Returns an affine transformation matrix constructed from a rotation value you provide.
- [CGAffineTransformMakeScale](cgaffinetransformmakescale%28____%29.md): Returns an affine transformation matrix constructed from scaling values you provide.
- [CGAffineTransformMakeTranslation](cgaffinetransformmaketranslation%28____%29.md): Returns an affine transformation matrix constructed from translation values you provide.
