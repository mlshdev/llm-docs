> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sprotation3dslerplongest](https://developer.apple.com/documentation/spatial/sprotation3dslerplongest)

# SPRotation3DSlerpLongest

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Returns the spherical linear interpolation along the longest arc between two rotations.

## Declaration

```objectivec
static SPRotation3D SPRotation3DSlerpLongest(SPRotation3D from, SPRotation3D to, double t);
```

## See Also

### Transforming a 3D rotation structure

- [SPRotation3DInverse](rotation3d/inverse.md): The inverse of the rotation.
- [SPRotation3DSlerp](sprotation3dslerp.md): Returns the spherical linear interpolation along the shortest arc between two rotations.
- [SPRotation3DIdentity](rotation3d/identity.md): The identity rotation.
