> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/tool/call(arguments:)](https://developer.apple.com/documentation/foundationmodels/tool/call(arguments:))

# call(arguments:)

**Framework:** Foundation Models  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Performs the tool’s action when a language model wants to use this tool.

## Declaration

```swift
@concurrent func call(arguments: Self.Arguments) async throws -> Self.Output
```

## Mentioned In

- [Expanding generation with tool calling](../expanding-generation-with-tool-calling.md)
- [Analyzing images with multimodal prompting](../analyzing-images-with-multimodal-prompting.md)

<a id="discussion"></a>

## Discussion

If errors are throw in the body of this method, the framework wraps them in a [LanguageModelSession.ToolCallError](../languagemodelsession/toolcallerror.md) and rethrows them at the call site of [respond(to:options:)](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/respond%28to:options:%29-6a2gb).

> **Note**

> This method may be invoked concurrently with itself or with other tools.

## See Also

### Calling a tool

- [Arguments](arguments.md): The arguments that this tool should accept.
- [Output](output.md): The output that this tool produces for the language model to reason about in subsequent interactions.
