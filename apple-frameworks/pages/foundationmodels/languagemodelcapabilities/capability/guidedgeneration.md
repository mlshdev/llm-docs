> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelcapabilities/capability/guidedgeneration](https://developer.apple.com/documentation/foundationmodels/languagemodelcapabilities/capability/guidedgeneration)

# guidedGeneration

**Framework:** Foundation Models  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The capability to ensure model output conforms to a given generation schema.

## Declaration

```swift
static var guidedGeneration: LanguageModelCapabilities.Capability { get }
```

## See Also

### Accessing model capabilities

- [reasoning](reasoning.md): The capability to reason, structurally separately from producing a response.
- [toolCalling](toolcalling.md): The capability to call tools to gather information or trigger side effects.
- [vision](vision.md): The capability to accept image inputs in prompts.
