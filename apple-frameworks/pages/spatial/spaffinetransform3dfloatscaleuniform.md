> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/spaffinetransform3dfloatscaleuniform

# SPAffineTransform3DFloatScaleUniform

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPAffineTransform3DFloat SPAffineTransform3DFloatScaleUniform(SPAffineTransform3DFloat transform, float scale);
```

## Parameters

- `transform`: The source transform.
- `scale`: The scale value.

<a id="return-value"></a>

## Return Value

A transform that’s uniformly scaled by the specified value.

<a id="discussion"></a>

## Discussion

Returns an affine transform that’s constructed by concatenating an existing affine transform and a uniform scale.
