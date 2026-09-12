> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spaffinetransform3dfloatalmostequaltotransform-5b3so](https://developer.apple.com/documentation/spatial/spaffinetransform3dfloatalmostequaltotransform-5b3so)

# SPAffineTransform3DFloatAlmostEqualToTransform

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static bool SPAffineTransform3DFloatAlmostEqualToTransform(SPAffineTransform3DFloat t1, SPAffineTransform3DFloat t2, float tolerance);
```

## Parameters

- `t1`: The first transform.
- `t2`: The first transform.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the two transform’s matrices are equal within the specified absolute tolerance.

<a id="discussion"></a>

## Discussion

Returns a Boolean value that indicates whether the two transform’s matrices are equal within the specified absolute tolerance.
