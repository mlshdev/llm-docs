> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingprovidercontext/reportconnectioninterrupted(_:)

# reportConnectionInterrupted(\_:)

**Framework:** Foveated Streaming  
**Kind:** Instance Method  
**Availability:** visionOS 27.0+

Reports that a previously-established connection was unexpectedly lost.

## Declaration

```swift
@MainActor final func reportConnectionInterrupted(_ error: any Error)
```

<a id="discussion"></a>

## Discussion

This may only be called while the provider is in the [FoveatedStreamingProviderStatus.connected](../foveatedstreamingproviderstatus/connected.md) state. Calling this transitions the session to `FoveatedStreamingProviderStatus/error(_:)`.

After calling this method, the provider should consider the session terminated. [disconnect()](../foveatedstreamingextension/disconnect%28%29.md) will **not** be called.
