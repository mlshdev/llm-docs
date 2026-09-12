> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgrectapplyaffinetransform(_:_:)](https://developer.apple.com/documentation/coregraphics/cgrectapplyaffinetransform(_:_:))

# CGRectApplyAffineTransform(\_:\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Applies an affine transform to a rectangle.

## Declaration

```swift
func CGRectApplyAffineTransform(_ rect: CGRect, _ t: CGAffineTransform) -> CGRect
```

## Parameters

- `rect`: The rectangle whose corner points you want to transform.
- `t`: The affine transform to apply to the `rect` parameter.

<a id="return-value"></a>

## Return Value

The transformed rectangle.

<a id="Discussion"></a>

## Discussion

Because affine transforms do not preserve rectangles in general, this function returns the smallest rectangle that contains the transformed corner points of the `rect` parameter. If the affine transform `t` consists solely of scaling and translation operations, then the returned rectangle coincides with the rectangle constructed from the four transformed corners.

## See Also

### Applying Affine Transformations

- [CGPointApplyAffineTransform(\_:\_:)](cgpointapplyaffinetransform%28____%29.md): Returns the point resulting from an affine transformation of an existing point.
- [CGSizeApplyAffineTransform(\_:\_:)](cgsizeapplyaffinetransform%28____%29.md): Returns the height and width resulting from a transformation of an existing height and width.

# CGRectApplyAffineTransform (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Applies an affine transform to a rectangle.

## Declaration

```objectivec
extern CGRect CGRectApplyAffineTransform(CGRect rect, CGAffineTransform t);
```

## Parameters

- `rect`: The rectangle whose corner points you want to transform.
- `t`: The affine transform to apply to the `rect` parameter.

<a id="return-value"></a>

## Return Value

The transformed rectangle.

<a id="Discussion"></a>

## Discussion

Because affine transforms do not preserve rectangles in general, this function returns the smallest rectangle that contains the transformed corner points of the `rect` parameter. If the affine transform `t` consists solely of scaling and translation operations, then the returned rectangle coincides with the rectangle constructed from the four transformed corners.

## See Also

### Applying Affine Transformations

- [CGPointApplyAffineTransform](cgpointapplyaffinetransform%28____%29.md): Returns the point resulting from an affine transformation of an existing point.
- [CGSizeApplyAffineTransform](cgsizeapplyaffinetransform%28____%29.md): Returns the height and width resulting from a transformation of an existing height and width.
