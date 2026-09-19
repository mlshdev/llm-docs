> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/spsphericalcoordinates3dfloatmake-hl8u

# SPSphericalCoordinates3DFloatMake

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPSphericalCoordinates3DFloat SPSphericalCoordinates3DFloatMake(SPSphericalCoordinates3D coords);
```

## Parameters

- `coords`: The spherical coordinates structure.

<a id="return-value"></a>

## Return Value

A new  spherical coordinates structure.

<a id="discussion"></a>

## Discussion

Returns a single-precision spherical coordinates structure from a double-precision spherical coordinates structure.
