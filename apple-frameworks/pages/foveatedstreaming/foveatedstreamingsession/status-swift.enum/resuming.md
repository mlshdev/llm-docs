> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingsession/status-swift.enum/resuming

# FoveatedStreamingSession.Status.resuming

**Framework:** Foveated Streaming  
**Kind:** Case  
**Availability:** visionOS 26.4+

The session is resuming its connection to a streaming endpoint.

## Declaration

```swift
case resuming
```

<a id="discussion"></a>

## Discussion

The [FoveatedStreamingSession](../../foveatedstreamingsession.md) briefly enters this state while it reestablishes a connection with the streaming endpoint after you call  [resume()](../resume%28%29.md), or after the person presses the resume button on the system UI presented when the session is paused.
