> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingspacecontent](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingspacecontent)

# FoveatedStreamingSpaceContent

**Framework:** Foveated Streaming  
**Kind:** Structure  
**Availability:** visionOS 26.4+

A type that defines the content of an immersive space displaying a foveated stream.

## Declaration

```swift
@MainActor @preconcurrency struct FoveatedStreamingSpaceContent
```

<a id="overview"></a>

## Overview

Don’t use `FoveatedStreamingSpaceContent` directly. The Foveated Streaming framework uses it when you call [init(foveatedStreaming:content:)](https://developer.apple.com/documentation/swiftui/immersivespace/init%28foveatedstreaming:content:%29) to display spatial content from a foveated streaming session alongside [RealityKit](../realitykit.md) content:

```swift
ImmersiveSpace(foveatedStreaming: session) {
    RealityView { content in
        // Optional: Add `RealityKit` content to the immersive space to co-exist with the streamed content.
    }
}
```

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)

## See Also

### Essentials

- [Streaming a CloudXR application to Apple Vision Pro with foveation](streaming-a-cloudxr-application-to-apple-vision-pro-with-foveation.md): Integrate NVIDIA CloudXR™ and the session management connection protocol into your desktop or cloud application to stream high-fidelity spatial content to Apple Vision Pro.
- [Establishing foveated streaming sessions with Apple Vision Pro](establishing-foveated-streaming-sessions-with-apple-vision-pro.md): Discover, pair, and manage streaming sessions between Apple Vision Pro and local streaming endpoints by implementing the session management connection protocol.
- [Creating a foveated streaming client on visionOS](creating-a-foveated-streaming-client-on-visionos.md): Build a visionOS app that streams high-fidelity immersive content from a computer or the cloud using the Foveated Streaming framework.
- [Analyzing the performance of a foveated streaming session](analyzing-the-performance-of-a-foveated-streaming-session.md): Use the Foveated Streaming Statistics instrument to evaluate the performance of your visionOS streaming client app.
- [FoveatedStreamingSession](foveatedstreamingsession.md): A session that manages a foveated streaming connection to a local or remote streaming endpoint.
