> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spprojectivetransform3dalmostequaltotransform-33crc](https://developer.apple.com/documentation/spatial/spprojectivetransform3dalmostequaltotransform-33crc)

# SPProjectiveTransform3DAlmostEqualToTransform

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a Boolean value that indicates whether two transforms are equal within a specified tolerance.

## Declaration

```objectivec
static bool SPProjectiveTransform3DAlmostEqualToTransform(SPProjectiveTransform3D t1, SPProjectiveTransform3D t2, double tolerance);
```

## Parameters

- `t1`: The first projective transform to compare.
- `t2`: The second projective transform to compare.
- `tolerance`: How close the two prospective transforms must be to be considered “almost equal”.

<a id="return-value"></a>

## Return Value

`true` if the two transforms are nearly equal to each other.

<a id="discussion"></a>

## Discussion

The default absolute tolerance is [ulpOfOne](https://developer.apple.com/documentation/swift/floatingpoint/ulpofone-3j2pj) in Swift or `DBL_EPSILON` in Objective-C.

## See Also

### Comparing values

- [SPProjectiveTransform3DAlmostEqualToTransform](spprojectivetransform3dalmostequaltotransform-5qqyc.md): Returns a Boolean value that indicates whether two transforms are equal within a default tolerance.
