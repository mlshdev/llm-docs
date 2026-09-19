> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/transcript/structuredsegment/init(id:schemaname:content:)

# init(id:schemaName:content:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a structured segment that contains the generated content you provide.

## Declaration

```swift
init(id: String = UUID().uuidString, schemaName: String, content: GeneratedContent)
```

## Parameters

- `id`: A unique identifier for the segment.
- `schemaName`: A name that describes which type the content represents.
- `content`: The structured content of the segment.

## See Also

### Creating a structured segment

- [init(id:source:content:)](init%28id_source_content_%29.md): Deprecated.
