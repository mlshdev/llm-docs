> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlcamera/nearvisibilitydistance](https://developer.apple.com/documentation/modelio/mdlcamera/nearvisibilitydistance)

# nearVisibilityDistance (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The camera’s near depth limit.

## Declaration

```swift
var nearVisibilityDistance: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The near value determines the minimal distance between the camera and a visible surface. If a surface is closer to the camera than this distance, the surface is clipped and does not appear.

## See Also

### Managing Camera Perspective

- [projectionMatrix](projectionmatrix.md): A transformation matrix that determines the extent of a scene visible to the camera.
- [projection](projection.md): The style of projection transform used by the camera.
- [MDLCameraProjection](../mdlcameraprojection.md): Options for camera projection styles, used by the [projection](projection.md) property.
- [farVisibilityDistance](farvisibilitydistance.md): The camera’s far depth limit.
- [fieldOfView](fieldofview.md): The camera’s field of view, in degrees.
- [ray(to:forViewPort:)](ray%28to_forviewport_%29.md): Returns a point, in 3D world coordinates, corresponding to the specified 2D view coordinates.
- [worldToMetersConversionScale](worldtometersconversionscale.md): The scale factor to meters from the world coordinate system containing the camera.

# nearVisibilityDistance (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The camera’s near depth limit.

## Declaration

```objectivec
@property (nonatomic, assign) float nearVisibilityDistance;
```

<a id="Discussion"></a>

## Discussion

The near value determines the minimal distance between the camera and a visible surface. If a surface is closer to the camera than this distance, the surface is clipped and does not appear.

## See Also

### Managing Camera Perspective

- [projectionMatrix](projectionmatrix.md): A transformation matrix that determines the extent of a scene visible to the camera.
- [projection](projection.md): The style of projection transform used by the camera.
- [MDLCameraProjection](../mdlcameraprojection.md): Options for camera projection styles, used by the [projection](projection.md) property.
- [farVisibilityDistance](farvisibilitydistance.md): The camera’s far depth limit.
- [fieldOfView](fieldofview.md): The camera’s field of view, in degrees.
- [rayTo:forViewPort:](ray%28to_forviewport_%29.md): Returns a point, in 3D world coordinates, corresponding to the specified 2D view coordinates.
- [worldToMetersConversionScale](worldtometersconversionscale.md): The scale factor to meters from the world coordinate system containing the camera.
