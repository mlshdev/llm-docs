> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/scaledpose3d/scale](https://developer.apple.com/documentation/spatial/scaledpose3d/scale)

# scale (Swift)

**Framework:** Spatial  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The scaled pose’s scale.

## Declaration

```swift
var scale: Double
```

## See Also

### Inspecting a 3D scaled pose’s properties

- [matrix](matrix.md): The scaled pose’s underlying matrix.
- [position](position.md): The scaled pose’s position.
- [rotation](rotation.md): The scaled pose’s rotation.
- [inverse](inverse.md): The scaled pose’s inverse.
- [customMirror](custommirror.md): A mirror that reflects the notification.
- [identity](identity.md): The identity scaled pose.

# scale (Objective-C)

**Framework:** Spatial  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The scaled pose’s scale.

## Declaration

```objectivec
double scale;
```

## See Also

### Inspecting a 3D scaled pose’s properties

- [position](position.md): The scaled pose’s position.
- [rotation](rotation.md): The scaled pose’s rotation.
- [SPScaledPose3DGet4x4Matrix](../spscaledpose3dget4x4matrix.md): Returns a 4 x 4 matrix that represents the scaled pose’s translation, rotation, and scale.
- [SPScaledPose3DGetInverse](../spscaledpose3dgetinverse.md): Returns a new scaled pose with the inverse matrix of the specified scaled pose.
