> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnrenderingsession-8yghc/encoderendertocommandbuffer:frameattributes:sourceimage:sourcedisparity:destinationluma:destinationchroma:](https://developer.apple.com/documentation/cinematic/cnrenderingsession-8yghc/encoderendertocommandbuffer:frameattributes:sourceimage:sourcedisparity:destinationluma:destinationchroma:)

# encodeRenderToCommandBuffer:frameAttributes:sourceImage:sourceDisparity:destinationLuma:destinationChroma:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Encodes a command to render a shallow depth of field (SDoF) image to two metal textures as luma and chroma.

## Declaration

```objectivec
- (BOOL) encodeRenderToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer frameAttributes:(CNRenderingSessionFrameAttributes *) frameAttributes sourceImage:(CVPixelBufferRef) sourceImage sourceDisparity:(CVPixelBufferRef) sourceDisparity destinationLuma:(id<MTLTexture>) destinationLuma destinationChroma:(id<MTLTexture>) destinationChroma;
```

## Parameters

- `commandBuffer`: The metal command buffer on which to encode the command.
- `frameAttributes`: Controls the focus distance and aperture of the rendering.
- `sourceImage`: A pixel buffer read from the cinematicVideoTrack.
- `sourceDisparity`: A pixel buffer read from the cinematicDisparityTrack.
- `destinationLuma`: The rendered metal texture for the luma of the SDoF image.
- `destinationChroma`: The rendered metal texture for the chroma of the SDoF image.
