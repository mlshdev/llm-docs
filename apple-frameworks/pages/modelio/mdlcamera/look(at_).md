> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlcamera/look(at:)](https://developer.apple.com/documentation/modelio/mdlcamera/look(at:))

# look(at:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Orients the camera to face toward the specified point.

## Declaration

```swift
func look(at focusPosition: vector_float3)
```

## Parameters

- `focusPosition`: The point, in world space coordinates, to be made visible to the camera.

<a id="Discussion"></a>

## Discussion

When calculating the new camera orientation, this method assumes the camera points in the negative z-axis direction and that the positive y-axis represents the up direction for the camera’s view.

## See Also

### Managing Camera Position and Orientation

- [frameBoundingBox(\_:setNearAndFar:)](frameboundingbox%28__setnearandfar_%29.md): Moves the camera such that the specified bounding box lies entirely within the camera’s field of view.
- [look(at:from:)](look%28at_from_%29.md): Sets the camera’s position and orients the camera to face toward the specified point.

# lookAt: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Orients the camera to face toward the specified point.

## Declaration

```objectivec
- (void) lookAt:(vector_float3) focusPosition;
```

## Parameters

- `focusPosition`: The point, in world space coordinates, to be made visible to the camera.

<a id="Discussion"></a>

## Discussion

When calculating the new camera orientation, this method assumes the camera points in the negative z-axis direction and that the positive y-axis represents the up direction for the camera’s view.

## See Also

### Managing Camera Position and Orientation

- [frameBoundingBox:setNearAndFar:](frameboundingbox%28__setnearandfar_%29.md): Moves the camera such that the specified bounding box lies entirely within the camera’s field of view.
- [lookAt:from:](look%28at_from_%29.md): Sets the camera’s position and orients the camera to face toward the specified point.
