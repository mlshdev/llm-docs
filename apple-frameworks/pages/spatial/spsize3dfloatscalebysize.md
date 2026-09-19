> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/spsize3dfloatscalebysize

# SPSize3DFloatScaleBySize

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPSize3DFloat SPSize3DFloatScaleBySize(SPSize3DFloat size, SPSize3DFloat scale);
```

## Parameters

- `size`: The source size.
- `scale`: The scale value.

<a id="return-value"></a>

## Return Value

A size that’s scaled by the specified value.

<a id="discussion"></a>

## Discussion

Returns a size with dimensions scaled by the specified size.
