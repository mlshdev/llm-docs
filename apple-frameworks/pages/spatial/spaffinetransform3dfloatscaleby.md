> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spaffinetransform3dfloatscaleby](https://developer.apple.com/documentation/spatial/spaffinetransform3dfloatscaleby)

# SPAffineTransform3DFloatScaleBy

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPAffineTransform3DFloat SPAffineTransform3DFloatScaleBy(SPAffineTransform3DFloat transform, float x, float y, float z);
```

## Parameters

- `transform`: The source transform.
- `x`: The scale value along the @p width dimension.
- `y`: The scale value along the @p height dimension.
- `z`: The scale value along the @p depth dimension.

<a id="return-value"></a>

## Return Value

A transform that’s scaled by the specified values.

<a id="discussion"></a>

## Discussion

Returns an affine transform that’s constructed by concatenating an existing affine transform and a scale.
