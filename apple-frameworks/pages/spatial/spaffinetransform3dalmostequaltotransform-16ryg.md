> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spaffinetransform3dalmostequaltotransform-16ryg](https://developer.apple.com/documentation/spatial/spaffinetransform3dalmostequaltotransform-16ryg)

# SPAffineTransform3DAlmostEqualToTransform

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
static bool SPAffineTransform3DAlmostEqualToTransform(SPAffineTransform3D t1, SPAffineTransform3D t2);
```

## Parameters

- `t1`: The first rotation.
- `t2`: The second rotation.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the two affine transforms are equal within the specified absolute tolerance.

## See Also

### Comparing values

- [SPAffineTransform3DAlmostEqualToTransform](spaffinetransform3dalmostequaltotransform-9ma98.md)
