> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/spvector3dfloatscalebysize

# SPVector3DFloatScaleBySize

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPVector3DFloat SPVector3DFloatScaleBySize(SPVector3DFloat vector, SPSize3DFloat scale);
```

## Parameters

- `vector`: The source vector.
- `scale`: The scale value.

<a id="return-value"></a>

## Return Value

A vector that’s scaled by the specified value.

<a id="discussion"></a>

## Discussion

Returns a vector with elements scaled by the specified size.
