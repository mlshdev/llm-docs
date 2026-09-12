> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spaffinetransform3dalmostequaltotransform-9ma98](https://developer.apple.com/documentation/spatial/spaffinetransform3dalmostequaltotransform-9ma98)

# SPAffineTransform3DAlmostEqualToTransform

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
static bool SPAffineTransform3DAlmostEqualToTransform(SPAffineTransform3D t1, SPAffineTransform3D t2, double tolerance);
```

## Parameters

- `t1`: The first rotation.
- `t2`: The second rotation.
- `tolerance`: How close the two rotations must be to be considered “almost equal”.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the two rotations are equal within the default absolute tolerance.

<a id="Overview"></a>

## Overview

The default absolute tolerance is [ulpOfOne](https://developer.apple.com/documentation/swift/floatingpoint/ulpofone-3j2pj) in Swift or `DBL_EPSILON` in Objective-C.

## See Also

### Comparing values

- [SPAffineTransform3DAlmostEqualToTransform](spaffinetransform3dalmostequaltotransform-16ryg.md)
