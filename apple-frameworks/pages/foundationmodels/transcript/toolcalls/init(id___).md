> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/transcript/toolcalls/init(id:_:)

# init(id:\_:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Creates a collection that contains the tool calls you provide.

## Declaration

```swift
init<S>(id: String = UUID().uuidString, _ calls: S) where S : Sequence, S.Element == Transcript.ToolCall
```

## Parameters

- `id`: A unique identifier for the collection of tool calls.
- `calls`: The tool calls to include, in the order the model generates them.
