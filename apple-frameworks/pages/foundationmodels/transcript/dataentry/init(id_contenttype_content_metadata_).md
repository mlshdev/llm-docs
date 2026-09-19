> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/transcript/dataentry/init(id:contenttype:content:metadata:)

# init(id:contentType:content:metadata:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 27.2+ beta · iPadOS 27.2+ beta · Mac Catalyst 27.2+ beta · macOS 27.2+ beta · visionOS 27.2+ beta · watchOS 27.2+ beta

Creates a data entry with the content type, content, and metadata you provide.

## Declaration

```swift
init(id: String = UUID().uuidString, contentType: UTType, content: Data, metadata: GeneratedContent = GeneratedContent(properties: [:]))
```

## Parameters

- `id`: A unique identifier for the entry.
- `contentType`: A `UTType` identifying how to interpret `content`.
- `content`: A raw binary representation of the entry.
- `metadata`: Metadata pertinent to this entry.
