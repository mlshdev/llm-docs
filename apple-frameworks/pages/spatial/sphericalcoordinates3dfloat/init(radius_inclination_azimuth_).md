> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sphericalcoordinates3dfloat/init(radius:inclination:azimuth:)](https://developer.apple.com/documentation/spatial/sphericalcoordinates3dfloat/init(radius:inclination:azimuth:))

# init(radius:inclination:azimuth:) (Swift)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
init(radius: Float, inclination: Angle2DFloat, azimuth: Angle2DFloat)
```

## Parameters

- `radius`: The distance to the origin.
- `inclination`: The inclination angle.
- `azimuth`: The azimuthal angle.

<a id="return-value"></a>

## Return Value

A new point.

<a id="discussion"></a>

## Discussion

Creates a single-precision spherical coordinates structure.

# SPSphericalCoordinates3DFloatMake (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPSphericalCoordinates3DFloat SPSphericalCoordinates3DFloatMake(float radius, SPAngleFloat inclination, SPAngleFloat azimuth);
```

## Parameters

- `radius`: The distance to the origin.
- `inclination`: The inclination angle.
- `azimuth`: The azimuthal angle.

<a id="return-value"></a>

## Return Value

A new point.

<a id="discussion"></a>

## Discussion

Creates a single-precision spherical coordinates structure.
