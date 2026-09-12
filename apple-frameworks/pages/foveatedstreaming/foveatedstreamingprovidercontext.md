> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingprovidercontext](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingprovidercontext)

# FoveatedStreamingProviderContext

**Framework:** Foveated Streaming  
**Kind:** Class  
**Availability:** visionOS 27.0+

Context object provided to a streaming provider when it connects.

## Declaration

```swift
@MainActor final class FoveatedStreamingProviderContext
```

<a id="overview"></a>

## Overview

Provides access to session state, endpoint information, focus region data, and helpers for communicating events back to the host app.

## Topics

### Instance Properties

- [endpoint](foveatedstreamingprovidercontext/endpoint.md): The endpoint for which a connection is being requested (local IP or remote URL).
- [immersiveSpaceFromRemoteSpaceTransform](foveatedstreamingprovidercontext/immersivespacefromremotespacetransform.md): Transform matrix from the remote space to the immersive space.
- [latestFocusRegion](foveatedstreamingprovidercontext/latestfocusregion.md): The latest eye input data, to be used to enable foveated streaming.
- [requestedInputCapabilities](foveatedstreamingprovidercontext/requestedinputcapabilities.md): The set of input capabilities the host app has requested for this session.
- [status](foveatedstreamingprovidercontext/status.md): Reports the current status of the foveated streaming provider.

### Instance Methods

- [attributeToHostApp(\_:)](foveatedstreamingprovidercontext/attributetohostapp%28__%29-50mip.md): Attributes an IOSurface’s memory to the host app instead of the extension.
- [attributeToHostApp(\_:)](foveatedstreamingprovidercontext/attributetohostapp%28__%29-88yg7.md): Attributes a Metal resource’s memory to the host app instead of the extension.
- [reportConnectionInterrupted(\_:)](foveatedstreamingprovidercontext/reportconnectioninterrupted%28__%29.md): Reports that a previously-established connection was unexpectedly lost.
- [updateAvailableMessageChannels(\_:)](foveatedstreamingprovidercontext/updateavailablemessagechannels%28__%29.md): Notifies the host app that the list of available message channels has updated.
- [verifyRemoteServerTrust(for:)](foveatedstreamingprovidercontext/verifyremoteservertrust%28for_%29.md): Verifies the server certificate presented in a TLS authentication challenge.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Observable](https://developer.apple.com/documentation/observation/observable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Streaming provider extensions

- [FoveatedStreamingProviderEndpoint](foveatedstreamingproviderendpoint.md): The streaming endpoint provided to a `FoveatedStreamingProvider` extension.
