> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spaffinetransform3dfloatscalebysize](https://developer.apple.com/documentation/spatial/spaffinetransform3dfloatscalebysize)

# SPAffineTransform3DFloatScaleBySize

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPAffineTransform3DFloat SPAffineTransform3DFloatScaleBySize(SPAffineTransform3DFloat transform, SPSize3DFloat scale);
```

## Parameters

- `transform`: The source transform.
- `scale`: The scale value.

<a id="return-value"></a>

## Return Value

A transform that’s scaled by the specified value.

<a id="discussion"></a>

## Discussion

Returns an affine transform that’s constructed by concatenating an existing affine transform and a scale specified by an @p SPSize3DFloat structure.
