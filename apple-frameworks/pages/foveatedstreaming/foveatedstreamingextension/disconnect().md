> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingextension/disconnect()](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingextension/disconnect())

# disconnect()

**Framework:** Foveated Streaming  
**Kind:** Instance Method  
**Availability:** visionOS 27.0+

Disconnect from the streaming endpoint.

## Declaration

```swift
@MainActor func disconnect() async throws
```

<a id="discussion"></a>

## Discussion

This method should cleanly shut down the streaming connection and release any associated resources.

This function will be called exactly once for the lifetime of the process.

> **Warning**

> If the disconnect does not complete within a reasonable time, the process will be forcefully terminated.

> **Throws**

> If the disconnect does not complete cleanly.  The error will be presented to the host app.
