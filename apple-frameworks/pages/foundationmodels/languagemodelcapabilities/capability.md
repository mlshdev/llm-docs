> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelcapabilities/capability](https://developer.apple.com/documentation/foundationmodels/languagemodelcapabilities/capability)

# LanguageModelCapabilities.Capability

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A capability that a given language model may or may not have.

## Declaration

```swift
struct Capability
```

## Topics

### Accessing model capabilities

- [guidedGeneration](capability/guidedgeneration.md): The capability to ensure model output conforms to a given generation schema.
- [reasoning](capability/reasoning.md): The capability to reason, structurally separately from producing a response.
- [toolCalling](capability/toolcalling.md): The capability to call tools to gather information or trigger side effects.
- [vision](capability/vision.md): The capability to accept image inputs in prompts.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating an instance

- [init(\_:)](init%28__%29.md): Creates a capabilities instance from a list of supported capabilities.
