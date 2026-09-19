> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/sprect3dfloatmakeatcenterwithvector-9o2lm

# SPRect3DFloatMakeAtCenterWithVector

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPRect3DFloat SPRect3DFloatMakeAtCenterWithVector(SPVector3DFloat center, SPVector3DFloat size);
```

## Parameters

- `center`: A Spatial vector that specifies the center of the rectangle.
- `size`: A Spatial vector that specifies the size of the rectangle.

<a id="return-value"></a>

## Return Value

A new rectangle stucture.

<a id="discussion"></a>

## Discussion

Returns a rectangle at the specified center using Spatial vectors.
