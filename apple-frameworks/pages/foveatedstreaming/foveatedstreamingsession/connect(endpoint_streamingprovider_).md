> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingsession/connect(endpoint:streamingprovider:)](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingsession/connect(endpoint:streamingprovider:))

# connect(endpoint:streamingProvider:)

**Framework:** Foveated Streaming  
**Kind:** Instance Method  
**Availability:** visionOS 27.0+

Establishes a streaming connection at the provided endpoint using the specified streaming provider.

## Declaration

```swift
@MainActor final func connect(endpoint: FoveatedStreamingSession.Endpoint = .systemDiscovered, streamingProvider: FoveatedStreamingSession.StreamingProvider) async throws
```

## Parameters

- `endpoint`: The endpoint to connect to (local IP, remote URL, or system-discovered).
- `streamingProvider`: The specific streaming provider to use for this connection.

<a id="discussion"></a>

## Discussion

This overload allows you to explicitly specify which streaming provider extension to use.

> **Throws**

> [FoveatedStreamingSession.DisconnectReason](disconnectreason.md) if the connection fails, or `CancellationError` if the task is cancelled.
