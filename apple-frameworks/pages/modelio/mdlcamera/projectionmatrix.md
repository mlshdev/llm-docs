> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlcamera/projectionmatrix](https://developer.apple.com/documentation/modelio/mdlcamera/projectionmatrix)

# projectionMatrix (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A transformation matrix that determines the extent of a scene visible to the camera.

## Declaration

```swift
var projectionMatrix: matrix_float4x4 { get }
```

<a id="Discussion"></a>

## Discussion

Model I/O  automatically derives this property from the [nearVisibilityDistance](nearvisibilitydistance.md), [farVisibilityDistance](farvisibilitydistance.md), and [fieldOfView](fieldofview.md) properties. A renderer uses this matrix, along with view and model matrices derived from the camera’s position and orientation (its inherited [transform](../mdlobject/transform.md) property) and the content to be rendered, to transform vertex data to the renderer’s 2D screen space at render time.

## See Also

### Managing Camera Perspective

- [projection](projection.md): The style of projection transform used by the camera.
- [MDLCameraProjection](../mdlcameraprojection.md): Options for camera projection styles, used by the [projection](projection.md) property.
- [nearVisibilityDistance](nearvisibilitydistance.md): The camera’s near depth limit.
- [farVisibilityDistance](farvisibilitydistance.md): The camera’s far depth limit.
- [fieldOfView](fieldofview.md): The camera’s field of view, in degrees.
- [ray(to:forViewPort:)](ray%28to_forviewport_%29.md): Returns a point, in 3D world coordinates, corresponding to the specified 2D view coordinates.
- [worldToMetersConversionScale](worldtometersconversionscale.md): The scale factor to meters from the world coordinate system containing the camera.

# projectionMatrix (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A transformation matrix that determines the extent of a scene visible to the camera.

## Declaration

```objectivec
@property (nonatomic, readonly) matrix_float4x4 projectionMatrix;
```

<a id="Discussion"></a>

## Discussion

Model I/O  automatically derives this property from the [nearVisibilityDistance](nearvisibilitydistance.md), [farVisibilityDistance](farvisibilitydistance.md), and [fieldOfView](fieldofview.md) properties. A renderer uses this matrix, along with view and model matrices derived from the camera’s position and orientation (its inherited [transform](../mdlobject/transform.md) property) and the content to be rendered, to transform vertex data to the renderer’s 2D screen space at render time.

## See Also

### Managing Camera Perspective

- [projection](projection.md): The style of projection transform used by the camera.
- [MDLCameraProjection](../mdlcameraprojection.md): Options for camera projection styles, used by the [projection](projection.md) property.
- [nearVisibilityDistance](nearvisibilitydistance.md): The camera’s near depth limit.
- [farVisibilityDistance](farvisibilitydistance.md): The camera’s far depth limit.
- [fieldOfView](fieldofview.md): The camera’s field of view, in degrees.
- [rayTo:forViewPort:](ray%28to_forviewport_%29.md): Returns a point, in 3D world coordinates, corresponding to the specified 2D view coordinates.
- [worldToMetersConversionScale](worldtometersconversionscale.md): The scale factor to meters from the world coordinate system containing the camera.
