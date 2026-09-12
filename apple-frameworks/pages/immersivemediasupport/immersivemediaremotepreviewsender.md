> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/immersivemediaremotepreviewsender](https://developer.apple.com/documentation/immersivemediasupport/immersivemediaremotepreviewsender)

# ImmersiveMediaRemotePreviewSender

**Framework:** Immersive Media Support  
**Kind:** Class  
**Availability:** macOS 26.0+

An observable object that helps an app send the required data to all connected receiver applications to help facilitate the complete preview of the immersive media playback.

## Declaration

```swift
class ImmersiveMediaRemotePreviewSender
```

<a id="overview"></a>

## Overview

Applications have to implement the protocol [ImmersiveMediaPreviewMessagingProtocol](immersivemediapreviewmessagingprotocol.md) so that messages exchanged between sender and receivers are in the correct format for processing. Applications need to provide this as custom protocol when establishing the network connection between the sender and the receivers.

It’s also important to configure the NWParameters to be secure by adding TLS security options as the example below.

```swift
func setupNWParameters() -> NWParameters {
    let tcpOptions = NWProtocolTCP.Options()
    let tls = /* setup TLS security options */

    let ret = NWParameters(tls: tls, tcp: tcpOptions)

    let options = NWProtocolFramer.Options(definition: ImmersiveMediaPreviewMessagingProtocol.definition)
    ret.defaultProtocolStack.applicationProtocols.insert(options, at: 0)

    return ret
}
```

```swift
let parameters = setupNWParameters()
let browser = NWBrowser(for: .bonjour(type: serviceType, domain: nil), using: parameters)
```

```swift
let parameters = setupNWParameters()
let listener = try NWListener(using: parameters)
```

## Topics

### Initializers

- [init(networkParameters:)](immersivemediaremotepreviewsender/init%28networkparameters_%29.md): Creates a preview sender using the specified network parameters, if any.

### Instance Properties

- [connectedReceiverNames](immersivemediaremotepreviewsender/connectedreceivernames.md): An array with the names of all receives currently receiving data from this instance. When a receiver goes offline, this array will be automatically updated.
- [isReadyToSendData](immersivemediaremotepreviewsender/isreadytosenddata.md): A Boolean value that indicates whether this preview sender is ready to send data.
- [preferredFrameRate](immersivemediaremotepreviewsender/preferredframerate.md): The preferred frame rate to use when sending and previewing frames. This is optional; a value of `-1` enables the system to decide the best framerate based on network quality.
- [preferredVideoHeight](immersivemediaremotepreviewsender/preferredvideoheight.md): The preferred video height to be used when sending and previewing frames. This is optional; a value of `-1` enables the system to decide the best resolution.
- [preferredVideoWidth](immersivemediaremotepreviewsender/preferredvideowidth.md): The preferred video width to use when sending and previewing frames. This is optional; a value of `-1` enables the system to decide the best resolution.

### Instance Methods

- [connectReceiver(name:endpoint:)](immersivemediaremotepreviewsender/connectreceiver%28name_endpoint_%29.md): Adds an [ImmersiveMediaRemotePreviewReceiver](immersivemediaremotepreviewreceiver.md) to the sender as an active participant of the network preview. Any updates on the sender will be propagated to all active receivers (frames, camera information, static metadata).
- [disconnectReceiver(name:)](immersivemediaremotepreviewsender/disconnectreceiver%28name_%29.md): Disconnects a specific remote preview receiver associated with the name provided when [connectReceiver(name:endpoint:)](immersivemediaremotepreviewsender/connectreceiver%28name_endpoint_%29.md) was called.
- [send(audioBuffer:)](immersivemediaremotepreviewsender/send%28audiobuffer_%29.md): Sends an audio frame to all connected receivers.
- [send(taggedBuffers:presentationTimeStamp:frameDuration:)](immersivemediaremotepreviewsender/send%28taggedbuffers_presentationtimestamp_frameduration_%29.md): Sends a video frame to all the connected receivers using its tagged buffers representation.
- [send(venueDescriptor:)](immersivemediaremotepreviewsender/send%28venuedescriptor_%29.md): Sends a venue descriptor to all connected receivers.
- [send(videoBuffer:)](immersivemediaremotepreviewsender/send%28videobuffer_%29.md): Sends the video frame to the receivers.
- [send(videoFrame:presentationTimeStamp:frameDuration:metadata:)](immersivemediaremotepreviewsender/send%28videoframe_presentationtimestamp_frameduration_metadata_%29.md): Sends a video frame to all the connected receivers using its sample buffer representation.
- [sendVenueDescriptor(at:)](immersivemediaremotepreviewsender/sendvenuedescriptor%28at_%29.md): Sends an AIME to all connected receivers.
- [start()](immersivemediaremotepreviewsender/start%28%29.md): Starts the sender.
- [stop()](immersivemediaremotepreviewsender/stop%28%29.md): Stops the sender - all current connected receivers will be disconnected and streaming will stop.

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
- [ImmersiveMediaRemotePreviewReceiver](immersivemediaremotepreviewreceiver.md): An observable object that helps applications handle receiving commands and data sent from an immersive media remote preview sender object.
- [ImmersivePreviewRenderer](immersivepreviewrenderer.md): An object that renders an immersive video frame into a texture and exposes the command buffer for presentation.
