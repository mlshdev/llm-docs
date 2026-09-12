> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncamera/camerawithmdlcamera:](https://developer.apple.com/documentation/scenekit/scncamera/camerawithmdlcamera:)

# cameraWithMDLCamera:

**Interface language:** Objective-C

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a camera from the specified Model I/O camera object.

## Declaration

```objectivec
+ (instancetype) cameraWithMDLCamera:(MDLCamera *) mdlCamera;
```

## Parameters

- `mdlCamera`: A Model I/O camera object.

<a id="return-value"></a>

## Return Value

A new camera object.

<a id="Discussion"></a>

## Discussion

The Model I/O framework provides universal support for import, export, description, and processing of several 3D asset file formats and related resources. (For details, see [Model I/O](../../modelio.md).) The [MDLCamera](../../modelio/mdlcamera.md) class is a generic description of a viewpoint on a scene, supporting a superset of the attributes described by the [SCNCamera](../scncamera.md) class.

## See Also

### Creating a Camera

- [camera](camera.md): Deprecated. Creates a new camera object.
