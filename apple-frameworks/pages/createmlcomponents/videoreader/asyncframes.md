> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/videoreader/asyncframes](https://developer.apple.com/documentation/createmlcomponents/videoreader/asyncframes)

# VideoReader.AsyncFrames

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An async sequence of video frames.

## Declaration

```swift
struct AsyncFrames
```

<a id="overview"></a>

## Overview

This sequence allows iterating through the file only once.

## Topics

### Getting the properties

- [count](asyncframes/count.md): The number of frames. For this sequence count is always nil.
- [frameSize](asyncframes/framesize.md): The frame size.
- [nominalFrameRate](asyncframes/nominalframerate.md): The nominal frame rate.
- [timescale](asyncframes/timescale.md): The timescale of the video track.
- [url](asyncframes/url.md): The video file URL, used when throwing an error.
- [videoDuration](asyncframes/videoduration.md): The video duration.

### Creating an iterator

- [makeAsyncIterator()](asyncframes/makeasynciterator%28%29.md): Constructs an iterator.
- [VideoReader.AsyncFrames.Iterator](asyncframes/iterator.md): An async iterator of video frames.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)
- [TemporalSequence](../temporalsequence.md)

## See Also

### Reading

- [read(\_:)](read%28__%29.md): Reads a sequence of annotated files as an array of annotated async sequences of video frames.
- [readCamera(configuration:)](readcamera%28configuration_%29.md): Reads an async sequence of video frames captured with a video camera.
- [read(contentsOf:)](read%28contentsof_%29.md): Reads a video file as an async sequence of video frames.
- [VideoReader.CameraAsyncBuffers](cameraasyncbuffers.md): An async sequence of video frames.
- [VideoReader.CameraConfiguration](cameraconfiguration.md): The configuration of the camera to pass to the `readCamera` method.
