> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spvector3dmakewithvector](https://developer.apple.com/documentation/spatial/spvector3dmakewithvector)

# SPVector3DMakeWithVector

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a vector from the specified double-precision vector.

## Declaration

```objectivec
static SPVector3D SPVector3DMakeWithVector(simd_double3 xyz);
```

## See Also

### Creating a vector

- [SPVector3DMakeWithPoint](spvector3dmakewithpoint.md): Creates a vector from the specified Spatial point structure.
- [SPVector3DMakeWithRotationAxis](spvector3dmakewithrotationaxis.md): Creates a vector from the specified Spatial rotation axis.
- [SPVector3DMakeWithSize](spvector3dmakewithsize.md): Creates a vector from the specified Spatial size structure.
- [SPVector3DMakeWithSphericalCoordinates](spvector3dmakewithsphericalcoordinates.md): Returns a Spatial vector that represents the Cartesian coordinates of the specified spherical coordinates structure.
