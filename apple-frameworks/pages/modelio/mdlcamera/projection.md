> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlcamera/projection](https://developer.apple.com/documentation/modelio/mdlcamera/projection)

# projection (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The style of projection transform used by the camera.

## Declaration

```swift
var projection: MDLCameraProjection { get set }
```

<a id="Discussion"></a>

## Discussion

A renderer can use this information to change its interpretation or recalculation of the [projectionMatrix](projectionmatrix.md) property.

## See Also

### Managing Camera Perspective

- [projectionMatrix](projectionmatrix.md): A transformation matrix that determines the extent of a scene visible to the camera.
- [MDLCameraProjection](../mdlcameraprojection.md): Options for camera projection styles, used by the [projection](projection.md) property.
- [nearVisibilityDistance](nearvisibilitydistance.md): The camera’s near depth limit.
- [farVisibilityDistance](farvisibilitydistance.md): The camera’s far depth limit.
- [fieldOfView](fieldofview.md): The camera’s field of view, in degrees.
- [ray(to:forViewPort:)](ray%28to_forviewport_%29.md): Returns a point, in 3D world coordinates, corresponding to the specified 2D view coordinates.
- [worldToMetersConversionScale](worldtometersconversionscale.md): The scale factor to meters from the world coordinate system containing the camera.

# projection (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The style of projection transform used by the camera.

## Declaration

```objectivec
@property (nonatomic, assign) MDLCameraProjection projection;
```

<a id="Discussion"></a>

## Discussion

A renderer can use this information to change its interpretation or recalculation of the [projectionMatrix](projectionmatrix.md) property.

## See Also

### Managing Camera Perspective

- [projectionMatrix](projectionmatrix.md): A transformation matrix that determines the extent of a scene visible to the camera.
- [MDLCameraProjection](../mdlcameraprojection.md): Options for camera projection styles, used by the [projection](projection.md) property.
- [nearVisibilityDistance](nearvisibilitydistance.md): The camera’s near depth limit.
- [farVisibilityDistance](farvisibilitydistance.md): The camera’s far depth limit.
- [fieldOfView](fieldofview.md): The camera’s field of view, in degrees.
- [rayTo:forViewPort:](ray%28to_forviewport_%29.md): Returns a point, in 3D world coordinates, corresponding to the specified 2D view coordinates.
- [worldToMetersConversionScale](worldtometersconversionscale.md): The scale factor to meters from the world coordinate system containing the camera.
