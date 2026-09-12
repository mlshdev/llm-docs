> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlcamera/frameboundingbox(_:setnearandfar:)](https://developer.apple.com/documentation/modelio/mdlcamera/frameboundingbox(_:setnearandfar:))

# frameBoundingBox(\_:setNearAndFar:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Moves the camera such that the specified bounding box lies entirely within the camera’s field of view.

## Declaration

```swift
func frameBoundingBox(_ boundingBox: MDLAxisAlignedBoundingBox, setNearAndFar: Bool)
```

## Parameters

- `boundingBox`: The region, in world space coordinates, to be made visible to the camera.
- `setNearAndFar`: If [true](https://developer.apple.com/documentation/swift/true), the camera also adjusts its [nearVisibilityDistance](nearvisibilitydistance.md) and [farVisibilityDistance](farvisibilitydistance.md) properties to place the specified region entirely within the camera’s viewing frustum. If [false](https://developer.apple.com/documentation/swift/false), those properties remain unchanged, and the specified region may therefore lie outside the camera’s near and far limits.

<a id="Discussion"></a>

## Discussion

When calculating the new camera position and orientation, this method assumes the camera points in the negative z-axis direction and that the positive y-axis represents the up direction for the camera’s view.

## See Also

### Managing Camera Position and Orientation

- [look(at:)](look%28at_%29.md): Orients the camera to face toward the specified point.
- [look(at:from:)](look%28at_from_%29.md): Sets the camera’s position and orients the camera to face toward the specified point.

# frameBoundingBox:setNearAndFar: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Moves the camera such that the specified bounding box lies entirely within the camera’s field of view.

## Declaration

```objectivec
- (void) frameBoundingBox:(MDLAxisAlignedBoundingBox) boundingBox setNearAndFar:(BOOL) setNearAndFar;
```

## Parameters

- `boundingBox`: The region, in world space coordinates, to be made visible to the camera.
- `setNearAndFar`: If [true](https://developer.apple.com/documentation/swift/true), the camera also adjusts its [nearVisibilityDistance](nearvisibilitydistance.md) and [farVisibilityDistance](farvisibilitydistance.md) properties to place the specified region entirely within the camera’s viewing frustum. If [false](https://developer.apple.com/documentation/swift/false), those properties remain unchanged, and the specified region may therefore lie outside the camera’s near and far limits.

<a id="Discussion"></a>

## Discussion

When calculating the new camera position and orientation, this method assumes the camera points in the negative z-axis direction and that the positive y-axis represents the up direction for the camera’s view.

## See Also

### Managing Camera Position and Orientation

- [lookAt:](look%28at_%29.md): Orients the camera to face toward the specified point.
- [lookAt:from:](look%28at_from_%29.md): Sets the camera’s position and orients the camera to face toward the specified point.
