> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnrenderingsession-1hzh8/encoderender(to:frameattributes:sourceimage:sourcedisparity:destinationrgba:)-3ff9](https://developer.apple.com/documentation/cinematic/cnrenderingsession-1hzh8/encoderender(to:frameattributes:sourceimage:sourcedisparity:destinationrgba:)-3ff9)

# encodeRender(to:frameAttributes:sourceImage:sourceDisparity:destinationRGBA:)

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ (deprecated in 27.0) · iPadOS 17.0+ (deprecated in 27.0) · Mac Catalyst · macOS 14.0+ (deprecated in 27.0) · tvOS 17.0+ (deprecated in 27.0)

Encode a command to render a shallow depth of field (SDoF) image to a metal texture as RGBA.

> Use method using CVReadOnlyPixelBuffer: encodeRender(to:frameAttributes:sourceImage:sourceDisparity:destinationRGBA:)

## Declaration

```swift
func encodeRender(to commandBuffer: any MTLCommandBuffer, frameAttributes: CNRenderingSession.FrameAttributes, sourceImage: CVPixelBuffer, sourceDisparity: CVPixelBuffer, destinationRGBA: any MTLTexture) -> Bool
```

## Parameters

- `commandBuffer`: The metal command buffer on which to encode the command
- `frameAttributes`: Controls the focus distance and aperture of the rendering
- `sourceImage`: A pixel buffer read from the cinematicVideoTrack
- `sourceDisparity`: A pixel buffer read from the cinematicDisparityTrack
- `destinationRGBA`: A metal texture to which the SDoF image is rendered in RGBA format

<a id="return-value"></a>

## Return Value

Whether encoding the render command was successful
