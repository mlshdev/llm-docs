> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlcamera/farvisibilitydistance](https://developer.apple.com/documentation/modelio/mdlcamera/farvisibilitydistance)

# farVisibilityDistance (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The camera’s far depth limit.

## Declaration

```swift
var farVisibilityDistance: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The far value determines the maximal distance between the camera and a visible surface. If a surface is farther from the camera than this distance, the surface is clipped and does not appear.

## See Also

### Managing Camera Perspective

- [projectionMatrix](projectionmatrix.md): A transformation matrix that determines the extent of a scene visible to the camera.
- [projection](projection.md): The style of projection transform used by the camera.
- [MDLCameraProjection](../mdlcameraprojection.md): Options for camera projection styles, used by the [projection](projection.md) property.
- [nearVisibilityDistance](nearvisibilitydistance.md): The camera’s near depth limit.
- [fieldOfView](fieldofview.md): The camera’s field of view, in degrees.
- [ray(to:forViewPort:)](ray%28to_forviewport_%29.md): Returns a point, in 3D world coordinates, corresponding to the specified 2D view coordinates.
- [worldToMetersConversionScale](worldtometersconversionscale.md): The scale factor to meters from the world coordinate system containing the camera.

# farVisibilityDistance (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The camera’s far depth limit.

## Declaration

```objectivec
@property (nonatomic, assign) float farVisibilityDistance;
```

<a id="Discussion"></a>

## Discussion

The far value determines the maximal distance between the camera and a visible surface. If a surface is farther from the camera than this distance, the surface is clipped and does not appear.

## See Also

### Managing Camera Perspective

- [projectionMatrix](projectionmatrix.md): A transformation matrix that determines the extent of a scene visible to the camera.
- [projection](projection.md): The style of projection transform used by the camera.
- [MDLCameraProjection](../mdlcameraprojection.md): Options for camera projection styles, used by the [projection](projection.md) property.
- [nearVisibilityDistance](nearvisibilitydistance.md): The camera’s near depth limit.
- [fieldOfView](fieldofview.md): The camera’s field of view, in degrees.
- [rayTo:forViewPort:](ray%28to_forviewport_%29.md): Returns a point, in 3D world coordinates, corresponding to the specified 2D view coordinates.
- [worldToMetersConversionScale](worldtometersconversionscale.md): The scale factor to meters from the world coordinate system containing the camera.
