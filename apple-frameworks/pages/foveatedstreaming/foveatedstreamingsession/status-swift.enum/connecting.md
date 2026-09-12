> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingsession/status-swift.enum/connecting](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingsession/status-swift.enum/connecting)

# FoveatedStreamingSession.Status.connecting

**Framework:** Foveated Streaming  
**Kind:** Case  
**Availability:** visionOS 26.4+

The session is connecting to a streaming endpoint.

## Declaration

```swift
case connecting
```

<a id="discussion"></a>

## Discussion

The [FoveatedStreamingSession](../../foveatedstreamingsession.md) enters this state after you call [connect(endpoint:)](../connect%28endpoint_%29.md). When in this state, the person may still be navigating system UI to select an endpoint or scanning a QR code to authenticate the connection.
