> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/spprojectivetransform3dfloatscaleby

# SPProjectiveTransform3DFloatScaleBy

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPProjectiveTransform3DFloat SPProjectiveTransform3DFloatScaleBy(SPProjectiveTransform3DFloat transform, float x, float y, float z);
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

Returns a projective transform that’s constructed by concatenating an existing projective transform and a scale.
