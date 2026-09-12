> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgaffinetransforminvert(_:)](https://developer.apple.com/documentation/coregraphics/cgaffinetransforminvert(_:))

# CGAffineTransformInvert(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns an affine transformation matrix constructed by inverting an existing affine transform.

## Declaration

```swift
func CGAffineTransformInvert(_ t: CGAffineTransform) -> CGAffineTransform
```

## Parameters

- `t`: An existing affine transform.

<a id="return-value"></a>

## Return Value

A new affine transformation matrix. If the affine transform passed in parameter `t` cannot be inverted, the affine transform is returned unchanged.

<a id="Discussion"></a>

## Discussion

Inversion is generally used to provide reverse transformation of points within transformed objects. Given the coordinates (x,y), which have been transformed by a given matrix to new coordinates (x’,y’), transforming the coordinates (x’,y’) by the inverse matrix produces the original coordinates (x,y).

## See Also

### Modifying Affine Transformations

- [CGAffineTransformTranslate(\_:\_:\_:)](cgaffinetransformtranslate%28______%29.md): Returns an affine transformation matrix constructed by translating an existing affine transform.
- [CGAffineTransformScale(\_:\_:\_:)](cgaffinetransformscale%28______%29.md): Returns an affine transformation matrix constructed by scaling an existing affine transform.
- [CGAffineTransformRotate(\_:\_:)](cgaffinetransformrotate%28____%29.md): Returns an affine transformation matrix constructed by rotating an existing affine transform.
- [CGAffineTransformConcat(\_:\_:)](cgaffinetransformconcat%28____%29.md): Returns an affine transformation matrix constructed by combining two existing affine transforms.

# CGAffineTransformInvert (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns an affine transformation matrix constructed by inverting an existing affine transform.

## Declaration

```objectivec
extern CGAffineTransform CGAffineTransformInvert(CGAffineTransform t);
```

## Parameters

- `t`: An existing affine transform.

<a id="return-value"></a>

## Return Value

A new affine transformation matrix. If the affine transform passed in parameter `t` cannot be inverted, the affine transform is returned unchanged.

<a id="Discussion"></a>

## Discussion

Inversion is generally used to provide reverse transformation of points within transformed objects. Given the coordinates (x,y), which have been transformed by a given matrix to new coordinates (x’,y’), transforming the coordinates (x’,y’) by the inverse matrix produces the original coordinates (x,y).

## See Also

### Modifying Affine Transformations

- [CGAffineTransformTranslate](cgaffinetransformtranslate%28______%29.md): Returns an affine transformation matrix constructed by translating an existing affine transform.
- [CGAffineTransformScale](cgaffinetransformscale%28______%29.md): Returns an affine transformation matrix constructed by scaling an existing affine transform.
- [CGAffineTransformRotate](cgaffinetransformrotate%28____%29.md): Returns an affine transformation matrix constructed by rotating an existing affine transform.
- [CGAffineTransformConcat](cgaffinetransformconcat%28____%29.md): Returns an affine transformation matrix constructed by combining two existing affine transforms.
