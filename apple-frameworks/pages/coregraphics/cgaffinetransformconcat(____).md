> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgaffinetransformconcat(_:_:)](https://developer.apple.com/documentation/coregraphics/cgaffinetransformconcat(_:_:))

# CGAffineTransformConcat(\_:\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns an affine transformation matrix constructed by combining two existing affine transforms.

## Declaration

```swift
func CGAffineTransformConcat(_ t1: CGAffineTransform, _ t2: CGAffineTransform) -> CGAffineTransform
```

## Parameters

- `t1`: The first affine transform.
- `t2`: The second affine transform. This affine transform is concatenated to the first affine transform.

<a id="return-value"></a>

## Return Value

A new affine transformation matrix. That is, t’ = t1\*t2.

<a id="Discussion"></a>

## Discussion

Concatenation combines two affine transformation matrices by multiplying them together. You might perform several concatenations in order to create a single affine transform that contains the cumulative effects of several transformations.

Note that matrix operations are not commutative—the order in which you concatenate matrices is important. That is, the result of multiplying matrix `t1` by matrix `t2` does not necessarily equal the result of multiplying matrix `t2` by matrix `t1`.

## See Also

### Modifying Affine Transformations

- [CGAffineTransformTranslate(\_:\_:\_:)](cgaffinetransformtranslate%28______%29.md): Returns an affine transformation matrix constructed by translating an existing affine transform.
- [CGAffineTransformScale(\_:\_:\_:)](cgaffinetransformscale%28______%29.md): Returns an affine transformation matrix constructed by scaling an existing affine transform.
- [CGAffineTransformRotate(\_:\_:)](cgaffinetransformrotate%28____%29.md): Returns an affine transformation matrix constructed by rotating an existing affine transform.
- [CGAffineTransformInvert(\_:)](cgaffinetransforminvert%28__%29.md): Returns an affine transformation matrix constructed by inverting an existing affine transform.

# CGAffineTransformConcat (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns an affine transformation matrix constructed by combining two existing affine transforms.

## Declaration

```objectivec
extern CGAffineTransform CGAffineTransformConcat(CGAffineTransform t1, CGAffineTransform t2);
```

## Parameters

- `t1`: The first affine transform.
- `t2`: The second affine transform. This affine transform is concatenated to the first affine transform.

<a id="return-value"></a>

## Return Value

A new affine transformation matrix. That is, t’ = t1\*t2.

<a id="Discussion"></a>

## Discussion

Concatenation combines two affine transformation matrices by multiplying them together. You might perform several concatenations in order to create a single affine transform that contains the cumulative effects of several transformations.

Note that matrix operations are not commutative—the order in which you concatenate matrices is important. That is, the result of multiplying matrix `t1` by matrix `t2` does not necessarily equal the result of multiplying matrix `t2` by matrix `t1`.

## See Also

### Modifying Affine Transformations

- [CGAffineTransformTranslate](cgaffinetransformtranslate%28______%29.md): Returns an affine transformation matrix constructed by translating an existing affine transform.
- [CGAffineTransformScale](cgaffinetransformscale%28______%29.md): Returns an affine transformation matrix constructed by scaling an existing affine transform.
- [CGAffineTransformRotate](cgaffinetransformrotate%28____%29.md): Returns an affine transformation matrix constructed by rotating an existing affine transform.
- [CGAffineTransformInvert](cgaffinetransforminvert%28__%29.md): Returns an affine transformation matrix constructed by inverting an existing affine transform.
