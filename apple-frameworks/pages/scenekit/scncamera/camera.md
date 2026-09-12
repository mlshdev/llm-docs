> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncamera/camera](https://developer.apple.com/documentation/scenekit/scncamera/camera)

# camera

**Interface language:** Objective-C

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a new camera object.

## Declaration

```objectivec
+ (instancetype) camera;
```

<a id="return-value"></a>

## Return Value

A new camera object.

<a id="Discussion"></a>

## Discussion

To use the camera to display a scene, attach it to the [camera](../scnnode/camera.md) property of a node and then select that node using the [pointOfView](../scnscenerenderer/pointofview.md) property of the view (or layer or renderer) rendering the scene.

## See Also

### Creating a Camera

- [cameraWithMDLCamera:](camerawithmdlcamera_.md): Deprecated. Creates a camera from the specified Model I/O camera object.
