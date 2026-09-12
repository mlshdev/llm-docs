> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rotation3d/inverse](https://developer.apple.com/documentation/spatial/rotation3d/inverse)

# inverse (Swift)

**Framework:** Spatial  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The inverse of the rotation.

## Declaration

```swift
var inverse: Rotation3D { get }
```

## See Also

### Transforming a 3D rotation structure

- [slerp(from:to:t:along:)](slerp%28from_to_t_along_%29.md): Returns the spherical linear interpolation along either the shortest or the longest arc between two rotations.
- [Rotation3D.SlerpPath](slerppath.md): Constants that define the arc that a slerp operation takes.
- [identity](identity.md): The identity rotation.

# SPRotation3DInverse (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The inverse of the rotation.

## Declaration

```objectivec
static SPRotation3D SPRotation3DInverse(SPRotation3D rotation);
```

## See Also

### Transforming a 3D rotation structure

- [SPRotation3DSlerp](../sprotation3dslerp.md): Returns the spherical linear interpolation along the shortest arc between two rotations.
- [SPRotation3DSlerpLongest](../sprotation3dslerplongest.md): Returns the spherical linear interpolation along the longest arc between two rotations.
- [SPRotation3DIdentity](identity.md): The identity rotation.
