> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spaffinetransform3dfloatconcatenation](https://developer.apple.com/documentation/spatial/spaffinetransform3dfloatconcatenation)

# SPAffineTransform3DFloatConcatenation

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPAffineTransform3DFloat SPAffineTransform3DFloatConcatenation(SPAffineTransform3DFloat t1, SPAffineTransform3DFloat t2);
```

## Parameters

- `t1`: The first transform.
- `t2`: The second transform.

<a id="return-value"></a>

## Return Value

An affine transformation matrix that’s constructed by concatenating two existing affine transforms.

<a id="discussion"></a>

## Discussion

Returns an affine transformation matrix that’s constructed by concatenating two existing affine transforms.
