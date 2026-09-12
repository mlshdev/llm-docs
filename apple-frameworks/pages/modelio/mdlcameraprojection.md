> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlcameraprojection](https://developer.apple.com/documentation/modelio/mdlcameraprojection)

# MDLCameraProjection (Swift)

**Framework:** Model I/O  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Options for camera projection styles, used by the [projection](mdlcamera/projection.md) property.

## Declaration

```swift
enum MDLCameraProjection
```

## Topics

### Constants

- [MDLCameraProjection.orthographic](mdlcameraprojection/orthographic.md): An orthographic projection.
- [MDLCameraProjection.perspective](mdlcameraprojection/perspective.md): A perspective projection.

### Initializers

- [init(rawValue:)](mdlcameraprojection/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing Camera Perspective

- [projectionMatrix](mdlcamera/projectionmatrix.md): A transformation matrix that determines the extent of a scene visible to the camera.
- [projection](mdlcamera/projection.md): The style of projection transform used by the camera.
- [nearVisibilityDistance](mdlcamera/nearvisibilitydistance.md): The camera’s near depth limit.
- [farVisibilityDistance](mdlcamera/farvisibilitydistance.md): The camera’s far depth limit.
- [fieldOfView](mdlcamera/fieldofview.md): The camera’s field of view, in degrees.
- [ray(to:forViewPort:)](mdlcamera/ray%28to_forviewport_%29.md): Returns a point, in 3D world coordinates, corresponding to the specified 2D view coordinates.
- [worldToMetersConversionScale](mdlcamera/worldtometersconversionscale.md): The scale factor to meters from the world coordinate system containing the camera.

# MDLCameraProjection (Objective-C)

**Framework:** Model I/O  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Options for camera projection styles, used by the [projection](mdlcamera/projection.md) property.

## Declaration

```objectivec
enum MDLCameraProjection : NSUInteger;
```

## Topics

### Constants

- [MDLCameraProjectionOrthographic](mdlcameraprojection/orthographic.md): An orthographic projection.
- [MDLCameraProjectionPerspective](mdlcameraprojection/perspective.md): A perspective projection.

## See Also

### Managing Camera Perspective

- [projectionMatrix](mdlcamera/projectionmatrix.md): A transformation matrix that determines the extent of a scene visible to the camera.
- [projection](mdlcamera/projection.md): The style of projection transform used by the camera.
- [nearVisibilityDistance](mdlcamera/nearvisibilitydistance.md): The camera’s near depth limit.
- [farVisibilityDistance](mdlcamera/farvisibilitydistance.md): The camera’s far depth limit.
- [fieldOfView](mdlcamera/fieldofview.md): The camera’s field of view, in degrees.
- [rayTo:forViewPort:](mdlcamera/ray%28to_forviewport_%29.md): Returns a point, in 3D world coordinates, corresponding to the specified 2D view coordinates.
- [worldToMetersConversionScale](mdlcamera/worldtometersconversionscale.md): The scale factor to meters from the world coordinate system containing the camera.
