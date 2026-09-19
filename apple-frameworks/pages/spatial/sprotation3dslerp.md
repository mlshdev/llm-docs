> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/sprotation3dslerp

# SPRotation3DSlerp

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Returns the spherical linear interpolation along the shortest arc between two rotations.

## Declaration

```objectivec
static SPRotation3D SPRotation3DSlerp(SPRotation3D from, SPRotation3D to, double t);
```

## See Also

### Transforming a 3D rotation structure

- [SPRotation3DInverse](rotation3d/inverse.md): The inverse of the rotation.
- [SPRotation3DSlerpLongest](sprotation3dslerplongest.md): Returns the spherical linear interpolation along the longest arc between two rotations.
- [SPRotation3DIdentity](rotation3d/identity.md): The identity rotation.
