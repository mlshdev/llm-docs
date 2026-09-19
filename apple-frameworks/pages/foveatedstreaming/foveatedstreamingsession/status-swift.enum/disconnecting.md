> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingsession/status-swift.enum/disconnecting

# FoveatedStreamingSession.Status.disconnecting

**Framework:** Foveated Streaming  
**Kind:** Case  
**Availability:** visionOS 26.4+

The session is disconnecting from a streaming endpoint.

## Declaration

```swift
case disconnecting
```

<a id="discussion"></a>

## Discussion

The [FoveatedStreamingSession](../../foveatedstreamingsession.md) briefly enters this state after you call [disconnect()](../disconnect%28%29.md) while it completes the disconnection.
