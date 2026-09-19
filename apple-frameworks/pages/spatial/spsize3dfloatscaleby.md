> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/spsize3dfloatscaleby

# SPSize3DFloatScaleBy

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPSize3DFloat SPSize3DFloatScaleBy(SPSize3DFloat size, float x, float y, float z);
```

## Parameters

- `size`: The source size.
- `x`: The scale value along the @p width dimension.
- `y`: The scale value along the @p height dimension.
- `z`: The scale value along the @p depth dimension.

<a id="return-value"></a>

## Return Value

A size that’s scaled by the specified values.

<a id="discussion"></a>

## Discussion

Returns a size with dimensions scaled by the specified values.
