> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelcapabilities/capability/reasoning](https://developer.apple.com/documentation/foundationmodels/languagemodelcapabilities/capability/reasoning)

# reasoning

**Framework:** Foundation Models  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The capability to reason, structurally separately from producing a response.

## Declaration

```swift
static var reasoning: LanguageModelCapabilities.Capability { get }
```

## See Also

### Accessing model capabilities

- [guidedGeneration](guidedgeneration.md): The capability to ensure model output conforms to a given generation schema.
- [toolCalling](toolcalling.md): The capability to call tools to gather information or trigger side effects.
- [vision](vision.md): The capability to accept image inputs in prompts.
