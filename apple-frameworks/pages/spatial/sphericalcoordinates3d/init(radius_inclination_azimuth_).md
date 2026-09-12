> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sphericalcoordinates3d/init(radius:inclination:azimuth:)](https://developer.apple.com/documentation/spatial/sphericalcoordinates3d/init(radius:inclination:azimuth:))

# init(radius:inclination:azimuth:) (Swift)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates a new spherical coordinates structure with the specified radius, inclination, and azimuth.

## Declaration

```swift
init(radius: Double, inclination: Angle2D, azimuth: Angle2D)
```

## See Also

### Creating a spherical coordinates structure

- [init()](init%28%29.md): Creates a spherical coordinates structure.
- [init(\_:)](init%28__%29-2eoox.md): Creates a spherical coordinates structure from the Cartesian coordinates represented by the specified simd vector.
- [init(\_:)](init%28__%29-45qdy.md): Creates a spherical coordinates structure from the Cartesian coordinates represented by the specified Spatial point.
- [init(\_:)](init%28__%29-1xzjz.md): Creates a new spherical coordinates structure from the specified Cartesian coordinates represented by a simd vector.
- [init(vector:)](init%28vector_%29.md): Creates a new spherical coordinates structure from the specified Cartesian coordinates represented by a simd vector.
- [init(x:y:z:)](init%28x_y_z_%29.md): Creates a new spherical coordinates structure from the specified Cartesian coordinates.

# SPSphericalCoordinates3DMake (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates a new spherical coordinates structure with the specified radius, inclination, and azimuth.

## Declaration

```objectivec
static SPSphericalCoordinates3D SPSphericalCoordinates3DMake(double radius, SPAngle inclination, SPAngle azimuth);
```

## See Also

### Creating a spherical coordinates structure

- [SPSphericalCoordinates3DMakeWithCartesianPoint](../spsphericalcoordinates3dmakewithcartesianpoint.md): Creates a spherical coordinates structure from the Cartesian coordinates represented by the specified Spatial point.
- [SPSphericalCoordinates3DMakeWithCartesianVector](../spsphericalcoordinates3dmakewithcartesianvector-940l6.md): Creates a spherical coordinates structure from the Cartesian coordinates represented by the specified simd vector.
- [SPSphericalCoordinates3DMakeWithCartesianVector](../spsphericalcoordinates3dmakewithcartesianvector-9pfp3.md)
