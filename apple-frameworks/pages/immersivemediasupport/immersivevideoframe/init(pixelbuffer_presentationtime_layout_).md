> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/immersivemediasupport/immersivevideoframe/init(pixelbuffer:presentationtime:layout:)

# init(pixelBuffer:presentationTime:layout:)

**Framework:** Immersive Media Support  
**Kind:** Initializer  
**Availability:** macOS 26.0+ · visionOS 26.0+

Creates a video frame with one pixelBuffer and specified layout.

## Declaration

```swift
init(pixelBuffer: CVPixelBuffer, presentationTime: CMTime, layout: ImmersiveVideoFrame.VideoLayout = .sideBySide)
```

## Parameters

- `pixelBuffer`: pixelBuffer containing the video frame.
- `presentationTime`: Presentation time of the video frame.
- `layout`: How left and right eye is packed into the pixelBuffer. See [ImmersiveVideoFrame.VideoLayout](videolayout.md) for the valid options.
