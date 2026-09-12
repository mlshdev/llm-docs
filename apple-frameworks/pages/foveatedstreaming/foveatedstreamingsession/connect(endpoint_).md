> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingsession/connect(endpoint:)](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingsession/connect(endpoint:))

# connect(endpoint:)

**Framework:** Foveated Streaming  
**Kind:** Instance Method  
**Availability:** visionOS 26.4+

Establishes a streaming connection at the provided endpoint.

## Declaration

```swift
@MainActor final func connect(endpoint: FoveatedStreamingSession.Endpoint = .systemDiscovered) async throws
```

## Parameters

- `endpoint`: The streaming endpoint to connect to.

<a id="discussion"></a>

## Discussion

> **Throws**

> A [FoveatedStreamingSession.DisconnectReason](disconnectreason.md) error if a disconnection occurs.  Or, a [CancellationError](https://developer.apple.com/documentation/swift/cancellationerror) if the task is cancelled.

You can establish a streaming connection in a variety of ways:

```swift
// Connect by discovering nearby endpoints.
try await session.connect(endpoint: .systemDiscovered)

// Connect directly with IP address and port number.
try await session.connect(endpoint: .local(ipAddress: "125.125.125.125", port: 55000))

// Connect to a remote cloud endpoint by specifying a server name
// which corresponds to an entry in the `ApprovedStreamingEndpoints` dictionary in Info.plist.
try await session.connect(endpoint: .remote(serverName: "My Remote Server", signalingHeaders: ["test-header": "my-test"])
```

You can stop establishing a connection by cancelling the task or calling [disconnect()](disconnect%28%29.md).
