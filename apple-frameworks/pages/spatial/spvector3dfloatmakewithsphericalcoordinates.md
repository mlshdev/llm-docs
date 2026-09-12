> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spvector3dfloatmakewithsphericalcoordinates](https://developer.apple.com/documentation/spatial/spvector3dfloatmakewithsphericalcoordinates)

# SPVector3DFloatMakeWithSphericalCoordinates

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPVector3DFloat SPVector3DFloatMakeWithSphericalCoordinates(SPSphericalCoordinates3DFloat coords);
```

## Parameters

- `coords`: The source spherical coordinates structure.

<a id="return-value"></a>

## Return Value

A new vector that contains the spherical coorddinates converted to Cartesian coordinates.

<a id="discussion"></a>

## Discussion

Returns a Spatial vector that represents the Cartesian coordinates of the specified spherical coordinates structure.
