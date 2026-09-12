> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spaffinetransform3dfloatchangebasis](https://developer.apple.com/documentation/spatial/spaffinetransform3dfloatchangebasis)

# SPAffineTransform3DFloatChangeBasis

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPAffineTransform3DFloat SPAffineTransform3DFloatChangeBasis(SPAffineTransform3DFloat transform, SPAffineTransform3DFloat from, SPAffineTransform3DFloat to);
```

## Parameters

- `transform`: The source transform.
- `from`: The old basis.
- `to`: The new basis.

<a id="return-value"></a>

## Return Value

A new affine transform structure or `SPAffineTransform3DInvalid`.

<a id="discussion"></a>

## Discussion

Returns a new affine transform structure by applying a change-of-basis.
