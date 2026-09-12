> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sppoint3dfloatapplyaffinetransform](https://developer.apple.com/documentation/spatial/sppoint3dfloatapplyaffinetransform)

# SPPoint3DFloatApplyAffineTransform

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPPoint3DFloat SPPoint3DFloatApplyAffineTransform(SPPoint3DFloat point, SPAffineTransform3DFloat transform);
```

## Parameters

- `point`: The source point.
- `transform`: The affine transform that the function applies to the point.

<a id="return-value"></a>

## Return Value

The transformed point,

<a id="discussion"></a>

## Discussion

Returns a point that’s transformed by the specified affine transform.
