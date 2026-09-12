> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlcamera/look(at:from:)](https://developer.apple.com/documentation/modelio/mdlcamera/look(at:from:))

# look(at:from:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Sets the camera’s position and orients the camera to face toward the specified point.

## Declaration

```swift
func look(at focusPosition: vector_float3, from cameraPosition: vector_float3)
```

## Parameters

- `focusPosition`: The point, in world space coordinates, to be made visible to the camera.
- `cameraPosition`: The new position, in world space coordinates, for the camera.

<a id="Discussion"></a>

## Discussion

When calculating the new camera position and orientation, this method assumes the camera points in the negative z-axis direction and that the positive y-axis represents the up direction for the camera’s view.

## See Also

### Managing Camera Position and Orientation

- [frameBoundingBox(\_:setNearAndFar:)](frameboundingbox%28__setnearandfar_%29.md): Moves the camera such that the specified bounding box lies entirely within the camera’s field of view.
- [look(at:)](look%28at_%29.md): Orients the camera to face toward the specified point.

# lookAt:from: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Sets the camera’s position and orients the camera to face toward the specified point.

## Declaration

```objectivec
- (void) lookAt:(vector_float3) focusPosition from:(vector_float3) cameraPosition;
```

## Parameters

- `focusPosition`: The point, in world space coordinates, to be made visible to the camera.
- `cameraPosition`: The new position, in world space coordinates, for the camera.

<a id="Discussion"></a>

## Discussion

When calculating the new camera position and orientation, this method assumes the camera points in the negative z-axis direction and that the positive y-axis represents the up direction for the camera’s view.

## See Also

### Managing Camera Position and Orientation

- [frameBoundingBox:setNearAndFar:](frameboundingbox%28__setnearandfar_%29.md): Moves the camera such that the specified bounding box lies entirely within the camera’s field of view.
- [lookAt:](look%28at_%29.md): Orients the camera to face toward the specified point.
