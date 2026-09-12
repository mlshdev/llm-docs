> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spsphericalcoordinates3dgetpackedvector](https://developer.apple.com/documentation/spatial/spsphericalcoordinates3dgetpackedvector)

# SPSphericalCoordinates3DGetPackedVector

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static simd_packed_double4 SPSphericalCoordinates3DGetPackedVector(SPSphericalCoordinates3D coords);
```

## Parameters

- `coords`: The source spherical coordinates structure.

<a id="return-value"></a>

## Return Value

A new packed simd vector, where `x` is the radius, `y` is the inclination (in radians), and `z` is the azimuth (in radians).

<a id="discussion"></a>

## Discussion

Creates a packed simd vector from a Spatial spherical coordinates structure.
