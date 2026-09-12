> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arframe/camera](https://developer.apple.com/documentation/arkit/arframe/camera)

# camera (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Information about the camera position, orientation, and imaging parameters used to capture the frame.

## Declaration

```swift
@NSCopying var camera: ARCamera { get }
```

## See Also

### Accessing camera data

- [capturedImage](capturedimage.md): A pixel buffer containing the image captured by the camera.
- [timestamp](timestamp.md): The time at which the frame was captured.
- [cameraGrainIntensity](cameragrainintensity.md): A value that specifies the amount of grain present in the camera grain texture.
- [cameraGrainTexture](cameragraintexture.md): A tileable Metal texture created by ARKit to match the visual characteristics of the current video stream.
- [exifData](exifdata.md): Auxiliary data for the captured image.

# camera (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Information about the camera position, orientation, and imaging parameters used to capture the frame.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) ARCamera * camera;
```

## See Also

### Accessing camera data

- [capturedImage](capturedimage.md): A pixel buffer containing the image captured by the camera.
- [timestamp](timestamp.md): The time at which the frame was captured.
- [cameraGrainIntensity](cameragrainintensity.md): A value that specifies the amount of grain present in the camera grain texture.
- [cameraGrainTexture](cameragraintexture.md): A tileable Metal texture created by ARKit to match the visual characteristics of the current video stream.
- [exifData](exifdata.md): Auxiliary data for the captured image.
