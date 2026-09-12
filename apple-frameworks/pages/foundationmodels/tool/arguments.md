> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/tool/arguments](https://developer.apple.com/documentation/foundationmodels/tool/arguments)

# Arguments

**Framework:** Foundation Models  
**Kind:** Associated Type  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

The arguments that this tool should accept.

## Declaration

```swift
associatedtype Arguments : ConvertibleFromGeneratedContent
```

## Mentioned In

- [Expanding generation with tool calling](../expanding-generation-with-tool-calling.md)

<a id="discussion"></a>

## Discussion

Typically arguments are either a [Generable](../generable.md) type or [GeneratedContent](../generatedcontent.md).

## See Also

### Calling a tool

- [call(arguments:)](call%28arguments_%29.md): Performs the tool’s action when a language model wants to use this tool.
- [Output](output.md): The output that this tool produces for the language model to reason about in subsequent interactions.
