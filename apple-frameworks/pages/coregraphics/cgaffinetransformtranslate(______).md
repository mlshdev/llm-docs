> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgaffinetransformtranslate(_:_:_:)](https://developer.apple.com/documentation/coregraphics/cgaffinetransformtranslate(_:_:_:))

# CGAffineTransformTranslate(\_:\_:\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns an affine transformation matrix constructed by translating an existing affine transform.

## Declaration

```swift
func CGAffineTransformTranslate(_ t: CGAffineTransform, _ tx: CGFloat, _ ty: CGFloat) -> CGAffineTransform
```

## Parameters

- `t`: An existing affine transform.
- `tx`: The value by which to move x values with the affine transform.
- `ty`: The value by which to move y values with the affine transform.

<a id="return-value"></a>

## Return Value

A new affine transformation matrix.

<a id="Discussion"></a>

## Discussion

You use this function to create a new affine transform by adding translation values to an existing affine transform. The resulting structure represents a new affine transform, which you can use (and reuse, if you want) to move a coordinate system.

## See Also

### Modifying Affine Transformations

- [CGAffineTransformScale(\_:\_:\_:)](cgaffinetransformscale%28______%29.md): Returns an affine transformation matrix constructed by scaling an existing affine transform.
- [CGAffineTransformRotate(\_:\_:)](cgaffinetransformrotate%28____%29.md): Returns an affine transformation matrix constructed by rotating an existing affine transform.
- [CGAffineTransformInvert(\_:)](cgaffinetransforminvert%28__%29.md): Returns an affine transformation matrix constructed by inverting an existing affine transform.
- [CGAffineTransformConcat(\_:\_:)](cgaffinetransformconcat%28____%29.md): Returns an affine transformation matrix constructed by combining two existing affine transforms.

# CGAffineTransformTranslate (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns an affine transformation matrix constructed by translating an existing affine transform.

## Declaration

```objectivec
extern CGAffineTransform CGAffineTransformTranslate(CGAffineTransform t, CGFloat tx, CGFloat ty);
```

## Parameters

- `t`: An existing affine transform.
- `tx`: The value by which to move x values with the affine transform.
- `ty`: The value by which to move y values with the affine transform.

<a id="return-value"></a>

## Return Value

A new affine transformation matrix.

<a id="Discussion"></a>

## Discussion

You use this function to create a new affine transform by adding translation values to an existing affine transform. The resulting structure represents a new affine transform, which you can use (and reuse, if you want) to move a coordinate system.

## See Also

### Modifying Affine Transformations

- [CGAffineTransformScale](cgaffinetransformscale%28______%29.md): Returns an affine transformation matrix constructed by scaling an existing affine transform.
- [CGAffineTransformRotate](cgaffinetransformrotate%28____%29.md): Returns an affine transformation matrix constructed by rotating an existing affine transform.
- [CGAffineTransformInvert](cgaffinetransforminvert%28__%29.md): Returns an affine transformation matrix constructed by inverting an existing affine transform.
- [CGAffineTransformConcat](cgaffinetransformconcat%28____%29.md): Returns an affine transformation matrix constructed by combining two existing affine transforms.
