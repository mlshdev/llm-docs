> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingsession/endpoint/local(ipaddress:port:)](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingsession/endpoint/local(ipaddress:port:))

# local(ipAddress:port:)

**Framework:** Foveated Streaming  
**Kind:** Type Method  
**Availability:** visionOS 26.4+

Connects to a local endpoint by IP address and port number.

## Declaration

```swift
static func local(ipAddress: any IPAddress, port: NWEndpoint.Port) -> FoveatedStreamingSession.Endpoint
```

## Parameters

- `ipAddress`: The IP of the local endpoint.
- `port`: The port to connect to for the session management connection.

<a id="discussion"></a>

## Discussion

> **Note**

> The port is independent from the one used for streaming content, which is determined by the streaming provider.
