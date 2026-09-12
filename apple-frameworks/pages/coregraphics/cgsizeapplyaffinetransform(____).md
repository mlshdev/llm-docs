> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgsizeapplyaffinetransform(_:_:)](https://developer.apple.com/documentation/coregraphics/cgsizeapplyaffinetransform(_:_:))

# CGSizeApplyAffineTransform(\_:\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the height and width resulting from a transformation of an existing height and width.

## Declaration

```swift
func CGSizeApplyAffineTransform(_ size: CGSize, _ t: CGAffineTransform) -> CGSize
```

## Parameters

- `size`: A size that specifies the height and width to transform.
- `t`: The affine transform to apply.

<a id="return-value"></a>

## Return Value

A new size resulting from applying the specified affine transform to the existing size.

## See Also

### Applying Affine Transformations

- [CGPointApplyAffineTransform(\_:\_:)](cgpointapplyaffinetransform%28____%29.md): Returns the point resulting from an affine transformation of an existing point.
- [CGRectApplyAffineTransform(\_:\_:)](cgrectapplyaffinetransform%28____%29.md): Applies an affine transform to a rectangle.

# CGSizeApplyAffineTransform (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the height and width resulting from a transformation of an existing height and width.

## Declaration

```objectivec
extern CGSize CGSizeApplyAffineTransform(CGSize size, CGAffineTransform t);
```

## Parameters

- `size`: A size that specifies the height and width to transform.
- `t`: The affine transform to apply.

<a id="return-value"></a>

## Return Value

A new size resulting from applying the specified affine transform to the existing size.

## See Also

### Applying Affine Transformations

- [CGPointApplyAffineTransform](cgpointapplyaffinetransform%28____%29.md): Returns the point resulting from an affine transformation of an existing point.
- [CGRectApplyAffineTransform](cgrectapplyaffinetransform%28____%29.md): Applies an affine transform to a rectangle.
