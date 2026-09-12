> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/cameravideoformat/supportedvideoformats(for:camerapositions:)](https://developer.apple.com/documentation/arkit/cameravideoformat/supportedvideoformats(for:camerapositions:))

# supportedVideoFormats(for:cameraPositions:)

**Framework:** ARKit  
**Kind:** Type Method  
**Availability:** visionOS 2.0+

Returns the video formats the provided camera type and camera position supports.

## Declaration

```swift
static func supportedVideoFormats(for cameraType: CameraFrameProvider.CameraType, cameraPositions: [CameraFrameProvider.CameraPosition]) -> [CameraVideoFormat]
```

## Parameters

- `cameraType`: The camera type.
- `cameraPositions`: The camera position.

<a id="return-value"></a>

## Return Value

An array of camera video formats.

## See Also

### Getting camera video format information

- [cameraPositions](camerapositions.md): The camera positions for this video format.
- [cameraType](cameratype.md): The camera type for this video format.
- [frameSize](framesize.md): The frame size for this video format.
- [pixelFormat](pixelformat.md): The pixel format for this video format.
- [maxFrameDuration](maxframeduration.md): The maximum frame duration for this video format, in seconds.
- [minFrameDuration](minframeduration.md): The minimum frame duration for this video format, in seconds.
- [description](description.md): A textual representation of this camera video format.
