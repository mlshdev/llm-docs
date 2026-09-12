> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/immersivevideoframe](https://developer.apple.com/documentation/immersivemediasupport/immersivevideoframe)

# ImmersiveVideoFrame

**Framework:** Immersive Media Support  
**Kind:** Structure  
**Availability:** macOS 26.0+ · visionOS 26.0+

A type that represents an immersive video frame, including its layout, presentation time, and pixel buffer data.

## Declaration

```swift
struct ImmersiveVideoFrame
```

## Topics

### Initializers

- [init(leftEye:rightEye:presentationTime:)](immersivevideoframe/init%28lefteye_righteye_presentationtime_%29.md): Creates a video frame from the left and right eye pixel buffers.
- [init(pixelBuffer:presentationTime:layout:)](immersivevideoframe/init%28pixelbuffer_presentationtime_layout_%29.md): Creates a video frame with one pixelBuffer and specified layout.

### Instance Properties

- [layout](immersivevideoframe/layout.md): Video layout associated with the video frame pixel buffers.
- [pixelBuffers](immersivevideoframe/pixelbuffers.md): An array of pixel buffers associated with this immersive frame.
- [presentationTime](immersivevideoframe/presentationtime.md): Presentation timestamp associated with the pixel buffers.

### Enumerations

- [ImmersiveVideoFrame.VideoLayout](immersivevideoframe/videolayout.md): A value that specifies the layout of left and right eyes within an immersive video frame.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Immersive video rendering support

- [ImmersiveCameraViewModel](immersivecameraviewmodel.md): A view model that holds all the resources needed to render an immersive camera view.
- [ImmersiveVideoMask](immersivevideomask.md): A video mask to use during video rendering to smooth the edges of the mesh.
