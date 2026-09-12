> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spsphericalcoordinates3dmakewithcartesianvector-940l6](https://developer.apple.com/documentation/spatial/spsphericalcoordinates3dmakewithcartesianvector-940l6)

# SPSphericalCoordinates3DMakeWithCartesianVector

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates a spherical coordinates structure from the Cartesian coordinates represented by the specified simd vector.

## Declaration

```objectivec
static SPSphericalCoordinates3D SPSphericalCoordinates3DMakeWithCartesianVector(simd_double3 xyz);
```

## See Also

### Creating a spherical coordinates structure

- [SPSphericalCoordinates3DMake](sphericalcoordinates3d/init%28radius_inclination_azimuth_%29.md): Creates a new spherical coordinates structure with the specified radius, inclination, and azimuth.
- [SPSphericalCoordinates3DMakeWithCartesianPoint](spsphericalcoordinates3dmakewithcartesianpoint.md): Creates a spherical coordinates structure from the Cartesian coordinates represented by the specified Spatial point.
- [SPSphericalCoordinates3DMakeWithCartesianVector](spsphericalcoordinates3dmakewithcartesianvector-9pfp3.md)
