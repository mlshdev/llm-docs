> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingprovidercontext/requestedinputcapabilities

# requestedInputCapabilities

**Framework:** Foveated Streaming  
**Kind:** Instance Property  
**Availability:** visionOS 27.0+

The set of input capabilities the host app has requested for this session.

## Declaration

```swift
@MainActor final var requestedInputCapabilities: Set<FoveatedStreamingSession.InputCapability> { get }
```
