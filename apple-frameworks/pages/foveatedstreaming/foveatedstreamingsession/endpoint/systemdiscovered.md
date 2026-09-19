> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingsession/endpoint/systemdiscovered

# systemDiscovered

**Framework:** Foveated Streaming  
**Kind:** Type Property  
**Availability:** visionOS 26.4+

Connects to an endpoint the person selects from a list of endpoints the system discovers and presents.

## Declaration

```swift
static var systemDiscovered: FoveatedStreamingSession.Endpoint { get }
```

<a id="discussion"></a>

## Discussion

The framework presents the person with system UI allowing them to select and connect to a local streaming endpoint.
