> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spsphericalcoordinates3dfloatmakewithcartesianvector-5vuvy](https://developer.apple.com/documentation/spatial/spsphericalcoordinates3dfloatmakewithcartesianvector-5vuvy)

# SPSphericalCoordinates3DFloatMakeWithCartesianVector

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPSphericalCoordinates3DFloat SPSphericalCoordinates3DFloatMakeWithCartesianVector(simd_float3 xyz);
```

## Parameters

- `xyz`: The source vector.

<a id="return-value"></a>

## Return Value

A new spherical coordinates structure.

<a id="discussion"></a>

## Discussion

Creates a spherical coordinates structure from the Cartesian coordinates represented by the specified simd vector.
