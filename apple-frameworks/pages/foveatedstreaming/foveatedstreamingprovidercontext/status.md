> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingprovidercontext/status](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingprovidercontext/status)

# status

**Framework:** Foveated Streaming  
**Kind:** Instance Property  
**Availability:** visionOS 27.0+

Reports the current status of the foveated streaming provider.

## Declaration

```swift
@MainActor final var status: FoveatedStreamingProviderStatus { get }
```

<a id="discussion"></a>

## Discussion

- If the status is `connecting`, then [connect(context:)](../foveatedstreamingextension/connect%28context_%29.md) is in the middle of being called.
- If the status is `connected`, then [connect(context:)](../foveatedstreamingextension/connect%28context_%29.md) has completed its call without error.  The stream is assumed running.
- If the status is `disconnecting`, then [disconnect()](../foveatedstreamingextension/disconnect%28%29.md) is in the middle of being called.
- If the status is `disconnected`, then [disconnect()](../foveatedstreamingextension/disconnect%28%29.md) has completed its call without error.  The stream has been cleanly disconnected.
- If the status is `interrupted`, then [reportConnectionInterrupted(\_:)](reportconnectioninterrupted%28__%29.md) has been called.
