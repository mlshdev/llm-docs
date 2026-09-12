> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sphericalcoordinates3d/vector](https://developer.apple.com/documentation/spatial/sphericalcoordinates3d/vector)

# vector (Swift)

**Framework:** Spatial  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A simd three-element vector that contains the radius, inclination, and azimuth values.

## Declaration

```swift
var vector: simd_double3 { get set }
```

## See Also

### Inspecting a spherical coordinates structure’s properties

- [azimuth](azimuth.md): The azimuthal angle, in radians.
- [inclination](inclination.md): The inclination angle, in radians.
- [radius](radius.md): The distance to the origin.
- [customMirror](custommirror.md): The custom mirror for this instance.

# vector (Objective-C)

**Framework:** Spatial  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A simd three-element vector that contains the radius, inclination, and azimuth values.

## Declaration

```objectivec
simd_double3 vector;
```

## See Also

### Inspecting a spherical coordinates structure’s properties

- [azimuth](../spsphericalcoordinates3d/azimuth.md): The azimuthal angle, in radians.
- [inclination](../spsphericalcoordinates3d/inclination.md): The inclination angle, in radians.
- [radius](../spsphericalcoordinates3d/radius.md): The distance to the origin.
