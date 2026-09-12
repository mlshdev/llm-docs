> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/immersivepreviewrenderer](https://developer.apple.com/documentation/immersivemediasupport/immersivepreviewrenderer)

# ImmersivePreviewRenderer

**Framework:** Immersive Media Support  
**Kind:** Class  
**Availability:** macOS 27.0+ · visionOS 27.0+

An object that renders an immersive video frame into a texture and exposes the command buffer for presentation.

## Declaration

```swift
@MainActor class ImmersivePreviewRenderer
```

<a id="overview"></a>

## Overview

`ImmersivePreviewRenderer` provides a high-level interface for rendering immersive video content with support for stereoscopic rendering, presentation commands, and venue-specific camera models. It manages the rendering pipeline including geometry setup, texture management, and frame processing.

The renderer supports two rendering modes:

- **macOS**: Rendering directly to a specified texture with manual camera control via rotation and field of view parameters.
- **visionOS**: Rendering to `LayerRenderer.Drawable` instances with automatic head tracking and view management.

Create a renderer with a venue descriptor that defines the camera models and rendering geometry:

```swift
let venueDescriptor = try VenueDescriptor(aimeFileURL: aimeURL)
let renderer = ImmersivePreviewRenderer(venueDescriptor: venueDescriptor)
```

On macOS, render frames directly to a texture:

```swift
await renderer.process(
    frame,
    for: .left,
    rotation: currentRotation,
    fieldOfView: 90,
    presentationDescriptor: descriptor,
    renderTexture: drawable.texture
)
```

On visionOS, integrate with CompositorServices for immersive rendering:

```swift
await renderer.process(
    frame,
    presentationDescriptor: descriptor,
    drawable: drawable
)
```

Finally, present and commit command buffer:

```swift
if let commandBuffer = renderer.commandBuffer {
    commandBuffer.present(drawable)
    commandBuffer.commit()
}
```

## Topics

### Initializers

- [init(device:venueDescriptor:depthPixelFormat:colorPixelFormat:)](immersivepreviewrenderer/init%28device_venuedescriptor_depthpixelformat_colorpixelformat_%29.md): Creates an immersive preview renderer.

### Instance Properties

- [commandBuffer](immersivepreviewrenderer/commandbuffer.md): The command buffer of the render.
- [venueDescriptor](immersivepreviewrenderer/venuedescriptor.md): The venue descriptor for rendering immersive video frames.

### Instance Methods

- [process(\_:for:rotation:fieldOfView:presentationDescriptor:renderTexture:)](immersivepreviewrenderer/process%28__for_rotation_fieldofview_presentationdescriptor_rendertexture_%29.md): Performs the rendering of an immersive video frame.
- [process(\_:presentationDescriptor:drawable:)](immersivepreviewrenderer/process%28__presentationdescriptor_drawable_%29.md): Performs the rendering of an immersive video frame.

### Enumerations

- [ImmersivePreviewRenderer.Eye](immersivepreviewrenderer/eye.md): An enumeration that represents the eye of the user.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Preview

- [ImmersiveMediaPreviewMessagingProtocol](immersivemediapreviewmessagingprotocol.md): An object that represents the messaging protocol a remote preview sender and receiver use to communicate.
- [ImmersiveMediaRemotePreviewSender](immersivemediaremotepreviewsender.md): An observable object that helps an app send the required data to all connected receiver applications to help facilitate the complete preview of the immersive media playback.
- [ImmersiveMediaRemotePreviewReceiver](immersivemediaremotepreviewreceiver.md): An observable object that helps applications handle receiving commands and data sent from an immersive media remote preview sender object.
