> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingsession/status-swift.enum/paused](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingsession/status-swift.enum/paused)

# FoveatedStreamingSession.Status.paused

**Framework:** Foveated Streaming  
**Kind:** Case  
**Availability:** visionOS 26.4+

The session is paused and has temporarily stopped streaming from a streaming endpoint.

## Declaration

```swift
case paused
```

<a id="discussion"></a>

## Discussion

This state is similar to [FoveatedStreamingSession.Status.disconnected(\_:)](disconnected%28__%29.md), except that reconnecting to the streaming endpoint from this state gaurantees that the person doesn’t have to re-pair with the streaming endpoint.

You can reconnect to the streaming endpoint from this state by calling [resume()](../resume%28%29.md).
