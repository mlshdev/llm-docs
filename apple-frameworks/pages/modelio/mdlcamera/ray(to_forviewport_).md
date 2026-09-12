> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlcamera/ray(to:forviewport:)](https://developer.apple.com/documentation/modelio/mdlcamera/ray(to:forviewport:))

# ray(to:forViewPort:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns a point, in 3D world coordinates, corresponding to the specified 2D view coordinates.

## Declaration

```swift
func ray(to pixel: vector_int2, forViewPort size: vector_int2) -> vector_float3
```

## Parameters

- `pixel`: A point in the 2D pixel coordinate system of a possible renderer’s view.
- `size`: The pixel dimensions of a possible renderer’s view.

<a id="return-value"></a>

## Return Value

A set of 3D world coordinates.

<a id="Discussion"></a>

## Discussion

This method projects a ray from the camera’s location in the direction of the specified view coordinates, returning the world coordinates where that ray intersects a plane at a distance of 1.0 units (of world coordinate space) away from the camera.

## See Also

### Managing Camera Perspective

- [projectionMatrix](projectionmatrix.md): A transformation matrix that determines the extent of a scene visible to the camera.
- [projection](projection.md): The style of projection transform used by the camera.
- [MDLCameraProjection](../mdlcameraprojection.md): Options for camera projection styles, used by the [projection](projection.md) property.
- [nearVisibilityDistance](nearvisibilitydistance.md): The camera’s near depth limit.
- [farVisibilityDistance](farvisibilitydistance.md): The camera’s far depth limit.
- [fieldOfView](fieldofview.md): The camera’s field of view, in degrees.
- [worldToMetersConversionScale](worldtometersconversionscale.md): The scale factor to meters from the world coordinate system containing the camera.

# rayTo:forViewPort: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns a point, in 3D world coordinates, corresponding to the specified 2D view coordinates.

## Declaration

```objectivec
- (vector_float3) rayTo:(vector_int2) pixel forViewPort:(vector_int2) size;
```

## Parameters

- `pixel`: A point in the 2D pixel coordinate system of a possible renderer’s view.
- `size`: The pixel dimensions of a possible renderer’s view.

<a id="return-value"></a>

## Return Value

A set of 3D world coordinates.

<a id="Discussion"></a>

## Discussion

This method projects a ray from the camera’s location in the direction of the specified view coordinates, returning the world coordinates where that ray intersects a plane at a distance of 1.0 units (of world coordinate space) away from the camera.

## See Also

### Managing Camera Perspective

- [projectionMatrix](projectionmatrix.md): A transformation matrix that determines the extent of a scene visible to the camera.
- [projection](projection.md): The style of projection transform used by the camera.
- [MDLCameraProjection](../mdlcameraprojection.md): Options for camera projection styles, used by the [projection](projection.md) property.
- [nearVisibilityDistance](nearvisibilitydistance.md): The camera’s near depth limit.
- [farVisibilityDistance](farvisibilitydistance.md): The camera’s far depth limit.
- [fieldOfView](fieldofview.md): The camera’s field of view, in degrees.
- [worldToMetersConversionScale](worldtometersconversionscale.md): The scale factor to meters from the world coordinate system containing the camera.
