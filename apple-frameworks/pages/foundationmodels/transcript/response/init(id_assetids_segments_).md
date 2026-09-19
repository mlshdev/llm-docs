> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/transcript/response/init(id:assetids:segments:)

# init(id:assetIDs:segments:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Creates a response that contains the segments you provide.

## Declaration

```swift
init(id: String = UUID().uuidString, assetIDs: [String], segments: [Transcript.Segment])
```

## Parameters

- `id`: A unique identifier for the response.
- `assetIDs`: A list of identifiers for the assets used to generate the response.
- `segments`: The segments of the response, in order.

## See Also

### Creating a response

- [init(id:metadata:segments:)](init%28id_metadata_segments_%29.md): Creates a response that contains the metadata and segments you provide.
