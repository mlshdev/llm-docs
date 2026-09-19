> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingsession/status-swift.enum/pausing

# FoveatedStreamingSession.Status.pausing

**Framework:** Foveated Streaming  
**Kind:** Case  
**Availability:** visionOS 26.4+

The session is pausing its connection to a streaming endpoint.

## Declaration

```swift
case pausing
```

<a id="discussion"></a>

## Discussion

The [FoveatedStreamingSession](../../foveatedstreamingsession.md) briefly enters this state while it pauses the connection after you call [pause()](../pause%28%29.md), or the person returned to the home screen on visionOS.
