> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/videoreader/read(contentsof:)](https://developer.apple.com/documentation/createmlcomponents/videoreader/read(contentsof:))

# read(contentsOf:)

**Framework:** Create ML Components  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Reads a video file as an async sequence of video frames.

## Declaration

```swift
static func read(contentsOf url: URL) async throws -> VideoReader.AsyncFrames
```

## Parameters

- `url`: A video file URL.

<a id="return-value"></a>

## Return Value

An async sequence of `VideoFrames`.

## See Also

### Reading

- [read(\_:)](read%28__%29.md): Reads a sequence of annotated files as an array of annotated async sequences of video frames.
- [readCamera(configuration:)](readcamera%28configuration_%29.md): Reads an async sequence of video frames captured with a video camera.
- [VideoReader.AsyncFrames](asyncframes.md): An async sequence of video frames.
- [VideoReader.CameraAsyncBuffers](cameraasyncbuffers.md): An async sequence of video frames.
- [VideoReader.CameraConfiguration](cameraconfiguration.md): The configuration of the camera to pass to the `readCamera` method.
