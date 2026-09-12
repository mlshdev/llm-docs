> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpointapplyaffinetransform(_:_:)](https://developer.apple.com/documentation/coregraphics/cgpointapplyaffinetransform(_:_:))

# CGPointApplyAffineTransform(\_:\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the point resulting from an affine transformation of an existing point.

## Declaration

```swift
func CGPointApplyAffineTransform(_ point: CGPoint, _ t: CGAffineTransform) -> CGPoint
```

## Parameters

- `point`: A point that specifies the x- and y-coordinates to transform.
- `t`: The affine transform to apply.

<a id="return-value"></a>

## Return Value

A new point resulting from applying the specified affine transform to the existing point.

## See Also

### Applying Affine Transformations

- [CGSizeApplyAffineTransform(\_:\_:)](cgsizeapplyaffinetransform%28____%29.md): Returns the height and width resulting from a transformation of an existing height and width.
- [CGRectApplyAffineTransform(\_:\_:)](cgrectapplyaffinetransform%28____%29.md): Applies an affine transform to a rectangle.

# CGPointApplyAffineTransform (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the point resulting from an affine transformation of an existing point.

## Declaration

```objectivec
extern CGPoint CGPointApplyAffineTransform(CGPoint point, CGAffineTransform t);
```

## Parameters

- `point`: A point that specifies the x- and y-coordinates to transform.
- `t`: The affine transform to apply.

<a id="return-value"></a>

## Return Value

A new point resulting from applying the specified affine transform to the existing point.

## See Also

### Applying Affine Transformations

- [CGSizeApplyAffineTransform](cgsizeapplyaffinetransform%28____%29.md): Returns the height and width resulting from a transformation of an existing height and width.
- [CGRectApplyAffineTransform](cgrectapplyaffinetransform%28____%29.md): Applies an affine transform to a rectangle.
