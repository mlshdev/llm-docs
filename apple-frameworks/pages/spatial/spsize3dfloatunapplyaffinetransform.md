> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spsize3dfloatunapplyaffinetransform](https://developer.apple.com/documentation/spatial/spsize3dfloatunapplyaffinetransform)

# SPSize3DFloatUnapplyAffineTransform

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPSize3DFloat SPSize3DFloatUnapplyAffineTransform(SPSize3DFloat size, SPAffineTransform3DFloat transform);
```

## Parameters

- `size`: The source size.
- `transform`: The affine transform that the function unapplies to the size.

<a id="return-value"></a>

## Return Value

The transformed size.

<a id="discussion"></a>

## Discussion

Returns a size that’s transformed by the inverse of the specified affine transform.
