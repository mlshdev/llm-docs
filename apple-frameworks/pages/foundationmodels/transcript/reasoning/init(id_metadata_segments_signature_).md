> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/transcript/reasoning/init(id:metadata:segments:signature:)

# init(id:metadata:segments:signature:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a reasoning entry that contains the segments you provide.

## Declaration

```swift
init(id: String = UUID().uuidString, metadata: [String : any ConvertibleToGeneratedContent] = [:], segments: [Transcript.Segment], signature: Data? = nil)
```

## Parameters

- `id`: A unique identifier for the reasoning entry.
- `metadata`: Additional information to associate with the entry, keyed by name.
- `segments`: The reasoning segments, in order.
- `signature`: An opaque, producer-supplied signature for the reasoning entry, if any.
