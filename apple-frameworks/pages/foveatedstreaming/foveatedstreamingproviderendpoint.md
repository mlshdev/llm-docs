> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingproviderendpoint](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingproviderendpoint)

# FoveatedStreamingProviderEndpoint

**Framework:** Foveated Streaming  
**Kind:** Enumeration  
**Availability:** visionOS 27.0+

The streaming endpoint provided to a `FoveatedStreamingProvider` extension.

## Declaration

```swift
enum FoveatedStreamingProviderEndpoint
```

## Topics

### Structures

- [FoveatedStreamingProviderEndpoint.Local](foveatedstreamingproviderendpoint/local.md): Information needed to connect to a local streaming endpoint.
- [FoveatedStreamingProviderEndpoint.LocalPairingInformation](foveatedstreamingproviderendpoint/localpairinginformation.md): Information obtained during QR code pairing for a local connection.
- [FoveatedStreamingProviderEndpoint.Remote](foveatedstreamingproviderendpoint/remote.md): Information needed to connect to a remote (cloud) streaming endpoint.

### Enumeration Cases

- [FoveatedStreamingProviderEndpoint.local(\_:)](foveatedstreamingproviderendpoint/local%28__%29.md): A local streaming endpoint on the same network.
- [FoveatedStreamingProviderEndpoint.remote(\_:)](foveatedstreamingproviderendpoint/remote%28__%29.md): A remote (cloud) streaming endpoint.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Streaming provider extensions

- [FoveatedStreamingProviderContext](foveatedstreamingprovidercontext.md): Context object provided to a streaming provider when it connects.
