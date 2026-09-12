> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/videoreader/cameraconfiguration/pixelformat-swift.property](https://developer.apple.com/documentation/createmlcomponents/videoreader/cameraconfiguration/pixelformat-swift.property)

# pixelFormat

**Framework:** Create ML Components  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The camera pixel format. The default is `.bgra32`.

## Declaration

```swift
var pixelFormat: VideoReader.CameraConfiguration.PixelFormat
```

## See Also

### Getting the properties

- [cameraPosition](cameraposition.md): Deprecated. The camera position. For an iOS device this can be either `.front` or `.rear`. For devices with just one camera this value is ignored. The default value is `.front`.
- [frameRate](framerate.md): The camera frame rate. The default value is 30.0 frames per second.
- [position](position-swift.property.md): The camera position. For an iOS device this can be either `.front` or `.rear`. For devices with just one camera this value is ignored. The default value is `.front`.
- [resolution](resolution-swift.property.md): The camera resolution specifying the quality of the video output. The default values is `.high`
