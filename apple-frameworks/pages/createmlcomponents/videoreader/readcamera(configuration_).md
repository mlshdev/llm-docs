> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/videoreader/readcamera(configuration:)](https://developer.apple.com/documentation/createmlcomponents/videoreader/readcamera(configuration:))

# readCamera(configuration:)

**Framework:** Create ML Components  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Reads an async sequence of video frames captured with a video camera.

## Declaration

```swift
static func readCamera(configuration: VideoReader.CameraConfiguration) async throws -> VideoReader.CameraAsyncBuffers
```

## Parameters

- `configuration`: The camera configuration

<a id="return-value"></a>

## Return Value

An async sequence of camera video frames.

## See Also

### Reading

- [read(\_:)](read%28__%29.md): Reads a sequence of annotated files as an array of annotated async sequences of video frames.
- [read(contentsOf:)](read%28contentsof_%29.md): Reads a video file as an async sequence of video frames.
- [VideoReader.AsyncFrames](asyncframes.md): An async sequence of video frames.
- [VideoReader.CameraAsyncBuffers](cameraasyncbuffers.md): An async sequence of video frames.
- [VideoReader.CameraConfiguration](cameraconfiguration.md): The configuration of the camera to pass to the `readCamera` method.
