> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/transcript/dataattachment/init(contenttype:content:metadata:)

# init(contentType:content:metadata:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 27.2+ beta · iPadOS 27.2+ beta · Mac Catalyst 27.2+ beta · macOS 27.2+ beta · visionOS 27.2+ beta · watchOS 27.2+ beta

Creates a data attachment with the content type, content, and metadata you provide.

## Declaration

```swift
init(contentType: UTType, content: Data, metadata: GeneratedContent = GeneratedContent(properties: [:]))
```

## Parameters

- `contentType`: A `UTType` identifying how to interpret `content`.
- `content`: A raw binary representation of the attachment.
- `metadata`: Metadata pertinent to this attachment.
