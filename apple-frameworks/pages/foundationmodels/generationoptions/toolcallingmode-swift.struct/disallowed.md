> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/generationoptions/toolcallingmode-swift.struct/disallowed

# disallowed

**Framework:** Foundation Models  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The model may not call any tool.

## Declaration

```swift
static let disallowed: GenerationOptions.ToolCallingMode
```

## Mentioned In

- [Expanding generation with tool calling](../../expanding-generation-with-tool-calling.md)

## See Also

### Getting the tool calling modes

- [allowed](allowed.md): The model may or may not call tools.
- [required](required.md): The model must call one or multiple tools.
