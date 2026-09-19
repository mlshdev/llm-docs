> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/spaffinetransform3dfloatisuniform

# SPAffineTransform3DFloatIsUniform

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static bool SPAffineTransform3DFloatIsUniform(SPAffineTransform3DFloat transform);
```

## Parameters

- `transform`: The source transform.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the transform is uniform over all dimensions.

<a id="discussion"></a>

## Discussion

Returns a Boolean value that indicates whether the transform scales equally over all dimensions.
