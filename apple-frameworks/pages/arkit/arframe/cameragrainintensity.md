> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arframe/cameragrainintensity](https://developer.apple.com/documentation/arkit/arframe/cameragrainintensity)

# cameraGrainIntensity (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A value that specifies the amount of grain present in the camera grain texture.

## Declaration

```swift
var cameraGrainIntensity: Float { get }
```

<a id="Discussion"></a>

## Discussion

This property is normalized within the range \[0..1\], where zero specifies no grain, and one specifies the maximum amount of grain.

When you apply this value to the depth component of the [cameraGrainTexture](cameragraintexture.md), you select among variations of visual image noise data stored in the Metal texture that conceptually match this level of intensity.

## See Also

### Accessing camera data

- [camera](camera.md): Information about the camera position, orientation, and imaging parameters used to capture the frame.
- [capturedImage](capturedimage.md): A pixel buffer containing the image captured by the camera.
- [timestamp](timestamp.md): The time at which the frame was captured.
- [cameraGrainTexture](cameragraintexture.md): A tileable Metal texture created by ARKit to match the visual characteristics of the current video stream.
- [exifData](exifdata.md): Auxiliary data for the captured image.

# cameraGrainIntensity (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A value that specifies the amount of grain present in the camera grain texture.

## Declaration

```objectivec
@property (nonatomic, readonly) float cameraGrainIntensity;
```

<a id="Discussion"></a>

## Discussion

This property is normalized within the range \[0..1\], where zero specifies no grain, and one specifies the maximum amount of grain.

When you apply this value to the depth component of the [cameraGrainTexture](cameragraintexture.md), you select among variations of visual image noise data stored in the Metal texture that conceptually match this level of intensity.

## See Also

### Accessing camera data

- [camera](camera.md): Information about the camera position, orientation, and imaging parameters used to capture the frame.
- [capturedImage](capturedimage.md): A pixel buffer containing the image captured by the camera.
- [timestamp](timestamp.md): The time at which the frame was captured.
- [cameraGrainTexture](cameragraintexture.md): A tileable Metal texture created by ARKit to match the visual characteristics of the current video stream.
- [exifData](exifdata.md): Auxiliary data for the captured image.
