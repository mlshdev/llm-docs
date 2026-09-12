> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/videoreader/cameraconfiguration/cameraposition](https://developer.apple.com/documentation/createmlcomponents/videoreader/cameraconfiguration/cameraposition)

# cameraPosition

**Framework:** Create ML Components  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ (deprecated in 17.0) · iPadOS 16.0+ (deprecated in 17.0) · Mac Catalyst 16.0+ (deprecated in 17.0) · macOS 13.0+ (deprecated in 14.0) · visionOS 1.0+

The camera position. For an iOS device this can be either `.front` or `.rear`. For devices with just one camera this value is ignored. The default value is `.front`.

> Use the position property instead.

## Declaration

```swift
var cameraPosition: VideoReader.CameraConfiguration.Position { get }
```

## See Also

### Getting the properties

- [frameRate](framerate.md): The camera frame rate. The default value is 30.0 frames per second.
- [pixelFormat](pixelformat-swift.property.md): The camera pixel format. The default is `.bgra32`.
- [position](position-swift.property.md): The camera position. For an iOS device this can be either `.front` or `.rear`. For devices with just one camera this value is ignored. The default value is `.front`.
- [resolution](resolution-swift.property.md): The camera resolution specifying the quality of the video output. The default values is `.high`
