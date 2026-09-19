> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/spaffinetransform3dfloatisrectilinear

# SPAffineTransform3DFloatIsRectilinear

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static bool SPAffineTransform3DFloatIsRectilinear(SPAffineTransform3DFloat transform);
```

## Parameters

- `transform`: The source transform.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the transform is rectilinear.

<a id="discussion"></a>

## Discussion

Returns a Boolean value that indicates whether the transform is rectilinear.
