> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingextension](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingextension)

# FoveatedStreamingExtension

**Framework:** Foveated Streaming  
**Kind:** Protocol  
**Availability:** visionOS 27.0+

A foveated streaming provider extension.

## Declaration

```swift
@MainActor protocol FoveatedStreamingExtension : AnyObject, AppExtension
```

<a id="overview"></a>

## Overview

Foveated streaming providers are a system extension that allows developers to use your custom protocol with a [FoveatedStreamingSession](foveatedstreamingsession.md).

Foveated streaming providers require the `com.apple.developer.foveated-streaming-provider` entitlement.

```swift
@main
final class MyStreamingProvider: FoveatedStreamingExtension {
    func connect(context: Context) async throws { /* ... */ }
    func disconnect() async throws { /* ... */ }
    func openMessageChannel(_ channel: MessageChannel) throws { /* ... */ }
    var immersiveScene: some View { /* ... */ }
}
```

## Topics

### Associated Types

- [Content](foveatedstreamingextension/content.md): The type of the view that renders the streamed content.

### Instance Properties

- [immersiveScene](foveatedstreamingextension/immersivescene.md): The SwiftUI view that renders the streamed content.

### Instance Methods

- [connect(context:)](foveatedstreamingextension/connect%28context_%29.md): Connect to the provided endpoint.
- [disconnect()](foveatedstreamingextension/disconnect%28%29.md): Disconnect from the streaming endpoint.
- [openMessageChannel(\_:)](foveatedstreamingextension/openmessagechannel%28__%29.md): Handles a message channel opened by the host app.

### Type Aliases

- [FoveatedStreamingExtension.Context](foveatedstreamingextension/context.md): The context object provided to the extension when it connects.
- [FoveatedStreamingExtension.Endpoint](foveatedstreamingextension/endpoint.md): The streaming endpoint the extension connects to.
- [FoveatedStreamingExtension.FocusRegion](foveatedstreamingextension/focusregion.md): The approximate region where the person is looking.
- [FoveatedStreamingExtension.MessageChannel](foveatedstreamingextension/messagechannel.md): A message channel between the host app and the extension.
- [FoveatedStreamingExtension.Status](foveatedstreamingextension/status.md): The lifecycle state of the extension.

## Relationships

### Inherits From

- [AppExtension](../extensionfoundation/appextension.md)
