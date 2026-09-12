> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingprovidercontext/verifyremoteservertrust(for:)](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingprovidercontext/verifyremoteservertrust(for:))

# verifyRemoteServerTrust(for:)

**Framework:** Foveated Streaming  
**Kind:** Instance Method  
**Availability:** visionOS 27.0+

Verifies the server certificate presented in a TLS authentication challenge.

## Declaration

```swift
@MainActor final func verifyRemoteServerTrust(for challenge: URLAuthenticationChallenge) async -> Bool
```

## Parameters

- `challenge`: The authentication challenge to verify.

<a id="return-value"></a>

## Return Value

`true` if the server is trusted; `false` otherwise.

<a id="discussion"></a>

## Discussion

Streaming provider extensions are responsible for calling this method when handling authentication challenges from `URLSession` (or equivalent) for remote streaming endpoints, to validate the server’s certificate before completing the connection.
