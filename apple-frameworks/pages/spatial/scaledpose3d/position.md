> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/scaledpose3d/position](https://developer.apple.com/documentation/spatial/scaledpose3d/position)

# position (Swift)

**Framework:** Spatial  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The scaled pose’s position.

## Declaration

```swift
var position: Point3D
```

## See Also

### Inspecting a 3D scaled pose’s properties

- [matrix](matrix.md): The scaled pose’s underlying matrix.
- [rotation](rotation.md): The scaled pose’s rotation.
- [scale](scale.md): The scaled pose’s scale.
- [inverse](inverse.md): The scaled pose’s inverse.
- [customMirror](custommirror.md): A mirror that reflects the notification.
- [identity](identity.md): The identity scaled pose.

# position (Objective-C)

**Framework:** Spatial  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The scaled pose’s position.

## Declaration

```objectivec
SPPoint3D position;
```

## See Also

### Inspecting a 3D scaled pose’s properties

- [rotation](rotation.md): The scaled pose’s rotation.
- [scale](scale.md): The scaled pose’s scale.
- [SPScaledPose3DGet4x4Matrix](../spscaledpose3dget4x4matrix.md): Returns a 4 x 4 matrix that represents the scaled pose’s translation, rotation, and scale.
- [SPScaledPose3DGetInverse](../spscaledpose3dgetinverse.md): Returns a new scaled pose with the inverse matrix of the specified scaled pose.
