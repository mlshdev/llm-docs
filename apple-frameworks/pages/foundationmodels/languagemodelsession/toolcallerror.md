> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelsession/toolcallerror](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/toolcallerror)

# LanguageModelSession.ToolCallError

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

An error that occurs while a language model is calling a tool.

## Declaration

```swift
struct ToolCallError
```

## Mentioned In

- [Expanding generation with tool calling](../expanding-generation-with-tool-calling.md)

## Topics

### Creating a tool call error

- [init(tool:underlyingError:)](toolcallerror/init%28tool_underlyingerror_%29.md): Creates a tool call error

### Getting the tool

- [tool](toolcallerror/tool.md): The tool that produced the error.

### Getting the error description

- [errorDescription](toolcallerror/errordescription.md): A string representation of the error description.

### Getting the underlying error

- [underlyingError](toolcallerror/underlyingerror.md): The underlying error that was thrown during a tool call.

### Default Implementations

- [LocalizedError Implementations](toolcallerror/localizederror-implementations.md)

## Relationships

### Conforms To

- [Error](https://developer.apple.com/documentation/swift/error)
- [LocalizedError](../../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [LanguageModelSession.Error](error.md): A failure caused by incorrect use of a language model session.
- [LanguageModelSession.GenerationError](generationerror.md): Deprecated. An error that may occur while generating a response.
