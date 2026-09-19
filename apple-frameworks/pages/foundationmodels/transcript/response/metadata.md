> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/transcript/response/metadata

# metadata

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Metadata associated with generating the response.

## Declaration

```swift
@backDeployed(before: iOS 27.0, macOS 27.0, visionOS 27.0)
var metadata: [String : GeneratedContent] { get }
```

## See Also

### Inspecting a response

- [segments](segments.md): Ordered response segments.
- [assetIDs](assetids.md): Version-aware identifiers for all assets used to generate this response.
