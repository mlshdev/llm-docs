> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spvector3dmakewithsphericalcoordinates](https://developer.apple.com/documentation/spatial/spvector3dmakewithsphericalcoordinates)

# SPVector3DMakeWithSphericalCoordinates

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns a Spatial vector that represents the Cartesian coordinates of the specified spherical coordinates structure.

## Declaration

```objectivec
static SPVector3D SPVector3DMakeWithSphericalCoordinates(SPSphericalCoordinates3D coords);
```

## See Also

### Creating a vector

- [SPVector3DMakeWithPoint](spvector3dmakewithpoint.md): Creates a vector from the specified Spatial point structure.
- [SPVector3DMakeWithRotationAxis](spvector3dmakewithrotationaxis.md): Creates a vector from the specified Spatial rotation axis.
- [SPVector3DMakeWithSize](spvector3dmakewithsize.md): Creates a vector from the specified Spatial size structure.
- [SPVector3DMakeWithVector](spvector3dmakewithvector.md): Creates a vector from the specified double-precision vector.
