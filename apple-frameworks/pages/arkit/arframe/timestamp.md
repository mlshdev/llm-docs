> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arframe/timestamp](https://developer.apple.com/documentation/arkit/arframe/timestamp)

# timestamp (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The time at which the frame was captured.

## Declaration

```swift
var timestamp: TimeInterval { get }
```

## See Also

### Accessing camera data

- [camera](camera.md): Information about the camera position, orientation, and imaging parameters used to capture the frame.
- [capturedImage](capturedimage.md): A pixel buffer containing the image captured by the camera.
- [cameraGrainIntensity](cameragrainintensity.md): A value that specifies the amount of grain present in the camera grain texture.
- [cameraGrainTexture](cameragraintexture.md): A tileable Metal texture created by ARKit to match the visual characteristics of the current video stream.
- [exifData](exifdata.md): Auxiliary data for the captured image.

# timestamp (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The time at which the frame was captured.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval timestamp;
```

## See Also

### Accessing camera data

- [camera](camera.md): Information about the camera position, orientation, and imaging parameters used to capture the frame.
- [capturedImage](capturedimage.md): A pixel buffer containing the image captured by the camera.
- [cameraGrainIntensity](cameragrainintensity.md): A value that specifies the amount of grain present in the camera grain texture.
- [cameraGrainTexture](cameragraintexture.md): A tileable Metal texture created by ARKit to match the visual characteristics of the current video stream.
- [exifData](exifdata.md): Auxiliary data for the captured image.
