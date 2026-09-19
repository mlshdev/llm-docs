> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingsession/querystreamingproviders()

# queryStreamingProviders()

**Framework:** Foveated Streaming  
**Kind:** Type Method  
**Availability:** visionOS 27.0+

Returns a list of currently-available streaming providers.

## Declaration

```swift
@MainActor static func queryStreamingProviders() async -> [FoveatedStreamingSession.StreamingProvider]
```
