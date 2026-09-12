> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingsession](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingsession)

# FoveatedStreamingSession

**Framework:** Foveated Streaming  
**Kind:** Class  
**Availability:** visionOS 26.4+

A session that manages a foveated streaming connection to a local or remote streaming endpoint.

## Declaration

```swift
@MainActor final class FoveatedStreamingSession
```

## Mentioned In

- [Analyzing the performance of a foveated streaming session](analyzing-the-performance-of-a-foveated-streaming-session.md)
- [Streaming a CloudXR application to Apple Vision Pro with foveation](streaming-a-cloudxr-application-to-apple-vision-pro-with-foveation.md)

<a id="overview"></a>

## Overview

Use `FoveatedStreamingSession` to establish and manage streaming connections from Apple Vision Pro to local or remote endpoints. The session handles connection life cycle, monitors streaming status, and provides access to bidirectional message channels for custom data exchange.

You create a `FoveatedStreamingSession` object directly, typically on app initialization. After creating your session object, use it to initialize the [ImmersiveSpace](https://developer.apple.com/documentation/swiftui/immersivespace) that displays the streamed content. To begin streaming spatial content, call the [connect(endpoint:)](foveatedstreamingsession/connect%28endpoint_%29.md) function. The connection will fail if your app doesn’t have the [Foveated Streaming Session](../bundleresources/entitlements/com.apple.developer.foveated-streaming-session.md) entitlement.

The following example shows how to connect to a stream and present its content in an immersive space:

```swift
struct FoveatedStreamingApp: App {
    let session = FoveatedStreamingSession()

    var body: some Scene {
        WindowGroup {
            Button("Connect") {
                Task {
                    try await session.connect(endpoint: .systemDiscovered)
                }
            }
        }

        ImmersiveSpace(foveatedStreaming: session)
    }
}
```

## Topics

### Classes

- [FoveatedStreamingSession.MessageChannel](foveatedstreamingsession/messagechannel.md): A bidirectional channel for sending and receiving custom data.

### Structures

- [FoveatedStreamingSession.DisconnectReason](foveatedstreamingsession/disconnectreason.md): A description of why a foveated streaming session’s status is in the disconnected state.
- [FoveatedStreamingSession.Endpoint](foveatedstreamingsession/endpoint.md): A streaming endpoint that a foveated streaming session can connect to.
- [FoveatedStreamingSession.ImmersivePresentationBehaviors](foveatedstreamingsession/immersivepresentationbehaviors-swift.struct.md): The presentation behaviors describing when the immersive space that hosts the streamed content is presented and dismissed.
- [FoveatedStreamingSession.StreamingProvider](foveatedstreamingsession/streamingprovider.md): Represents a streaming provider extension.

### Initializers

- [init()](foveatedstreamingsession/init%28%29.md): Initializes the FoveatedStreamingSession.

### Instance Properties

- [availableMessageChannels](foveatedstreamingsession/availablemessagechannels.md): A list of all available message channels in this session.
- [immersivePresentationBehaviors](foveatedstreamingsession/immersivepresentationbehaviors-swift.property.md): An optional set of behaviors which assist in automatically presenting the session’s immersive space.
- [immersiveSpaceFromRemoteSceneTransform](foveatedstreamingsession/immersivespacefromremotescenetransform.md): Deprecated. A transform matrix which maps from the streamed scene’s coordinate space origin to the origin of the app’s immersive space.
- [immersiveSpaceFromRemoteSpaceTransform](foveatedstreamingsession/immersivespacefromremotespacetransform.md): A transform matrix which maps from the streamed scene’s coordinate space origin to the origin of the app’s immersive space.
- [requestedInputCapabilities](foveatedstreamingsession/requestedinputcapabilities.md): A list of input data types which should be included as part of the stream.
- [status](foveatedstreamingsession/status-swift.property.md): The connection status of the session.

### Instance Methods

- [connect(endpoint:)](foveatedstreamingsession/connect%28endpoint_%29.md): Establishes a streaming connection at the provided endpoint.
- [connect(endpoint:streamingProvider:)](foveatedstreamingsession/connect%28endpoint_streamingprovider_%29.md): Establishes a streaming connection at the provided endpoint using the specified streaming provider.
- [disconnect()](foveatedstreamingsession/disconnect%28%29.md): Disconnects from the remote streaming endpoint, ending the streaming session.
- [messageChannel(for:)](foveatedstreamingsession/messagechannel%28for_%29.md): Creates or retrieves a message channel for the given message channel ID.
- [pause()](foveatedstreamingsession/pause%28%29.md): Pauses a session without ending it.
- [queryAuthorization(for:)](foveatedstreamingsession/queryauthorization%28for_%29.md): Returns the current authorization status of the given input capabilities without presenting an authorization prompt.
- [requestAuthorization(for:)](foveatedstreamingsession/requestauthorization%28for_%29.md): Requests authorization for the given input capabilities, prompting the user for any capability whose status is [FoveatedStreamingSession.AuthorizationStatus.notDetermined](foveatedstreamingsession/authorizationstatus/notdetermined.md).
- [resume()](foveatedstreamingsession/resume%28%29.md): Resumes a previously paused session.

### Type Methods

- [queryStreamingProviders()](foveatedstreamingsession/querystreamingproviders%28%29.md): Returns a list of currently-available streaming providers.

### Enumerations

- [FoveatedStreamingSession.AuthorizationStatus](foveatedstreamingsession/authorizationstatus.md): The authorization status of an [FoveatedStreamingSession.InputCapability](foveatedstreamingsession/inputcapability.md).
- [FoveatedStreamingSession.InputCapability](foveatedstreamingsession/inputcapability.md): An input source that a streaming session can request to send.
- [FoveatedStreamingSession.Status](foveatedstreamingsession/status-swift.enum.md): The connection state of a foveated streaming session.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Observable](https://developer.apple.com/documentation/observation/observable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Essentials

- [Streaming a CloudXR application to Apple Vision Pro with foveation](streaming-a-cloudxr-application-to-apple-vision-pro-with-foveation.md): Integrate NVIDIA CloudXR™ and the session management connection protocol into your desktop or cloud application to stream high-fidelity spatial content to Apple Vision Pro.
- [Establishing foveated streaming sessions with Apple Vision Pro](establishing-foveated-streaming-sessions-with-apple-vision-pro.md): Discover, pair, and manage streaming sessions between Apple Vision Pro and local streaming endpoints by implementing the session management connection protocol.
- [Creating a foveated streaming client on visionOS](creating-a-foveated-streaming-client-on-visionos.md): Build a visionOS app that streams high-fidelity immersive content from a computer or the cloud using the Foveated Streaming framework.
- [Analyzing the performance of a foveated streaming session](analyzing-the-performance-of-a-foveated-streaming-session.md): Use the Foveated Streaming Statistics instrument to evaluate the performance of your visionOS streaming client app.
- [FoveatedStreamingSpaceContent](foveatedstreamingspacecontent.md): A type that defines the content of an immersive space displaying a foveated stream.
