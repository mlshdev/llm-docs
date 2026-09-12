> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingsession/endpoint](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingsession/endpoint)

# FoveatedStreamingSession.Endpoint

**Framework:** Foveated Streaming  
**Kind:** Structure  
**Availability:** visionOS 26.4+

A streaming endpoint that a foveated streaming session can connect to.

## Declaration

```swift
struct Endpoint
```

## Mentioned In

- [Streaming a CloudXR application to Apple Vision Pro with foveation](../streaming-a-cloudxr-application-to-apple-vision-pro-with-foveation.md)

<a id="overview"></a>

## Overview

Use this object to specify the local or cloud streaming endpoint your foveated streaming session connects to when you call [connect(endpoint:)](connect%28endpoint_%29.md).

## Topics

### Type Properties

- [systemDiscovered](endpoint/systemdiscovered.md): Connects to an endpoint the person selects from a list of endpoints the system discovers and presents.

### Type Methods

- [local(ipAddress:port:)](endpoint/local%28ipaddress_port_%29.md): Connects to a local endpoint by IP address and port number.
- [remote(serverName:signalingHeaders:)](endpoint/remote%28servername_signalingheaders_%29.md): Connects to a remote endpoint by server name.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
