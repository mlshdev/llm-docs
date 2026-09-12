> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spsphericalcoordinates3dmakewithpackedvector](https://developer.apple.com/documentation/spatial/spsphericalcoordinates3dmakewithpackedvector)

# SPSphericalCoordinates3DMakeWithPackedVector

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPSphericalCoordinates3D SPSphericalCoordinates3DMakeWithPackedVector(simd_packed_double4 source);
```

## Parameters

- `source`: The source vector, where `x` is the radius, `y` is the inclination (in radians), and `z` is the azimuth (in radians).

<a id="return-value"></a>

## Return Value

A new spherical coordinates structure.

<a id="discussion"></a>

## Discussion

Creates a Spatial spherical coordinates structure from a packed simd vector.
