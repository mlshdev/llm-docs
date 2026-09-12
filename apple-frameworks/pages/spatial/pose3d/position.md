> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/pose3d/position](https://developer.apple.com/documentation/spatial/pose3d/position)

# position (Swift)

**Framework:** Spatial  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The pose’s position.

## Declaration

```swift
var position: Point3D
```

## See Also

### Inspecting a 3D pose’s properties

- [matrix](matrix.md): The pose’s underlying matrix.
- [rotation](rotation.md): The pose’s rotation.
- [inverse](inverse.md): The pose’s inverse.

# position (Objective-C)

**Framework:** Spatial  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The pose’s position.

## Declaration

```objectivec
SPPoint3D position;
```

## See Also

### Inspecting a 3D pose’s properties

- [rotation](rotation.md): The pose’s rotation.
- [SPPose3DGet4x4Matrix](../sppose3dget4x4matrix.md): Returns the pose’s underlying matrix.
- [SPPose3DGetInverse](../sppose3dgetinverse.md): Returns the affine pose’s inverse.
