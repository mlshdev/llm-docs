> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/generationoptions/toolcallingmode-swift.struct/allowed

# allowed

**Framework:** Foundation Models  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The model may or may not call tools.

## Declaration

```swift
static let allowed: GenerationOptions.ToolCallingMode
```

## Mentioned In

- [Expanding generation with tool calling](../../expanding-generation-with-tool-calling.md)

<a id="discussion"></a>

## Discussion

This is the default.

## See Also

### Getting the tool calling modes

- [disallowed](disallowed.md): The model may not call any tool.
- [required](required.md): The model must call one or multiple tools.
