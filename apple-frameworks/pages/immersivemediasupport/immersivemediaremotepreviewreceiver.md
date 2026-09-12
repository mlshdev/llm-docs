> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/immersivemediaremotepreviewreceiver](https://developer.apple.com/documentation/immersivemediasupport/immersivemediaremotepreviewreceiver)

# ImmersiveMediaRemotePreviewReceiver

**Framework:** Immersive Media Support  
**Kind:** Class  
**Availability:** macOS 26.0+ · visionOS 26.0+

An observable object that helps applications handle receiving commands and data sent from an immersive media remote preview sender object.

## Declaration

```swift
class ImmersiveMediaRemotePreviewReceiver
```

<a id="overview"></a>

## Overview

This object helps applications receiving Immersive Video over the network with the intent of rendering a preview playback.

To properly render an immersive video preview, the receiver also needs access to:

- The current [ImmersiveVideoFrame](immersivevideoframe.md) to render.
- The current [VenueDescriptor](venuedescriptor.md) for rendering.
- The current [PresentationDescriptor](presentationdescriptor.md) that describes one or more [PresentationCommand](presentationcommand.md)instances active for the current frame.

## Topics

### Initializers

- [init()](immersivemediaremotepreviewreceiver/init%28%29.md): Creates a preview receiver object.

### Instance Properties

- [frame](immersivemediaremotepreviewreceiver/frame.md): The current remote preview of an immersive video frame.
- [presentationDescriptor](immersivemediaremotepreviewreceiver/presentationdescriptor.md): The current remote immersive video presentation descriptor.
- [states](immersivemediaremotepreviewreceiver/states.md): The states to use for monitoring the current state of the preview receiver so the app can monitor events.
- [venueDescriptor](immersivemediaremotepreviewreceiver/venuedescriptor.md): The current remote immersive video venue descriptor.

### Instance Methods

- [start(connection:)](immersivemediaremotepreviewreceiver/start%28connection_%29.md): Performs the necessary steps to start receiving remote Immersive video frames using the given network connection.
- [stop()](immersivemediaremotepreviewreceiver/stop%28%29.md): Stops receiving remote immersive video frames.

### Enumerations

- [ImmersiveMediaRemotePreviewReceiver.Status](immersivemediaremotepreviewreceiver/status.md): A value that represents the status of the immersive media remote preview receiver object.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Observable](https://developer.apple.com/documentation/observation/observable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Preview

- [ImmersiveMediaPreviewMessagingProtocol](immersivemediapreviewmessagingprotocol.md): An object that represents the messaging protocol a remote preview sender and receiver use to communicate.
- [ImmersiveMediaRemotePreviewSender](immersivemediaremotepreviewsender.md): An observable object that helps an app send the required data to all connected receiver applications to help facilitate the complete preview of the immersive media playback.
- [ImmersivePreviewRenderer](immersivepreviewrenderer.md): An object that renders an immersive video frame into a texture and exposes the command buffer for presentation.
