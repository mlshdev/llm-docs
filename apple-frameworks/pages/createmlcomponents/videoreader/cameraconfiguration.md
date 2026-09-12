> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/videoreader/cameraconfiguration](https://developer.apple.com/documentation/createmlcomponents/videoreader/cameraconfiguration)

# VideoReader.CameraConfiguration

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The configuration of the camera to pass to the `readCamera` method.

## Declaration

```swift
struct CameraConfiguration
```

## Topics

### Creating a camera configuration

- [init()](cameraconfiguration/init%28%29.md): Creates a camera configuration.
- [init(position:pixelFormat:resolution:frameRate:)](cameraconfiguration/init%28position_pixelformat_resolution_framerate_%29.md): Creates a camera configuration.
- [VideoReader.CameraConfiguration.PixelFormat](cameraconfiguration/pixelformat-swift.enum.md): The camera pixel format.
- [VideoReader.CameraConfiguration.Position](cameraconfiguration/position-swift.enum.md): The position of the camera for an iOS device.
- [VideoReader.CameraConfiguration.Resolution](cameraconfiguration/resolution-swift.enum.md): The camera resolution.

### Getting the properties

- [cameraPosition](cameraconfiguration/cameraposition.md): Deprecated. The camera position. For an iOS device this can be either `.front` or `.rear`. For devices with just one camera this value is ignored. The default value is `.front`.
- [frameRate](cameraconfiguration/framerate.md): The camera frame rate. The default value is 30.0 frames per second.
- [pixelFormat](cameraconfiguration/pixelformat-swift.property.md): The camera pixel format. The default is `.bgra32`.
- [position](cameraconfiguration/position-swift.property.md): The camera position. For an iOS device this can be either `.front` or `.rear`. For devices with just one camera this value is ignored. The default value is `.front`.
- [resolution](cameraconfiguration/resolution-swift.property.md): The camera resolution specifying the quality of the video output. The default values is `.high`

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Reading

- [read(\_:)](read%28__%29.md): Reads a sequence of annotated files as an array of annotated async sequences of video frames.
- [readCamera(configuration:)](readcamera%28configuration_%29.md): Reads an async sequence of video frames captured with a video camera.
- [read(contentsOf:)](read%28contentsof_%29.md): Reads a video file as an async sequence of video frames.
- [VideoReader.AsyncFrames](asyncframes.md): An async sequence of video frames.
- [VideoReader.CameraAsyncBuffers](cameraasyncbuffers.md): An async sequence of video frames.
