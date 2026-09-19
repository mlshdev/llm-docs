> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/spaffinetransform3dmakescale

# SPAffineTransform3DMakeScale

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
static SPAffineTransform3D SPAffineTransform3DMakeScale(SPSize3D scale);
```

## Parameters

- `scale`: The scale.

<a id="return-value"></a>

## Return Value

A new affine transform structure.

<a id="discussion"></a>

## Discussion

Returns a new scale affine transform.
