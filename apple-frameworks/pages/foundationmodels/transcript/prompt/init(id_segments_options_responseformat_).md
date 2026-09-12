> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/transcript/prompt/init(id:segments:options:responseformat:)](https://developer.apple.com/documentation/foundationmodels/transcript/prompt/init(id:segments:options:responseformat:))

# init(id:segments:options:responseFormat:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Creates a prompt.

## Declaration

```swift
init(id: String = UUID().uuidString, segments: [Transcript.Segment], options: GenerationOptions = GenerationOptions(), responseFormat: Transcript.ResponseFormat? = nil)
```

## Parameters

- `id`: A [Generable](../../generable.md) type to use as the response format.
- `segments`: An array of segments that make up the prompt.
- `options`: Options that control how tokens are sampled from the distribution the model produces.
- `responseFormat`: A response format that describes the output structure.

## See Also

### Creating a prompt

- [init(id:metadata:segments:options:responseFormat:contextOptions:)](init%28id_metadata_segments_options_responseformat_contextoptions_%29.md): Creates a prompt.
