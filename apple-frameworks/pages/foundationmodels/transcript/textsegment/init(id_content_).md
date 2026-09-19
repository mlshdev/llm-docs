> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/transcript/textsegment/init(id:content:)

# init(id:content:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Creates a text segment that contains the text you provide.

## Declaration

```swift
init(id: String = UUID().uuidString, content: String)
```

## Parameters

- `id`: A unique identifier for the segment.
- `content`: The text of the segment.
