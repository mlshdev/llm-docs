> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnrenderingsession-1hzh8](https://developer.apple.com/documentation/cinematic/cnrenderingsession-1hzh8)

# CNRenderingSession

**Framework:** Cinematic  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

An object representing the context in which rendering occurs.

## Declaration

```swift
class CNRenderingSession
```

## Topics

### Structures

- [CNRenderingSession.Attributes](cnrenderingsession-1hzh8/attributes.md): The rendering session asset attributes.
- [CNRenderingSession.FrameAttributes](cnrenderingsession-1hzh8/frameattributes.md): Controls the focus distance and aperture of the rendering for the frames.

### Initializers

- [init(commandQueue:sessionAttributes:preferredTransform:quality:)](cnrenderingsession-1hzh8/init%28commandqueue_sessionattributes_preferredtransform_quality_%29.md): Intializes an object for a rendering session.

### Instance Properties

- [commandQueue](cnrenderingsession-1hzh8/commandqueue.md): The command queue of a Metal device that creates the command buffer.
- [preferredTransform](cnrenderingsession-1hzh8/preferredtransform.md): The preferred transform of the rendered image for display purposes.
- [quality](cnrenderingsession-1hzh8/quality.md): The quality of rendering desired for a session.
- [sessionAttributes](cnrenderingsession-1hzh8/sessionattributes.md): Rendering session attributes for a Cinematic asset.

### Instance Methods

- [encodeRender(to:frameAttributes:sourceImage:sourceDisparity:destinationImage:)](cnrenderingsession-1hzh8/encoderender%28to_frameattributes_sourceimage_sourcedisparity_destinationimage_%29-3rknf.md): Encode a command to render a shallow depth of field (SDoF) image to a pixel buffer.
- [encodeRender(to:frameAttributes:sourceImage:sourceDisparity:destinationImage:)](cnrenderingsession-1hzh8/encoderender%28to_frameattributes_sourceimage_sourcedisparity_destinationimage_%29-58mjy.md): Deprecated. Encode a command to render a shallow depth of field (SDoF) image to a pixel buffer.
- [encodeRender(to:frameAttributes:sourceImage:sourceDisparity:destinationLuma:destinationChroma:)](cnrenderingsession-1hzh8/encoderender%28to_frameattributes_sourceimage_sourcedisparity_destinationluma_destinationchroma_%29-5ukp9.md): Encode a command to render a shallow depth of field (SDoF) image to two metal textures as luma and chroma.
- [encodeRender(to:frameAttributes:sourceImage:sourceDisparity:destinationLuma:destinationChroma:)](cnrenderingsession-1hzh8/encoderender%28to_frameattributes_sourceimage_sourcedisparity_destinationluma_destinationchroma_%29-9kvia.md): Deprecated. Encode a command to render a shallow depth of field (SDoF) image to two metal textures as luma and chroma.
- [encodeRender(to:frameAttributes:sourceImage:sourceDisparity:destinationRGBA:)](cnrenderingsession-1hzh8/encoderender%28to_frameattributes_sourceimage_sourcedisparity_destinationrgba_%29-1gaox.md): Encode a command to render a shallow depth of field (SDoF) image to a metal texture as RGBA.
- [encodeRender(to:frameAttributes:sourceImage:sourceDisparity:destinationRGBA:)](cnrenderingsession-1hzh8/encoderender%28to_frameattributes_sourceimage_sourcedisparity_destinationrgba_%29-3ff9.md): Deprecated. Encode a command to render a shallow depth of field (SDoF) image to a metal texture as RGBA.

### Type Properties

- [destinationPixelFormatTypes](cnrenderingsession-1hzh8/destinationpixelformattypes.md): A static number representing the video compositor’s required pixel buffer attributes context dictionary when implementing video compositing.
- [sourcePixelFormatTypes](cnrenderingsession-1hzh8/sourcepixelformattypes.md): The static pixel format types supported for the output destination.

## See Also

### Reading and rendering

- [CNAssetInfo](cnassetinfo-2ata2.md): An object that provides Cinematic-specific information about an asset, including its tracks.
- [CNCompositionInfo](cncompositioninfo-7eunn.md): An object that enables you to add the appropriate number of tracks for a Cinematic asset.
