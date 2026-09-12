> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgaffinetransformmakerotation(_:)](https://developer.apple.com/documentation/coregraphics/cgaffinetransformmakerotation(_:))

# CGAffineTransformMakeRotation(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns an affine transformation matrix constructed from a rotation value you provide.

## Declaration

```swift
func CGAffineTransformMakeRotation(_ angle: CGFloat) -> CGAffineTransform
```

## Parameters

- `angle`: The angle, in radians, by which this matrix rotates the coordinate system axes. In iOS, a positive value specifies counterclockwise rotation and a negative value specifies clockwise rotation. In macOS, a positive value specifies clockwise rotation and a negative value specifies counterclockwise rotation.

<a id="return-value"></a>

## Return Value

A new affine transformation matrix.

<a id="Discussion"></a>

## Discussion

This function creates a `CGAffineTransform` structure, which you can use (and reuse, if you want) to rotate a coordinate system. The matrix takes the following form:

![A 3 by 3 matrix.](https://developer.apple.com/images/com.apple.coregraphics/media-1966725@2x.png)

The actual direction of rotation is dependent on the coordinate system orientation of the target platform, which is different in iOS and macOS. Because the third column is always `(0,0,1)`, the `CGAffineTransform` data structure returned by this function contains values for only the first two columns.

These are the resulting equations used to apply the rotation to a point (x, y):

![Rotation equations.](https://developer.apple.com/images/com.apple.coregraphics/media-1966730@2x.png)

If you want only to rotate an object to be drawn, it is not necessary to construct an affine transform to do so. The most direct way to rotate your drawing is by calling the function [rotate(by:)](cgcontext/rotate%28by_%29.md).

## See Also

### Creating an Affine Transformation Matrix

- [CGAffineTransformMake(\_:\_:\_:\_:\_:\_:)](cgaffinetransformmake%28____________%29.md): Returns an affine transformation matrix constructed from values you provide.
- [CGAffineTransformMakeScale(\_:\_:)](cgaffinetransformmakescale%28____%29.md): Returns an affine transformation matrix constructed from scaling values you provide.
- [CGAffineTransformMakeTranslation(\_:\_:)](cgaffinetransformmaketranslation%28____%29.md): Returns an affine transformation matrix constructed from translation values you provide.

# CGAffineTransformMakeRotation (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns an affine transformation matrix constructed from a rotation value you provide.

## Declaration

```objectivec
extern CGAffineTransform CGAffineTransformMakeRotation(CGFloat angle);
```

## Parameters

- `angle`: The angle, in radians, by which this matrix rotates the coordinate system axes. In iOS, a positive value specifies counterclockwise rotation and a negative value specifies clockwise rotation. In macOS, a positive value specifies clockwise rotation and a negative value specifies counterclockwise rotation.

<a id="return-value"></a>

## Return Value

A new affine transformation matrix.

<a id="Discussion"></a>

## Discussion

This function creates a `CGAffineTransform` structure, which you can use (and reuse, if you want) to rotate a coordinate system. The matrix takes the following form:

![A 3 by 3 matrix.](https://developer.apple.com/images/com.apple.coregraphics/media-1966725@2x.png)

The actual direction of rotation is dependent on the coordinate system orientation of the target platform, which is different in iOS and macOS. Because the third column is always `(0,0,1)`, the `CGAffineTransform` data structure returned by this function contains values for only the first two columns.

These are the resulting equations used to apply the rotation to a point (x, y):

![Rotation equations.](https://developer.apple.com/images/com.apple.coregraphics/media-1966730@2x.png)

If you want only to rotate an object to be drawn, it is not necessary to construct an affine transform to do so. The most direct way to rotate your drawing is by calling the function [CGContextRotateCTM](cgcontext/rotate%28by_%29.md).

## See Also

### Creating an Affine Transformation Matrix

- [CGAffineTransformMake](cgaffinetransformmake%28____________%29.md): Returns an affine transformation matrix constructed from values you provide.
- [CGAffineTransformMakeScale](cgaffinetransformmakescale%28____%29.md): Returns an affine transformation matrix constructed from scaling values you provide.
- [CGAffineTransformMakeTranslation](cgaffinetransformmaketranslation%28____%29.md): Returns an affine transformation matrix constructed from translation values you provide.
