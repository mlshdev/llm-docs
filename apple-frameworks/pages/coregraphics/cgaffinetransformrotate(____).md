> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgaffinetransformrotate(_:_:)](https://developer.apple.com/documentation/coregraphics/cgaffinetransformrotate(_:_:))

# CGAffineTransformRotate(\_:\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns an affine transformation matrix constructed by rotating an existing affine transform.

## Declaration

```swift
func CGAffineTransformRotate(_ t: CGAffineTransform, _ angle: CGFloat) -> CGAffineTransform
```

## Parameters

- `t`: An existing affine transform.
- `angle`: The angle, in radians, by which to rotate the affine transform. In iOS, a positive value specifies counterclockwise rotation and a negative value specifies clockwise rotation. In macOS, a positive value specifies clockwise rotation and a negative value specifies counterclockwise rotation.

<a id="return-value"></a>

## Return Value

A new affine transformation matrix.

<a id="Discussion"></a>

## Discussion

You use this function to create a new affine transformation matrix by adding a rotation value to an existing affine transform. The resulting structure represents a new affine transform, which you can use (and reuse, if you want) to rotate a coordinate system.

The actual direction of rotation is dependent on the coordinate system orientation of the target platform, which is different in iOS and macOS.

## See Also

### Modifying Affine Transformations

- [CGAffineTransformTranslate(\_:\_:\_:)](cgaffinetransformtranslate%28______%29.md): Returns an affine transformation matrix constructed by translating an existing affine transform.
- [CGAffineTransformScale(\_:\_:\_:)](cgaffinetransformscale%28______%29.md): Returns an affine transformation matrix constructed by scaling an existing affine transform.
- [CGAffineTransformInvert(\_:)](cgaffinetransforminvert%28__%29.md): Returns an affine transformation matrix constructed by inverting an existing affine transform.
- [CGAffineTransformConcat(\_:\_:)](cgaffinetransformconcat%28____%29.md): Returns an affine transformation matrix constructed by combining two existing affine transforms.

# CGAffineTransformRotate (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns an affine transformation matrix constructed by rotating an existing affine transform.

## Declaration

```objectivec
extern CGAffineTransform CGAffineTransformRotate(CGAffineTransform t, CGFloat angle);
```

## Parameters

- `t`: An existing affine transform.
- `angle`: The angle, in radians, by which to rotate the affine transform. In iOS, a positive value specifies counterclockwise rotation and a negative value specifies clockwise rotation. In macOS, a positive value specifies clockwise rotation and a negative value specifies counterclockwise rotation.

<a id="return-value"></a>

## Return Value

A new affine transformation matrix.

<a id="Discussion"></a>

## Discussion

You use this function to create a new affine transformation matrix by adding a rotation value to an existing affine transform. The resulting structure represents a new affine transform, which you can use (and reuse, if you want) to rotate a coordinate system.

The actual direction of rotation is dependent on the coordinate system orientation of the target platform, which is different in iOS and macOS.

## See Also

### Modifying Affine Transformations

- [CGAffineTransformTranslate](cgaffinetransformtranslate%28______%29.md): Returns an affine transformation matrix constructed by translating an existing affine transform.
- [CGAffineTransformScale](cgaffinetransformscale%28______%29.md): Returns an affine transformation matrix constructed by scaling an existing affine transform.
- [CGAffineTransformInvert](cgaffinetransforminvert%28__%29.md): Returns an affine transformation matrix constructed by inverting an existing affine transform.
- [CGAffineTransformConcat](cgaffinetransformconcat%28____%29.md): Returns an affine transformation matrix constructed by combining two existing affine transforms.
