> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnrenderingsession-1hzh8/encoderender(to:frameattributes:sourceimage:sourcedisparity:destinationimage:)-58mjy](https://developer.apple.com/documentation/cinematic/cnrenderingsession-1hzh8/encoderender(to:frameattributes:sourceimage:sourcedisparity:destinationimage:)-58mjy)

# encodeRender(to:frameAttributes:sourceImage:sourceDisparity:destinationImage:)

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ (deprecated in 27.0) · iPadOS 17.0+ (deprecated in 27.0) · Mac Catalyst · macOS 14.0+ (deprecated in 27.0) · tvOS 17.0+ (deprecated in 27.0)

Encode a command to render a shallow depth of field (SDoF) image to a pixel buffer.

> Use method using CVReadOnlyPixelBuffer: encodeRender(to:frameAttributes:sourceImage:sourceDisparity:destinationImage:)

## Declaration

```swift
func encodeRender(to commandBuffer: any MTLCommandBuffer, frameAttributes: CNRenderingSession.FrameAttributes, sourceImage: CVPixelBuffer, sourceDisparity: CVPixelBuffer, destinationImage: CVPixelBuffer) -> Bool
```

## Parameters

- `commandBuffer`: The metal command buffer on which to encode the command
- `frameAttributes`: Controls the focus distance and aperture of the rendering
- `sourceImage`: A pixel buffer read from the cinematicVideoTrack
- `sourceDisparity`: A pixel buffer read from the cinematicDisparityTrack
- `destinationImage`: The pixel buffer to which the SDoF image is rendered

<a id="return-value"></a>

## Return Value

Whether encoding the render command was successful
