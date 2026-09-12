> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/videoreader/cameraasyncbuffers](https://developer.apple.com/documentation/createmlcomponents/videoreader/cameraasyncbuffers)

# VideoReader.CameraAsyncBuffers

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An async sequence of video frames.

## Declaration

```swift
struct CameraAsyncBuffers
```

<a id="overview"></a>

## Overview

This sequence allows iterating through the camera frames. Only one iterator can be created per sequence.

## Topics

### Getting the capture session

- [captureSession](cameraasyncbuffers/capturesession.md): The capture session.

### Getting the buffer count

- [count](cameraasyncbuffers/count.md): The number of frames. For this sequence count is always nil.

### Creating an iterator

- [makeAsyncIterator()](cameraasyncbuffers/makeasynciterator%28%29.md): Constructs an iterator.
- [VideoReader.CameraAsyncBuffers.Iterator](cameraasyncbuffers/iterator.md): An async iterator of video frames.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TemporalSequence](../temporalsequence.md)

## See Also

### Reading

- [read(\_:)](read%28__%29.md): Reads a sequence of annotated files as an array of annotated async sequences of video frames.
- [readCamera(configuration:)](readcamera%28configuration_%29.md): Reads an async sequence of video frames captured with a video camera.
- [read(contentsOf:)](read%28contentsof_%29.md): Reads a video file as an async sequence of video frames.
- [VideoReader.AsyncFrames](asyncframes.md): An async sequence of video frames.
- [VideoReader.CameraConfiguration](cameraconfiguration.md): The configuration of the camera to pass to the `readCamera` method.
