> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/transcript/tooloutput/init(id:toolname:segments:)

# init(id:toolName:segments:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Creates a tool output that provides the result of a tool call back to the model.

## Declaration

```swift
init(id: String, toolName: String, segments: [Transcript.Segment])
```

## Parameters

- `id`: A unique identifier for the tool output.
- `toolName`: The name of the tool that produced the output.
- `segments`: The segments that make up the output.
