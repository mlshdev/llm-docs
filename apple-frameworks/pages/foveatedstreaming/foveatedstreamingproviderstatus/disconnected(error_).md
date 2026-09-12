> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingproviderstatus/disconnected(error:)](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingproviderstatus/disconnected(error:))

# FoveatedStreamingProviderStatus.disconnected(error:)

**Framework:** Foveated Streaming  
**Kind:** Case  
**Availability:** visionOS 27.0+

The session has been disconnected for the provided reason.

## Declaration

```swift
case disconnected(error: NSError?)
```

<a id="discussion"></a>

## Discussion

If `error` is `nil`, then the disconnect event was requested by calling [disconnect()](../foveatedstreamingextension/disconnect%28%29.md).

If `error` is non-`nil`, then the disconnect event was due to an unexpected error.
