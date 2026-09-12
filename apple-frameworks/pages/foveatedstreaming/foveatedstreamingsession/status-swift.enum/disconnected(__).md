> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingsession/status-swift.enum/disconnected(_:)](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingsession/status-swift.enum/disconnected(_:))

# FoveatedStreamingSession.Status.disconnected(\_:)

**Framework:** Foveated Streaming  
**Kind:** Case  
**Availability:** visionOS 26.4+

The session has disconnected or failed to connect to a streaming endpoint.

## Declaration

```swift
case disconnected(FoveatedStreamingSession.DisconnectReason)
```

<a id="discussion"></a>

## Discussion

The [FoveatedStreamingSession](../../foveatedstreamingsession.md) enters this state after you call [disconnect()](../disconnect%28%29.md) or because the connection has been interrupted.
