> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelcapabilities/capability/toolcalling

# toolCalling

**Framework:** Foundation Models  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The capability to call tools to gather information or trigger side effects.

## Declaration

```swift
static var toolCalling: LanguageModelCapabilities.Capability { get }
```

## See Also

### Accessing model capabilities

- [guidedGeneration](guidedgeneration.md): The capability to ensure model output conforms to a given generation schema.
- [reasoning](reasoning.md): The capability to reason, structurally separately from producing a response.
- [vision](vision.md): The capability to accept image inputs in prompts.
