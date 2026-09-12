> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sppoint3dmakewithvector-6eegc](https://developer.apple.com/documentation/spatial/sppoint3dmakewithvector-6eegc)

# SPPoint3DMakeWithVector

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
static SPPoint3D SPPoint3DMakeWithVector(simd_double3 xyz);
```

## Parameters

- `xyz`: The source vector.

<a id="return-value"></a>

## Return Value

A new point.

<a id="discussion"></a>

## Discussion

Creates a point with coordinates specified as a 3-element SIMD vector.

## See Also

### Creating a 3D point structure

- [SPPoint3DMakeWithSize](sppoint3dmakewithsize.md): Creates a point from the specified Spatial size structure.
- [SPPoint3DMakeWithSphericalCoordinates](sppoint3dmakewithsphericalcoordinates.md): Returns a Spatial point that represents the Cartesian coordinates of the specified spherical coordinates structure.
- [SPPoint3DMakeWithVector](sppoint3dmakewithvector-39d4f.md): Creates a point from the specified double-precision vector.
