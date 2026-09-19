> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/spsize3dfloatmakewithvector-7j8ez

# SPSize3DFloatMakeWithVector

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPSize3DFloat SPSize3DFloatMakeWithVector(SPVector3DFloat xyz);
```

## Parameters

- `xyz`: The source vector.

<a id="return-value"></a>

## Return Value

A new size stucture.

<a id="discussion"></a>

## Discussion

Creates a size structure with dimensions specified as a Spatial vector.
