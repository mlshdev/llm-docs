> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingsession/streamingprovider/bundleidentifier

# bundleIdentifier

**Framework:** Foveated Streaming  
**Kind:** Instance Property  
**Availability:** visionOS 27.0+

The bundle identifier of the extension.

## Declaration

```swift
let bundleIdentifier: String
```

<a id="discussion"></a>

## Discussion

This bundle identifier will be sent to endpoints during initial TCP handshake.
