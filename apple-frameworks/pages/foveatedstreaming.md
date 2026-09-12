> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming](https://developer.apple.com/documentation/foveatedstreaming)

# Foveated Streaming

**Framework:** Foveated Streaming  
**Kind:** Framework  
**Availability:** visionOS 26.4+

Foveated Streaming enables visionOS apps to display high-resolution, low-latency immersive content from streaming endpoints.

<a id="Overview"></a>

## Overview

The Foveated Streaming framework provides a session-based API for establishing connections from Apple Vision Pro to local and cloud streaming endpoints. The endpoint host streams high quality content only where necessary based on information about the approximate region where the person is looking, ensuring performance. Applications and games can integrate with the NVIDIA CloudXR™ SDK to become streaming endpoints.

On Apple Vision Pro, Foveated Streaming allows you to display visionOS spatial content alongside streaming content. For example, a flight simulator app can render a cockpit using [RealityKit](realitykit.md), and stream a processor-intensive landscape from a remote computer to the device.

The core workflow involves creating a [FoveatedStreamingSession](foveatedstreaming/foveatedstreamingsession.md), establishing a connection to the external streaming endpoint, and presenting the streamed content inside the app’s [ImmersiveSpace](https://developer.apple.com/documentation/swiftui/immersivespace). All of the features of `ImmersiveSpace` are available, including progressive and mixed immersion styles. A bidirectional message channel system allows visionOS apps to exchange custom data with streaming endpoints, allowing apps to configure the streamed content with a native [SwiftUI](https://developer.apple.com/documentation/swiftui) interface.

## Topics

### Essentials

- [Streaming a CloudXR application to Apple Vision Pro with foveation](foveatedstreaming/streaming-a-cloudxr-application-to-apple-vision-pro-with-foveation.md): Integrate NVIDIA CloudXR™ and the session management connection protocol into your desktop or cloud application to stream high-fidelity spatial content to Apple Vision Pro.
- [Establishing foveated streaming sessions with Apple Vision Pro](foveatedstreaming/establishing-foveated-streaming-sessions-with-apple-vision-pro.md): Discover, pair, and manage streaming sessions between Apple Vision Pro and local streaming endpoints by implementing the session management connection protocol.
- [Creating a foveated streaming client on visionOS](foveatedstreaming/creating-a-foveated-streaming-client-on-visionos.md): Build a visionOS app that streams high-fidelity immersive content from a computer or the cloud using the Foveated Streaming framework.
- [Analyzing the performance of a foveated streaming session](foveatedstreaming/analyzing-the-performance-of-a-foveated-streaming-session.md): Use the Foveated Streaming Statistics instrument to evaluate the performance of your visionOS streaming client app.
- [FoveatedStreamingSession](foveatedstreaming/foveatedstreamingsession.md): A session that manages a foveated streaming connection to a local or remote streaming endpoint.
- [FoveatedStreamingSpaceContent](foveatedstreaming/foveatedstreamingspacecontent.md): A type that defines the content of an immersive space displaying a foveated stream.

### Presentation and control

- [init(foveatedStreaming:)](https://developer.apple.com/documentation/swiftui/immersivespace/init%28foveatedstreaming:%29): Creates an immersive space to display foveated streaming content.
- [init(foveatedStreaming:content:)](https://developer.apple.com/documentation/swiftui/immersivespace/init%28foveatedstreaming:content:%29): Creates an immersive space to display foveated streaming content alongside `RealityKit` content.
- [foveatedStreamingPauseSheet(session:)](https://developer.apple.com/documentation/swiftui/view/foveatedstreamingpausesheet%28session:%29): Tells the system to present a sheet with controls for resuming or ending the foveated streaming session when it pauses.

### Streaming provider extensions

- [FoveatedStreamingProviderContext](foveatedstreaming/foveatedstreamingprovidercontext.md): Context object provided to a streaming provider when it connects.
- [FoveatedStreamingProviderEndpoint](foveatedstreaming/foveatedstreamingproviderendpoint.md): The streaming endpoint provided to a `FoveatedStreamingProvider` extension.

### Classes

- [FoveatedStreamingProviderMessageChannel](foveatedstreaming/foveatedstreamingprovidermessagechannel.md): A message channel between the host app and a streaming provider extension.

### Protocols

- [FoveatedStreamingExtension](foveatedstreaming/foveatedstreamingextension.md): A foveated streaming provider extension.

### Structures

- [FoveatedStreamingProviderFocusRegion](foveatedstreaming/foveatedstreamingproviderfocusregion.md): Eye input data that describes the approximate region that the end user is looking, relative to the device pose.

### Enumerations

- [FoveatedStreamingProviderStatus](foveatedstreaming/foveatedstreamingproviderstatus.md): An enum describing the state of a [FoveatedStreamingExtension](foveatedstreaming/foveatedstreamingextension.md).
