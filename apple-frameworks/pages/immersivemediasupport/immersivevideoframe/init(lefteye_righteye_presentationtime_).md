> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/immersivevideoframe/init(lefteye:righteye:presentationtime:)](https://developer.apple.com/documentation/immersivemediasupport/immersivevideoframe/init(lefteye:righteye:presentationtime:))

# init(leftEye:rightEye:presentationTime:)

**Framework:** Immersive Media Support  
**Kind:** Initializer  
**Availability:** macOS 26.0+ · visionOS 26.0+

Creates a video frame from the left and right eye pixel buffers.

## Declaration

```swift
init(leftEye: CVPixelBuffer, rightEye: CVPixelBuffer, presentationTime: CMTime)
```

## Parameters

- `leftEye`: leftEye pixel buffer.
- `rightEye`: rightEye pixel buffer.
- `presentationTime`: Presentation time of the video frame.
