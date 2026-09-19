> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingproviderstatus

# FoveatedStreamingProviderStatus

**Framework:** Foveated Streaming  
**Kind:** Enumeration  
**Availability:** visionOS 27.0+

An enum describing the state of a [FoveatedStreamingExtension](foveatedstreamingextension.md).

## Declaration

```swift
enum FoveatedStreamingProviderStatus
```

## Topics

### Enumeration Cases

- [FoveatedStreamingProviderStatus.connected](foveatedstreamingproviderstatus/connected.md): Connected and streaming.
- [FoveatedStreamingProviderStatus.connecting](foveatedstreamingproviderstatus/connecting.md): [connect(context:)](foveatedstreamingextension/connect%28context_%29.md) is in progress.
- [FoveatedStreamingProviderStatus.disconnected(error:)](foveatedstreamingproviderstatus/disconnected%28error_%29.md): The session has been disconnected for the provided reason.
- [FoveatedStreamingProviderStatus.disconnecting](foveatedstreamingproviderstatus/disconnecting.md): [disconnect()](foveatedstreamingextension/disconnect%28%29.md) has been called.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
