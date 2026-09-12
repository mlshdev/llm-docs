> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/generationoptions/toolcallingmode-swift.struct/required](https://developer.apple.com/documentation/foundationmodels/generationoptions/toolcallingmode-swift.struct/required)

# required

**Framework:** Foundation Models  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The model must call one or multiple tools.

## Declaration

```swift
static let required: GenerationOptions.ToolCallingMode
```

## Mentioned In

- [Expanding generation with tool calling](../../expanding-generation-with-tool-calling.md)

<a id="discussion"></a>

## Discussion

Please note that [LanguageModelSession](../../languagemodelsession.md) will loop until a `Tool` throws an error or this value is changed dynamically via `LanguageModelSession.Manifest`.

## See Also

### Getting the tool calling modes

- [allowed](allowed.md): The model may or may not call tools.
- [disallowed](disallowed.md): The model may not call any tool.
